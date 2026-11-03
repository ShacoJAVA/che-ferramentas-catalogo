import React from 'react'
import { MessageCircle, Users, Sparkles, MapPin } from 'lucide-react'
import { InstagramIcon } from './InstagramIcon'

export function Header({ info }) {
  return (
    <header className="border-b border-[#E8DFC8]/60 bg-[#FAF7F2]/90 backdrop-blur-md sticky top-0 z-40">
      {/* Faixa superior de aviso / comunidade */}
      <div className="bg-[#2C221E] text-[#EFEBE4] text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C86D51] animate-pulse"></span>
            <span className="font-mono text-[11px] tracking-wide">CHÊ FERRAMENTAS // CATÁLOGO OFICIAL 2026</span>
          </div>
          
          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href={info.grupo1Url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C86D51] transition-colors"
            >
              <Users size={13} className="text-[#C86D51]" />
              <span>Grupo VIP I</span>
            </a>
            <span className="text-stone-600">|</span>
            <a 
              href={info.grupo2Url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C86D51] transition-colors"
            >
              <Users size={13} className="text-[#C86D51]" />
              <span>Grupo VIP II</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cabeçalho Principal */}
      <div className="max-w-6xl mx-auto px-4 py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C86D51] flex items-center justify-center text-white shadow-sm font-brand font-bold text-xl">
              CH
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2C221E] font-display">
                Chê Ferramentas
              </h1>
              <p className="text-xs sm:text-sm text-[#7D6B5F] flex items-center gap-1.5">
                <span>Ferramentas Artesanais & Precisão para Cerâmica</span>
                <span className="text-[#C86D51]">•</span>
                <span className="flex items-center gap-1 text-[11px]">
                  <MapPin size={12} /> {info.cidade}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Botões de Ação do Header */}
        <div className="flex items-center gap-2.5">
          <a
            href={info.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg border border-[#D9CFC4] bg-white/60 hover:bg-white text-[#2C221E] hover:border-[#C86D51] transition-all shadow-xs"
          >
            <InstagramIcon size={15} className="text-[#C86D51]" />
            <span className="hidden sm:inline">@{info.instagram}</span>
            <span className="sm:hidden">Instagram</span>
          </a>

          <a
            href={info.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-[#C86D51] hover:bg-[#B35C42] text-white shadow-sm hover:shadow transition-all"
          >
            <MessageCircle size={15} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  )
}
