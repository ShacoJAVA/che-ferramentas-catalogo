import React, { useEffect, useState } from 'react'
import { X, MessageCircle, Ruler, Layers, CheckCircle2, ShieldCheck, Share2, ArrowRight } from 'lucide-react'
import { ProductIllustration } from './ProductIllustration'

export function ProductModal({ product, onClose, whatsappNumero }) {
  const [selectedSize, setSelectedSize] = useState(null)

  useEffect(() => {
    if (product?.tamanhos?.length > 0) {
      setSelectedSize(product.tamanhos[0])
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [product, onClose])

  if (!product) return null

  const sizeText = selectedSize ? ` (Tamanho: ${selectedSize.tam} - ${selectedSize.preco})` : ''
  const message = encodeURIComponent(
    `Olá! Vi no catálogo da Chê Ferramentas o item "${product.nome}"${sizeText} e gostaria de fazer o pedido.`
  )
  const waUrl = `https://wa.me/${whatsappNumero}?text=${message}`

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8DFC8] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-[#2C221E] shadow-sm transition-all"
          title="Fechar (Esc)"
        >
          <X size={18} />
        </button>

        {/* Conteúdo com Scroll */}
        <div className="overflow-y-auto p-4 sm:p-7 space-y-6">
          {/* Imagem Real do Canva */}
          <div className="rounded-xl overflow-hidden border border-[#E8DFC8] bg-[#FAF7F2]">
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
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A7569] bg-[#EFE8DC] px-2.5 py-0.5 rounded">
                {product.categoriaNome}
              </span>
              {product.badge && (
                <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#C86D51] px-2.5 py-0.5 rounded">
                  {product.badge}
                </span>
              )}
              <span className="text-xs font-mono text-[#5C4A3F] bg-white border border-[#D9CFC4] px-2 py-0.5 rounded flex items-center gap-1">
                <CheckCircle2 size={12} className="text-emerald-600" />
                {product.disponibilidade}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#2C221E] font-display">
              {product.nome}
            </h2>

            <p className="text-xs sm:text-sm text-[#4A3B32] mt-2 leading-relaxed bg-white/70 p-3.5 rounded-xl border border-[#EBE3D7]">
              {product.descricao}
            </p>
          </div>

          {/* Seletor de Tamanhos e Preços Oficiais */}
          {product.tamanhos && product.tamanhos.length > 0 && (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A7569] font-bold">
                  Escolha o Tamanho para Pedido:
                </h4>
                {selectedSize && (
                  <span className="text-sm font-bold text-[#C86D51] font-mono">
                    Selecionado: {selectedSize.preco}
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
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSel
                          ? 'bg-[#C86D51] text-white border-[#C86D51] shadow-xs'
                          : 'bg-white text-[#2C221E] border-[#D9CFC4] hover:border-[#C86D51]/60'
                      }`}
                    >
                      <span className="text-xs font-bold block">{t.tam}</span>
                      <span className={`text-xs font-mono ${isSel ? 'text-white/90' : 'text-[#C86D51] font-semibold'}`}>
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
            <div className="p-3 rounded-xl bg-white/80 border border-[#EBE3D7] flex items-start gap-2.5">
              <Ruler size={16} className="text-[#C86D51] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#2C221E] block">Dimensões:</span>
                <span className="text-[#6E5D52]">{product.medidas}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/80 border border-[#EBE3D7] flex items-start gap-2.5">
              <Layers size={16} className="text-[#C86D51] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#2C221E] block">Material de Fabricação:</span>
                <span className="text-[#6E5D52]">{product.material}</span>
              </div>
            </div>
          </div>

          {/* Garantia do Ateliê */}
          <div className="flex items-center gap-2 text-xs text-[#7A695E] bg-[#EFE8DC]/60 p-3 rounded-lg border border-[#E0D5C7]">
            <ShieldCheck size={16} className="text-[#C86D51] shrink-0" />
            <span>Peças padronizadas com acabamento suave que não marcam nem deformam a argila.</span>
          </div>
        </div>

        {/* Rodapé Fixo do Modal */}
        <div className="p-4 bg-white border-t border-[#E8DFC8] flex items-center justify-between gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs font-medium py-2.5 px-3 rounded-lg border border-[#D9CFC4] hover:bg-[#FAF7F2] text-[#4A3B32] transition-colors"
            title="Compartilhar"
          >
            <Share2 size={15} />
            <span className="hidden sm:inline">Compartilhar</span>
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold py-3 px-4 rounded-xl bg-[#C86D51] hover:bg-[#B35C42] text-white shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle size={17} />
            <span>Pedir {selectedSize ? selectedSize.tam : ''} pelo WhatsApp</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  )
}
