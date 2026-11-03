import React from 'react'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'

export function FloatingCartButton() {
  const { totalItems, subtotalFormatado, setIsCartOpen } = useCart()

  if (totalItems === 0) return null

  return (
    <div className="fixed bottom-5 right-5 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button
        onClick={() => setIsCartOpen(true)}
        className="group flex items-center gap-3 bg-[#2C221E]/95 hover:bg-[#2C221E] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl shadow-2xl shadow-black/30 border border-white/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <div className="relative">
          <div className="w-9 h-9 rounded-xl bg-[#C86D51] text-white flex items-center justify-center shadow-md">
            <ShoppingBag size={18} />
          </div>
          <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#2C221E] animate-bounce">
            {totalItems}
          </span>
        </div>

        <div className="text-left">
          <span className="text-[10px] text-stone-300 block uppercase tracking-wider font-mono">
            {totalItems} {totalItems === 1 ? 'item no carrinho' : 'itens no carrinho'}
          </span>
          <span className="text-xs sm:text-sm font-bold text-white font-mono">
            {subtotalFormatado}
          </span>
        </div>

        <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-stone-300 group-hover:text-white group-hover:translate-x-0.5 transition-all ml-1">
          <ArrowRight size={14} />
        </div>
      </button>
    </div>
  )
}
