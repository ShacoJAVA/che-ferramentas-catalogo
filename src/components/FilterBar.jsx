import React from 'react'
import { Search, X, SlidersHorizontal, Sparkles } from 'lucide-react'

export function FilterBar({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  productsCount,
  totalCount
}) {
  return (
    <div className="bg-white/60 backdrop-blur-xl py-3 sm:py-3.5 border-b border-white/60 sticky top-[97px] sm:top-[105px] z-30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all">
      <div className="max-w-6xl mx-auto px-4 space-y-3">
        
        {/* Barra de Pesquisa e Contador */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1 max-w-lg">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A7569]" />
            <input
              type="text"
              placeholder="Buscar molde, medida (ex: 20cm, folha, oval, flor, kit)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-white/85 border border-[#E0D5C7]/80 rounded-xl focus:outline-none focus:border-[#C86D51] focus:ring-2 focus:ring-[#C86D51]/15 text-[#2C221E] placeholder:text-[#9E8B7F] transition-all shadow-xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[#2C221E] p-0.5"
                title="Limpar busca"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2 text-xs text-[#7D6B5F]">
            <span className="font-mono bg-white/80 border border-white/80 px-3 py-1.5 rounded-xl text-[#5C4A3F] shadow-2xs flex items-center gap-1.5 text-[11px]">
              <Sparkles size={11} className="text-[#C86D51]" />
              <span>Exibindo <strong>{productsCount}</strong> de {totalCount} moldes</span>
            </span>
          </div>
        </div>

        {/* Chips de Categorias em Glassmorphism */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-[#8A7569] mr-1 hidden sm:flex items-center gap-1 text-[11px] font-mono shrink-0">
            <SlidersHorizontal size={12} /> Modelos:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C86D51] text-white shadow-md shadow-[#C86D51]/20 font-semibold'
                    : 'bg-white/75 text-[#5C4A3F] border border-white/80 hover:border-[#C86D51]/40 hover:bg-white shadow-2xs'
                }`}
              >
                {cat.nome}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
