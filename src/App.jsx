import React, { useState, useMemo } from 'react'
import data from './data/produtos.json'
import { Header } from './components/Header'
import { FilterBar } from './components/FilterBar'
import { ProductCard } from './components/ProductCard'
import { ProductModal } from './components/ProductModal'
import { PitchBanner } from './components/PitchBanner'
import { Footer } from './components/Footer'
import { Sparkles, PackageSearch } from 'lucide-react'

export function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const { info, categorias, produtos } = data

  // Filtragem combinada por busca e categoria
  const filteredProducts = useMemo(() => {
    return produtos.filter((prod) => {
      // Filtro de categoria
      const matchCat =
        selectedCategory === 'todos' || prod.categoria === selectedCategory

      if (!matchCat) return false

      // Filtro de termo de busca
      if (!searchTerm.trim()) return true

      const term = searchTerm.toLowerCase().trim()
      return (
        prod.nome.toLowerCase().includes(term) ||
        prod.descricao.toLowerCase().includes(term) ||
        prod.material.toLowerCase().includes(term) ||
        prod.medidas.toLowerCase().includes(term) ||
        prod.categoriaNome.toLowerCase().includes(term)
      )
    })
  }, [produtos, selectedCategory, searchTerm])

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C221E]">
      {/* Cabeçalho */}
      <Header info={info} />

      {/* Barra de Filtros e Busca */}
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categorias}
        productsCount={filteredProducts.length}
        totalCount={produtos.length}
      />

      {/* Hero / Apresentação do Catálogo */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C86D51] font-semibold flex items-center gap-1.5 mb-1.5">
            <Sparkles size={13} /> Vitrine de Ferramentas Cerâmicas
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#2C221E]">
            Catálogo de Peças & Ferramentas
          </h2>
          <p className="text-xs sm:text-sm text-[#7A695E] mt-1 max-w-2xl leading-relaxed">
            Selecione a ferramenta desejada para ver medidas e detalhes técnicos. Clique no botão de pedido para falar direto com o ateliê no WhatsApp.
          </p>
        </div>

        {/* Grade de Produtos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(prod) => setSelectedProduct(prod)}
                whatsappNumero={info.whatsappNumero}
              />
            ))}
          </div>
        ) : (
          /* Estado Vazio */
          <div className="bg-white rounded-2xl border border-[#E8DFC8] p-12 text-center max-w-md mx-auto my-12 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#E8DFC8] text-[#C86D51] flex items-center justify-center mx-auto shadow-xs">
              <PackageSearch size={26} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-[#2C221E]">
                Nenhuma ferramenta encontrada
              </h3>
              <p className="text-xs text-[#7A695E] mt-1 leading-relaxed">
                Não encontramos ferramentas com o termo "{searchTerm}". Tente buscar por termos como "esteca", "torno", "vinco" ou mude de categoria.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('todos')
              }}
              className="text-xs font-bold text-[#C86D51] hover:underline"
            >
              Ver todas as ferramentas
            </button>
          </div>
        )}

        {/* Banner Comercial de Pitch para o Dono */}
        <PitchBanner info={info} />
      </main>

      {/* Modal de Detalhes da Peça */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        whatsappNumero={info.whatsappNumero}
      />

      {/* Rodapé */}
      <Footer info={info} />
    </div>
  )
}

export default App
