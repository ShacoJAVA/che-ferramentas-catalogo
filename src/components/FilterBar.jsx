import React from 'react'
import { Search, X, SlidersHorizontal } from 'lucide-react'

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
    <div className="bg-[#FAF7F2] py-4 border-b border-[#E8DFC8]/60 sticky top-[95px] sm:top-[105px] z-30">
      <div className="max-w-6xl mx-auto px-4 space-y-3.5">
        
        {/* Barra de Pesquisa */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1 max-w-lg">
            <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A7569]" />
            <input
              type="text"
              placeholder="Buscar por nome, medida, material (ex: esteca, 23 cm, torno, alça)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-white/80 border border-[#D9CFC4] rounded-lg focus:outline-none focus:border-[#C86D51] focus:ring-1 focus:ring-[#C86D51] text-[#2C221E] placeholder:text-[#9E8B7F] transition-all shadow-xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A7569] hover:text-[#2C221E]"
                title="Limpar busca"
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2 text-xs text-[#7D6B5F]">
            <span className="font-mono bg-[#EFE8DC] px-2.5 py-1 rounded text-[#5C4A3F]">
              Exibindo <strong>{productsCount}</strong> de {totalCount} ferramentas
            </span>
          </div>
        </div>

        {/* Chips de Categorias */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-[#8A7569] mr-1 hidden sm:flex items-center gap-1">
            <SlidersHorizontal size={13} /> Categorias:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C86D51] text-white shadow-xs'
                    : 'bg-white/70 text-[#5C4A3F] border border-[#E0D5C7] hover:border-[#C86D51]/50 hover:bg-white'
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
