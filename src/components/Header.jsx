import React from 'react'
import { MessageCircle, Users, ShoppingBag, Sparkles, MapPin } from 'lucide-react'
import { InstagramIcon } from './InstagramIcon'
import { useCart } from '../context/CartContext'

export function Header({ info }) {
  const { totalItems, subtotalFormatado, setIsCartOpen } = useCart()

  return (
    <header className="border-b border-white/60 bg-white/70 backdrop-blur-xl sticky top-0 z-40 shadow-[0_4px_30px_rgba(44,34,30,0.03)] transition-all">
      {/* Faixa superior de comunidade & VIP */}
      <div className="bg-[#2C221E] text-[#EFEBE4] text-xs py-2 px-4 border-b border-[#3D2E28]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C86D51] animate-pulse"></span>
            <span className="font-mono text-[11px] tracking-wide text-stone-300">
              CHÊ FERRAMENTAS // CATÁLOGO OFICIAL 2026
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href={info.grupo1Url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C86D51] transition-colors text-stone-300 hover:text-white"
            >
              <Users size={12} className="text-[#C86D51]" />
              <span>Grupo VIP I</span>
            </a>
            <span className="text-stone-600">|</span>
            <a 
              href={info.grupo2Url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C86D51] transition-colors text-stone-300 hover:text-white"
            >
              <Users size={12} className="text-[#C86D51]" />
              <span>Grupo VIP II</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cabeçalho Principal com Glassmorphism */}
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Identidade da Marca */}
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#C86D51] to-[#9E4A32] flex items-center justify-center text-white shadow-md shadow-[#C86D51]/30 font-brand font-bold text-xl border border-white/30">
            CH
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2C221E] font-display">
                Chê Ferramentas
              </h1>
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase bg-[#C86D51]/15 text-[#8C3D26] px-2 py-0.5 rounded-full font-semibold border border-[#C86D51]/30">
                Ateliê Oficial
              </span>
            </div>
            <p className="text-xs text-[#7D6B5F] flex items-center gap-2 mt-0.5">
              <span>Gabaritando a Cerâmica Utilitária & Autoral</span>
              <span className="text-[#C86D51]">•</span>
              <span className="hidden sm:flex items-center gap-1 text-[11px] text-stone-500">
                <MapPin size={11} className="text-[#C86D51]" /> Envios para todo o Brasil
              </span>
            </p>
          </div>
        </div>

        {/* Botões de Ação do Header (Instagram + WhatsApp + Carrinho) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Botão do Carrinho Inteligente */}
          <button
            onClick={() => setIsCartOpen(true)}
            className={`relative flex items-center gap-2 text-xs font-semibold px-3.5 py-2.5 rounded-xl border transition-all cursor-pointer ${
              totalItems > 0
                ? 'bg-[#C86D51] hover:bg-[#B35C42] text-white border-[#C86D51] shadow-md shadow-[#C86D51]/25 hover:shadow-lg'
                : 'bg-white/80 hover:bg-white text-[#2C221E] border-white/80 hover:border-[#C86D51]/50 shadow-xs'
            }`}
            title="Abrir carrinho de compras"
          >
            <ShoppingBag size={16} />
            <span className="hidden xs:inline">Carrinho</span>
            
            {totalItems > 0 ? (
              <span className="flex items-center gap-1.5 pl-1 border-l border-white/30">
                <span className="bg-white text-[#C86D51] font-mono font-bold text-[11px] px-1.5 py-0.2 rounded-full min-w-4 text-center">
                  {totalItems}
                </span>
                <span className="hidden md:inline font-mono text-[11px] text-white/90">
                  {subtotalFormatado}
                </span>
              </span>
            ) : (
              <span className="text-[11px] font-mono text-stone-400">0</span>
            )}
          </button>

          {/* Instagram */}
          <a
            href={info.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2.5 rounded-xl border border-white/80 bg-white/70 hover:bg-white text-[#2C221E] hover:border-[#C86D51]/40 transition-all shadow-xs"
            title="Acessar Instagram @che_ferramentas"
          >
            <InstagramIcon size={15} className="text-[#C86D51]" />
            <span className="hidden sm:inline">@{info.instagram}</span>
          </a>

          {/* WhatsApp Direto */}
          <a
            href={info.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2.5 rounded-xl bg-[#2C221E] hover:bg-[#3D2E28] text-white shadow-xs hover:shadow transition-all"
            title="Atendimento no WhatsApp"
          >
            <MessageCircle size={15} className="text-emerald-400" />
            <span className="hidden xs:inline">Atendimento</span>
          </a>
        </div>
      </div>
    </header>
  )
}
