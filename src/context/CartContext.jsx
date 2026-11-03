import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('che_ferramentas_cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState(null)

  useEffect(() => {
    try {
      localStorage.setItem('che_ferramentas_cart', JSON.stringify(cart))
    } catch (err) {
      console.error('Erro ao salvar carrinho no localStorage:', err)
    }
  }, [cart])

  // Fecha o toast automaticamente
  useEffect(() => {
    if (!toastMessage) return
    const timer = setTimeout(() => {
      setToastMessage(null)
    }, 3000)
    return () => clearTimeout(timer)
  }, [toastMessage])

  // Adiciona produto com tamanho específico ao carrinho
  const addToCart = (product, size, { openDrawer = false } = {}) => {
    const sizeName = size?.tam || (product.tamanhos?.[0]?.tam ?? product.medidas)
    const sizePrice = size?.preco || (product.tamanhos?.[0]?.preco ?? product.preco)

    // Extrai número do preço (ex: "R$ 159,90" -> 159.90, "A partir de R$ 119,90" -> 119.90)
    const numericClean = sizePrice.replace(/[^\d,]/g, '').replace(',', '.')
    const numericPrice = parseFloat(numericClean) || 0

    const cartItemId = `${product.id}-${sizeName.replace(/\s+/g, '-').toLowerCase()}`

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.cartItemId === cartItemId)
      if (existing) {
        return prevCart.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      }
      return [
        ...prevCart,
        {
          cartItemId,
          productId: product.id,
          nome: product.nome,
          tamanho: sizeName,
          preco: sizePrice.replace('A partir de ', ''),
          precoNumerico: numericPrice,
          imagem: product.imagem,
          quantidade: 1
        }
      ]
    })

    // Feedback visual
    setToastMessage(`Adicionado: ${product.nome} (${sizeName})`)

    if (openDrawer) {
      setIsCartOpen(true)
    }
  }

  // Remove um item específico
  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId))
  }

  // Altera quantidade (+1 ou -1)
  const updateQuantity = (cartItemId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const novaQtd = item.quantidade + delta
            return novaQtd > 0 ? { ...item, quantidade: novaQtd } : null
          }
          return item
        })
        .filter(Boolean)
    )
  }

  // Limpa todo o carrinho
  const clearCart = () => setCart([])

  // Totais calculados
  const totalItems = cart.reduce((acc, item) => acc + item.quantidade, 0)
  const subtotal = cart.reduce((acc, item) => acc + item.precoNumerico * item.quantidade, 0)
  const subtotalFormatado = subtotal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        subtotalFormatado,
        toastMessage,
        setToastMessage
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider')
  }
  return context
}
