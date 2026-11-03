import React, { useState } from 'react'
import { MessageCircle, ShoppingBag, Eye, Ruler, Layers, Check, Sparkles } from 'lucide-react'
import { ProductIllustration } from './ProductIllustration'
import { useCart } from '../context/CartContext'

export function ProductCard({ product, onSelect, whatsappNumero }) {
  const { addToCart } = useCart()

  // Tamanho selecionado no card (padrão: primeiro tamanho da lista ou fallback)
  const defaultSize = product.tamanhos?.[0] || {
    tam: product.medidas,
    preco: product.preco.replace('A partir de ', '')
  }
  const [selectedSize, setSelectedSize] = useState(defaultSize)
  const [justAdded, setJustAdded] = useState(false)

  // Mensagem WhatsApp para compra expressa individual com o tamanho selecionado
  const currentPrice = selectedSize ? selectedSize.preco : product.preco
  const expressMessage = encodeURIComponent(
    `Olá! Vi no catálogo da Chê Ferramentas o item "${product.nome}" no tamanho ${selectedSize?.tam || product.medidas} (${currentPrice}) e gostaria de fazer o pedido.`
  )
  const expressWaUrl = `https://wa.me/${whatsappNumero}?text=${expressMessage}`

  const handleAddToCart = () => {
    addToCart(product, selectedSize)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1500)
  }

  return (
    <div className="group bg-white/75 backdrop-blur-md rounded-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(200,109,81,0.12)] hover:border-[#C86D51]/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Imagem com Efeito Glassmorphism nos Badges */}
        <div className="relative overflow-hidden bg-[#FAF7F2] border-b border-[#E8DFC8]/60 cursor-pointer" onClick={() => onSelect(product)}>
          {product.imagem ? (
            <div className="w-full h-56 p-2.5 flex items-center justify-center overflow-hidden">
              <img
                src={product.imagem}
                alt={product.nome}
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 shadow-2xs"
                loading="lazy"
              />
            </div>
          ) : (
            <ProductIllustration iconType={product.imagemIcone} />
          )}

          {/* Badges Glassmorphism Flutuantes */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
            {product.badge && (
              <span className="bg-white/90 backdrop-blur-md text-[#C86D51] border border-white/80 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                <Sparkles size={10} className="text-[#C86D51]" />
                {product.badge}
              </span>
            )}
          </div>

          <span className="absolute top-3 right-3 bg-[#2C221E]/75 backdrop-blur-md text-[#FAF7F2] text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/20 pointer-events-none">
            {product.disponibilidade}
          </span>

          {/* Botão de Ver Detalhes Rápido */}
          <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="bg-white/90 backdrop-blur-md text-[#2C221E] text-xs font-semibold px-3 py-1.5 rounded-xl border border-white shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye size={13} className="text-[#C86D51]" />
              <span>Ver detalhes</span>
            </span>
          </div>
        </div>

        {/* Informações Principais */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[10px] font-mono text-[#8A7569] uppercase tracking-wider block">
              {product.categoriaNome}
            </span>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60 font-mono">
              Original Chê
            </span>
          </div>

          <h3 
            onClick={() => onSelect(product)}
            className="text-base sm:text-lg font-bold text-[#2C221E] font-display group-hover:text-[#C86D51] transition-colors leading-snug cursor-pointer line-clamp-1"
          >
            {product.nome}
          </h3>

          <p className="text-xs text-[#6E5D52] mt-1.5 line-clamp-2 leading-relaxed">
            {product.descricao}
          </p>

          {/* Seletor Rápido de Tamanhos (Chips Diretos no Card) */}
          {product.tamanhos && product.tamanhos.length > 0 && (
            <div className="mt-3.5 pt-3 border-t border-[#F0EAE1]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase text-[#8A7569] font-semibold flex items-center gap-1">
                  <Ruler size={11} className="text-[#C86D51]" />
                  <span>Escolha a Medida:</span>
                </span>
                <span className="text-[11px] font-mono text-[#8A7569]">
                  Tam: <strong>{selectedSize?.tam}</strong>
                </span>
              </div>

              {/* Grid / Scroll de Medidas */}
              <div className="flex flex-wrap gap-1.5">
                {product.tamanhos.map((t, idx) => {
                  const isSelected = selectedSize?.tam === t.tam
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedSize(t)}
                      className={`text-[11px] px-2.5 py-1 rounded-lg border font-mono transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#C86D51] text-white border-[#C86D51] font-bold shadow-xs scale-103'
                          : 'bg-white/80 text-[#5C4A3F] border-[#E0D5C7] hover:border-[#C86D51]/50 hover:bg-white'
                      }`}
                      title={`${t.tam} por ${t.preco}`}
                    >
                      {t.tam.replace(' (5 un)', '')}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Preço do Kit se houver */}
          {product.precoKit && (
            <div className="mt-2.5 text-[11px] font-mono text-[#8C462E] bg-[#C86D51]/10 px-2.5 py-1 rounded-lg border border-[#C86D51]/20 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Layers size={11} className="text-[#C86D51]" /> Opção Kit Completo:
              </span>
              <strong className="font-bold">{product.precoKit.replace('Kit Completo ', '')}</strong>
            </div>
          )}
        </div>
      </div>

      {/* Rodapé do Card com Preço Dinâmico e Ações do Carrinho */}
      <div className="p-4 sm:p-5 pt-0">
        <div className="flex items-baseline justify-between mb-3 pt-2 border-t border-[#F0EAE1]">
          <div>
            <span className="text-[10px] text-[#8A7569] block font-mono">Preço selecionado:</span>
            <span className="text-lg sm:text-xl font-bold text-[#C86D51] font-mono tracking-tight">
              {currentPrice}
            </span>
          </div>
          
          <button
            onClick={() => onSelect(product)}
            className="text-[11px] text-[#8A7569] hover:text-[#2C221E] underline cursor-pointer"
          >
            Ficha técnica
          </button>
        </div>

        {/* Botões de Ação: Carrinho Primário + WhatsApp Express */}
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
          {/* Botão Adicionar ao Carrinho */}
          <button
            onClick={handleAddToCart}
            className={`flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-3 rounded-xl transition-all shadow-xs cursor-pointer ${
              justAdded
                ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                : 'bg-[#2C221E] hover:bg-[#3D2E28] text-white shadow-[#2C221E]/15 hover:shadow-md'
            }`}
          >
            {justAdded ? (
              <>
                <Check size={14} className="text-white" />
                <span>Adicionado!</span>
              </>
            ) : (
              <>
                <ShoppingBag size={14} className="text-[#E89578]" />
                <span>+ Carrinho</span>
              </>
            )}
          </button>

          {/* Botão WhatsApp Direto (Express) */}
          <a
            href={expressWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-3 rounded-xl bg-[#C86D51] hover:bg-[#B35C42] text-white shadow-xs hover:shadow-md transition-all"
            title="Pedir este tamanho direto no WhatsApp"
          >
            <MessageCircle size={14} />
            <span>Pedir Direto</span>
          </a>
        </div>
      </div>
    </div>
  )
}
