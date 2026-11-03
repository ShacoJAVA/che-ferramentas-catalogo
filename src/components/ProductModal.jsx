import React, { useEffect } from 'react'
import { X, MessageCircle, Ruler, Layers, CheckCircle2, ShieldCheck, Share2 } from 'lucide-react'
import { ProductIllustration } from './ProductIllustration'

export function ProductModal({ product, onClose, whatsappNumero }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!product) return null

  const message = encodeURIComponent(
    `Olá! Vi no catálogo da Chê Ferramentas o item "${product.nome}" (${product.preco}) e gostaria de tirar dúvidas ou fazer o pedido.`
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
      alert('Link do catálogo copiado para a área de transferência!')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8DFC8] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#2C221E] shadow-sm transition-all"
          title="Fechar (Esc)"
        >
          <X size={18} />
        </button>

        {/* Conteúdo com Scroll */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Ilustração / Cabeçalho */}
          <div className="rounded-xl overflow-hidden border border-[#E8DFC8]">
            <ProductIllustration iconType={product.imagemIcone} className="w-full h-56 sm:h-64" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A7569] bg-[#EFE8DC] px-2 py-0.5 rounded">
                {product.categoriaNome}
              </span>
              {product.badge && (
                <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#C86D51] px-2 py-0.5 rounded">
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

            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-[#C86D51] font-mono">
                {product.preco}
              </span>
              <span className="text-xs text-[#8A7569]">
                (Valores e disponibilidade confirmados direto no WhatsApp)
              </span>
            </div>
          </div>

          {/* Descrição Detalhada */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A7569] font-bold">
              Descrição e Aplicação
            </h4>
            <p className="text-sm text-[#4A3B32] leading-relaxed bg-white/80 p-4 rounded-xl border border-[#EBE3D7]">
              {product.descricao}
            </p>
          </div>

          {/* Ficha Técnica */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-white/80 border border-[#EBE3D7] flex items-start gap-3">
              <Ruler size={18} className="text-[#C86D51] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#2C221E] block">Dimensões & Medidas:</span>
                <span className="text-[#6E5D52]">{product.medidas}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/80 border border-[#EBE3D7] flex items-start gap-3">
              <Layers size={18} className="text-[#C86D51] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#2C221E] block">Composição do Material:</span>
                <span className="text-[#6E5D52]">{product.material}</span>
              </div>
            </div>
          </div>

          {/* Garantia do Artesão */}
          <div className="flex items-center gap-2 text-xs text-[#7A695E] bg-[#EFE8DC]/60 p-3 rounded-lg border border-[#E0D5C7]">
            <ShieldCheck size={16} className="text-[#C86D51] shrink-0" />
            <span>Ferramentas fabricadas com padrão profissional para ceramistas, escolas e ateliês.</span>
          </div>
        </div>

        {/* Rodapé Fixo do Modal */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E8DFC8] flex items-center justify-between gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs font-medium py-2.5 px-3.5 rounded-lg border border-[#D9CFC4] hover:bg-[#FAF7F2] text-[#4A3B32] transition-colors"
            title="Compartilhar ferramenta"
          >
            <Share2 size={15} />
            <span className="hidden sm:inline">Compartilhar</span>
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-sm font-bold py-3 px-6 rounded-xl bg-[#C86D51] hover:bg-[#B35C42] text-white shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle size={18} />
            <span>Fazer Pedido no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
