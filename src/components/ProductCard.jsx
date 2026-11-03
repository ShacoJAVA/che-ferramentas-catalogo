import React from 'react'
import { MessageCircle, Eye, Ruler, Layers } from 'lucide-react'
import { ProductIllustration } from './ProductIllustration'

export function ProductCard({ product, onSelect, whatsappNumero }) {
  const message = encodeURIComponent(
    `Olá! Vi no catálogo da Chê Ferramentas o "${product.nome}" (${product.preco}) e gostaria de fazer o pedido.`
  )
  const waUrl = `https://wa.me/${whatsappNumero}?text=${message}`

  return (
    <div className="group bg-white rounded-xl border border-[#E8DFC8] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#C86D51]/50 transition-all duration-300">
      <div>
        {/* Imagem Real do Canva com Badges */}
        <div className="relative">
          {product.imagem ? (
            <div 
              className="w-full h-52 bg-[#FAF7F2] p-2 flex items-center justify-center overflow-hidden rounded-t-xl border-b border-[#E8DFC8] cursor-pointer"
              onClick={() => onSelect(product)}
            >
              <img
                src={product.imagem}
                alt={product.nome}
                className="w-full h-full object-cover rounded-lg group-hover:scale-103 transition-transform duration-300 shadow-2xs"
                loading="lazy"
              />
            </div>
          ) : (
            <ProductIllustration iconType={product.imagemIcone} />
          )}

          {product.badge && (
            <span className="absolute top-3 left-3 bg-[#C86D51] text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded shadow-xs pointer-events-none">
              {product.badge}
            </span>
          )}

          <span className="absolute top-3 right-3 bg-[#2C221E]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-mono px-2 py-0.5 rounded pointer-events-none">
            {product.disponibilidade}
          </span>
        </div>

        {/* Informações Principais */}
        <div className="p-4 sm:p-5">
          <span className="text-[11px] font-mono text-[#8A7569] uppercase tracking-wider block mb-1">
            {product.categoriaNome}
          </span>
          <h3 
            onClick={() => onSelect(product)}
            className="text-base sm:text-lg font-bold text-[#2C221E] font-display group-hover:text-[#C86D51] transition-colors leading-snug line-clamp-2 cursor-pointer"
          >
            {product.nome}
          </h3>

          <p className="text-xs text-[#6E5D52] mt-2 line-clamp-2 leading-relaxed">
            {product.descricao}
          </p>

          {/* Ficha Rápida Técnica */}
          <div className="mt-3.5 pt-3 border-t border-[#F0EAE1] space-y-1.5 text-[11px] text-[#7A695E]">
            <div className="flex items-center gap-1.5 truncate">
              <Ruler size={13} className="text-[#C86D51] shrink-0" />
              <span className="truncate">Tamanhos: {product.medidas}</span>
            </div>
            {product.precoKit && (
              <div className="flex items-center gap-1.5 truncate font-semibold text-[#8C462E]">
                <Layers size={13} className="text-[#C86D51] shrink-0" />
                <span className="truncate">{product.precoKit}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Rodapé do Card com Preço e Ações */}
      <div className="p-4 sm:p-5 pt-0">
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-xs text-[#8A7569]">A partir de:</span>
          <span className="text-lg sm:text-xl font-bold text-[#C86D51] font-mono">
            {product.preco}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onSelect(product)}
            className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-2.5 rounded-lg border border-[#D9CFC4] hover:border-[#C86D51] text-[#3D2E28] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
          >
            <Eye size={14} className="text-[#8A7569]" />
            <span>Ver Tamanhos</span>
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-2.5 rounded-lg bg-[#C86D51] hover:bg-[#B35C42] text-white shadow-xs hover:shadow transition-all"
          >
            <MessageCircle size={14} />
            <span>Pedir</span>
          </a>
        </div>
      </div>
    </div>
  )
}
