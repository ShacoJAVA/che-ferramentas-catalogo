import React, { useEffect, useState } from 'react'
import { X, MessageCircle, ShoppingBag, Ruler, Layers, CheckCircle2, ShieldCheck, Share2, ArrowRight, Check } from 'lucide-react'
import { ProductIllustration } from './ProductIllustration'
import { useCart } from '../context/CartContext'

export function ProductModal({ product, onClose, whatsappNumero }) {
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState(null)
  const [justAdded, setJustAdded] = useState(false)

  useEffect(() => {
    if (product?.tamanhos?.length > 0) {
      setSelectedSize(product.tamanhos[0])
    } else {
      setSelectedSize(null)
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (product) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [product, onClose])

  if (!product) return null

  const sizeText = selectedSize ? ` (Tamanho: ${selectedSize.tam} - ${selectedSize.preco})` : ''
  const message = encodeURIComponent(
    `Olá! Vi no catálogo da Chê Ferramentas o item "${product.nome}"${sizeText} e gostaria de fazer o pedido.`
  )
  const waUrl = `https://wa.me/${whatsappNumero}?text=${message}`

  const handleAddToCart = () => {
    addToCart(product, selectedSize, { openDrawer: true })
    setJustAdded(true)
    setTimeout(() => {
      setJustAdded(false)
      onClose()
    }, 600)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.nome,
        text: `Confira ${product.nome} no catálogo da Chê Ferramentas:`,
        url: window.location.href
      }).catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copiado para a área de transferência!')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-stone-900/50 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF7F2]/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/80 overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar em Frosted Glass */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/85 hover:bg-white text-[#2C221E] shadow-md border border-white/80 backdrop-blur-md transition-all cursor-pointer"
          title="Fechar (Esc)"
        >
          <X size={18} />
        </button>

        {/* Conteúdo com Scroll Suave */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-5">
          {/* Imagem do Produto do Canva */}
          <div className="rounded-2xl overflow-hidden border border-white/80 bg-white shadow-xs">
            {product.imagem ? (
              <img
                src={product.imagem}
                alt={product.nome}
                className="w-full h-auto object-cover max-h-72 sm:max-h-80"
              />
            ) : (
              <ProductIllustration iconType={product.imagemIcone} className="w-full h-56 sm:h-64" />
            )}
          </div>

          <div>
            {/* Badges Glassmorphic */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A7569] bg-white/80 border border-white/80 px-2.5 py-0.5 rounded-lg shadow-2xs">
                {product.categoriaNome}
              </span>
              {product.badge && (
                <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#C86D51] px-2.5 py-0.5 rounded-lg shadow-xs">
                  {product.badge}
                </span>
              )}
              <span className="text-xs font-mono text-[#5C4A3F] bg-white border border-[#D9CFC4] px-2.5 py-0.5 rounded-lg flex items-center gap-1 shadow-2xs">
                <CheckCircle2 size={13} className="text-emerald-600" />
                {product.disponibilidade}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#2C221E] font-display">
              {product.nome}
            </h2>

            <p className="text-xs sm:text-sm text-[#4A3B32] mt-2 leading-relaxed bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white/80 shadow-2xs">
              {product.descricao}
            </p>
          </div>

          {/* Seletor Completo de Tamanhos */}
          {product.tamanhos && product.tamanhos.length > 0 && (
            <div className="space-y-2.5 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/80">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A7569] font-bold">
                  Selecione o Tamanho Desejado:
                </h4>
                {selectedSize && (
                  <span className="text-sm font-bold text-[#C86D51] font-mono">
                    Valor: {selectedSize.preco}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {product.tamanhos.map((t, idx) => {
                  const isSel = selectedSize?.tam === t.tam
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedSize(t)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSel
                          ? 'bg-[#C86D51] text-white border-[#C86D51] shadow-md shadow-[#C86D51]/25'
                          : 'bg-white/80 text-[#2C221E] border-white/80 hover:border-[#C86D51]/60 hover:bg-white'
                      }`}
                    >
                      <span className="text-xs font-bold block">{t.tam}</span>
                      <span className={`text-xs font-mono mt-0.5 block ${isSel ? 'text-white/90' : 'text-[#C86D51] font-semibold'}`}>
                        {t.preco}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Ficha Técnica */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/80 flex items-start gap-3 shadow-2xs">
              <Ruler size={17} className="text-[#C86D51] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#2C221E] block">Dimensões Disponíveis:</span>
                <span className="text-[#6E5D52]">{product.medidas}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/80 flex items-start gap-3 shadow-2xs">
              <Layers size={17} className="text-[#C86D51] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#2C221E] block">Material Técnico:</span>
                <span className="text-[#6E5D52]">{product.material}</span>
              </div>
            </div>
          </div>

          {/* Garantia do Ateliê */}
          <div className="flex items-center gap-2.5 text-xs text-[#7A695E] bg-[#EFE8DC]/70 p-3 rounded-xl border border-[#E0D5C7]/80">
            <ShieldCheck size={16} className="text-[#C86D51] shrink-0" />
            <span>Peças calibradas para desmolde perfeito sem deformação ou marcas na argila úmida.</span>
          </div>
        </div>

        {/* Rodapé do Modal com Ações */}
        <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-xl border-t border-[#E8DFC8]/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-1.5 text-xs font-medium py-3 px-3.5 rounded-xl border border-[#D9CFC4] hover:bg-[#FAF7F2] text-[#4A3B32] transition-colors"
            title="Compartilhar"
          >
            <Share2 size={15} />
            <span>Compartilhar</span>
          </button>

          <div className="flex items-center gap-2 flex-1">
            {/* Adicionar ao Carrinho */}
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl bg-[#2C221E] hover:bg-[#3D2E28] text-white shadow-md transition-all cursor-pointer"
            >
              {justAdded ? (
                <>
                  <Check size={16} className="text-emerald-400" />
                  <span>Item Adicionado!</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={16} className="text-[#E89578]" />
                  <span>Adicionar ao Carrinho</span>
                </>
              )}
            </button>

            {/* Pedir Imediato no WhatsApp */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl bg-[#C86D51] hover:bg-[#B35C42] text-white shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle size={16} />
              <span>Pedir no WhatsApp</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
