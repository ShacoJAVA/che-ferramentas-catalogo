import React, { useState, useMemo } from 'react'
import data from './data/produtos.json'
import { CartProvider } from './context/CartContext'
import { Header } from './components/Header'
import { FilterBar } from './components/FilterBar'
import { ProductCard } from './components/ProductCard'
import { ProductModal } from './components/ProductModal'
import { CartDrawer } from './components/CartDrawer'
import { FloatingCartButton } from './components/FloatingCartButton'
import { ToastNotification } from './components/ToastNotification'
import { PitchBanner } from './components/PitchBanner'
import { Footer } from './components/Footer'
import { Sparkles, PackageSearch, Layers } from 'lucide-react'

function CatalogContent() {
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
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C221E] relative selection:bg-[#C86D51] selection:text-white">
      {/* Ambient background glows para reforçar o efeito Glassmorphism */}
      <div className="fixed top-0 right-1/4 w-96 h-96 bg-[#C86D51]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 left-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/2 right-10 w-80 h-80 bg-stone-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Cabeçalho Fixo com Carrinho Integrado */}
      <Header info={info} />

      {/* Barra de Filtros e Busca em Glassmorphism */}
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categorias}
        productsCount={filteredProducts.length}
        totalCount={produtos.length}
      />

      {/* Área Principal de Produtos */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        {/* Hero Compacto de Apresentação */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C86D51] font-semibold flex items-center gap-1.5 mb-1.5">
              <Sparkles size={13} /> Moldes Técnicos & Ferramentas
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#2C221E] tracking-tight">
              Catálogo Oficial de Peças
            </h2>
            <p className="text-xs sm:text-sm text-[#7A695E] mt-1 max-w-2xl leading-relaxed">
              Escolha a medida desejada diretamente no card ou clique para ver fotos detalhadas. Monte seu carrinho com múltiplos itens e envie a lista pronta para o WhatsApp oficial.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#5C4A3F] bg-white/70 backdrop-blur-md border border-white/80 px-3.5 py-2 rounded-2xl shadow-2xs">
            <Layers size={14} className="text-[#C86D51]" />
            <span>Pedidos com cálculo de frete por CEP</span>
          </div>
        </div>

        {/* Grade de Produtos com Seletores e Carrinho */}
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
          /* Estado Vazio de Busca */
          <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-white/80 p-12 text-center max-w-md mx-auto my-12 space-y-4 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] text-[#C86D51] flex items-center justify-center mx-auto shadow-xs">
              <PackageSearch size={26} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-[#2C221E]">
                Nenhum molde encontrado
              </h3>
              <p className="text-xs text-[#7A695E] mt-1 leading-relaxed">
                Não encontramos produtos com o termo "{searchTerm}". Tente buscar por outros formatos como circular, oval, folha, estrela ou flor.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('todos')
              }}
              className="text-xs font-bold text-[#C86D51] hover:underline"
            >
              Limpar busca e ver todos
            </button>
          </div>
        )}

        {/* Banner Comercial de Pitch para Apresentação ao Dono */}
        <PitchBanner info={info} />
      </main>

      {/* Modal de Detalhes da Peça */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        whatsappNumero={info.whatsappNumero}
      />

      {/* Gaveta do Carrinho de Compras */}
      <CartDrawer whatsappNumero={info.whatsappNumero} />

      {/* Botão Flutuante de Carrinho para Mobile & Desktop */}
      <FloatingCartButton />

      {/* Notificação Toast de Feedback */}
      <ToastNotification />

      {/* Rodapé */}
      <Footer info={info} />
    </div>
  )
}

export function App() {
  return (
    <CartProvider>
      <CatalogContent />
    </CartProvider>
  )
}

export default App
