import React from 'react'
import { CheckCircle2, ShoppingBag, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

export function ToastNotification() {
  const { toastMessage, setToastMessage, setIsCartOpen } = useCart()

  if (!toastMessage) return null

  return (
    <div className="fixed bottom-20 left-4 sm:left-6 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="bg-[#2C221E]/95 text-white backdrop-blur-xl border border-white/20 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm">
        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
          <CheckCircle2 size={16} />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-stone-100 truncate">
            {toastMessage}
          </p>
          <button
            onClick={() => {
              setToastMessage(null)
              setIsCartOpen(true)
            }}
            className="text-[11px] font-bold text-[#E89578] hover:underline flex items-center gap-1 mt-0.5"
          >
            <ShoppingBag size={11} />
            <span>Ver carrinho</span>
          </button>
        </div>

        <button
          onClick={() => setToastMessage(null)}
          className="text-stone-400 hover:text-white p-1"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
