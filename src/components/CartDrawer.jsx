import React, { useEffect } from 'react'
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'
import { useCart } from '../context/CartContext'

export function CartDrawer({ whatsappNumero }) {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotalFormatado
  } = useCart()

  // Fechar com a tecla Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false)
    }
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isCartOpen, setIsCartOpen])

  if (!isCartOpen) return null

  // Gera o texto compilado do pedido para o WhatsApp
  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return ''

    let text = `Olá, equipe Chê Ferramentas! 👋\n`
    text += `Gostaria de solicitar o orçamento/pedido dos seguintes itens do catálogo:\n\n`

    cart.forEach((item, index) => {
      const itemSubtotal = (item.precoNumerico * item.quantidade).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
      text += `${index + 1}. *${item.nome}*\n`
      text += `   • Medida/Variação: ${item.tamanho}\n`
      text += `   • Quantidade: ${item.quantidade}x (${itemSubtotal})\n\n`
    })

    text += `━━━━━━━━━━━━━━━━━━━━━\n`
    text += `*Valor Estimado:* ${subtotalFormatado}\n`
    text += `*Total de Peças:* ${totalItems} un\n`
    text += `━━━━━━━━━━━━━━━━━━━━━\n\n`
    text += `Poderia me confirmar a disponibilidade e o valor do frete para o meu CEP?`

    return encodeURIComponent(text)
  }

  const waUrl = `https://wa.me/${whatsappNumero}?text=${generateWhatsAppMessage()}`

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop Glassmorphism */}
      <div
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Gaveta Lateral */}
      <div className="relative w-full max-w-md bg-[#FAF7F2]/95 backdrop-blur-2xl border-l border-white/60 shadow-2xl flex flex-col justify-between h-full z-10 animate-in slide-in-from-right duration-300">
        
        {/* Topo da Gaveta com Glassmorphism */}
        <div className="p-5 border-b border-[#E8DFC8]/70 bg-white/70 backdrop-blur-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C86D51]/15 text-[#C86D51] flex items-center justify-center border border-[#C86D51]/30 shadow-xs">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-[#2C221E] flex items-center gap-1.5">
                <span>Carrinho de Moldes</span>
                {totalItems > 0 && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#C86D51] text-white">
                    {totalItems}
                  </span>
                )}
              </h3>
              <p className="text-[11px] text-[#8A7569]">
                {totalItems === 0
                  ? 'Nenhum item selecionado ainda'
                  : `${totalItems} ${totalItems === 1 ? 'ferramenta selecionada' : 'ferramentas selecionadas'}`}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-[#8A7569] hover:text-[#2C221E] hover:bg-stone-200/50 transition-colors"
            title="Fechar carrinho"
          >
            <X size={20} />
          </button>
        </div>

        {/* Lista de Itens do Carrinho */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {cart.length > 0 ? (
            cart.map((item) => {
              const itemTotal = (item.precoNumerico * item.quantidade).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })

              return (
                <div
                  key={item.cartItemId}
                  className="bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl p-3.5 shadow-[0_4px_16px_rgba(44,34,30,0.04)] flex gap-3.5 items-center hover:border-[#C86D51]/40 transition-all"
                >
                  {/* Foto Miniatura */}
                  <div className="w-16 h-16 rounded-xl bg-[#FAF7F2] border border-[#E8DFC8] overflow-hidden shrink-0 p-1 flex items-center justify-center">
                    <img
                      src={item.imagem}
                      alt={item.nome}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Detalhes do Produto */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-xs sm:text-sm font-bold text-[#2C221E] font-display truncate">
                        {item.nome}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-stone-400 hover:text-rose-600 transition-colors p-1 -mr-1"
                        title="Remover produto"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#5C4A3F] border border-[#E0D5C7]/80">
                        {item.tamanho}
                      </span>
                      <span className="text-xs font-bold text-[#C86D51] font-mono">
                        {item.preco}
                      </span>
                    </div>

                    {/* Stepper de Quantidade & Subtotal do Item */}
                    <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-[#F0EAE1]">
                      <div className="flex items-center border border-[#D9CFC4] rounded-lg bg-white overflow-hidden shadow-2xs">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, -1)}
                          className="px-2 py-1 hover:bg-[#FAF7F2] text-[#8A7569] transition-colors"
                          title="Diminuir"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#2C221E] font-mono min-w-5 text-center">
                          {item.quantidade}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, 1)}
                          className="px-2 py-1 hover:bg-[#FAF7F2] text-[#8A7569] transition-colors"
                          title="Aumentar"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-stone-500 block">Total do item:</span>
                        <span className="text-xs font-bold text-[#2C221E] font-mono">
                          {itemTotal}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            /* Estado Carrinho Vazio */
            <div className="text-center py-16 px-4 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 flex items-center justify-center mx-auto text-[#C86D51] shadow-[0_8px_20px_rgba(200,109,81,0.1)]">
                <ShoppingBag size={28} />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-[#2C221E]">
                  Seu carrinho está vazio
                </h4>
                <p className="text-xs text-[#8A7569] mt-1 max-w-xs mx-auto leading-relaxed">
                  Escolha os moldes ou kits desejados e clique em <span className="font-semibold text-[#C86D51]">"Adicionar ao Carrinho"</span> para juntar tudo em um único pedido.
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C86D51] hover:text-[#B35C42] bg-[#C86D51]/10 px-4 py-2 rounded-xl border border-[#C86D51]/20 transition-all hover:bg-[#C86D51]/15"
              >
                <Sparkles size={13} />
                <span>Explorar vitrine de produtos</span>
              </button>
            </div>
          )}
        </div>

        {/* Rodapé Fixo com Total e Finalização WhatsApp */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#E8DFC8]/80 bg-white/85 backdrop-blur-2xl space-y-3.5 shadow-[0_-8px_30px_rgba(0,0,0,0.06)]">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-[#8A7569] block font-medium">Subtotal Estimado:</span>
                <span className="text-[11px] text-stone-500 font-mono">
                  {totalItems} {totalItems === 1 ? 'peça no carrinho' : 'peças no carrinho'}
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#C86D51] font-mono tracking-tight">
                  {subtotalFormatado}
                </span>
              </div>
            </div>

            {/* Aviso de Confirmação no WhatsApp */}
            <div className="flex items-center gap-2.5 text-[11px] text-[#7A695E] bg-[#EFE8DC]/70 p-3 rounded-xl border border-[#E0D5C7]/80">
              <ShieldCheck size={16} className="text-[#C86D51] shrink-0" />
              <span>O pedido será enviado formatado com todos os itens prontos para o WhatsApp oficial da Chê.</span>
            </div>

            <div className="space-y-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 text-sm font-bold py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C86D51] to-[#B35C42] text-white shadow-lg shadow-[#C86D51]/25 hover:shadow-xl hover:shadow-[#C86D51]/35 hover:brightness-105 active:scale-[0.99] transition-all"
              >
                <MessageCircle size={18} />
                <span>Enviar Pedido pelo WhatsApp</span>
                <ArrowRight size={16} />
              </a>

              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-[#8A7569] hover:text-rose-600 transition-colors py-1 cursor-pointer"
              >
                Esvaziar carrinho
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
