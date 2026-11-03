import React from 'react'
import { MessageCircle, Users, Heart } from 'lucide-react'
import { InstagramIcon } from './InstagramIcon'

export function Footer({ info }) {
  return (
    <footer className="mt-16 border-t border-[#E8DFC8] bg-[#F5EFE6] py-12 text-[#5C4A3F]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Coluna 1: Marca & Propósito */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-[#C86D51] text-white flex items-center justify-center font-brand font-bold text-sm">
              CH
            </div>
            <h4 className="font-display font-bold text-lg text-[#2C221E]">
              {info.loja}
            </h4>
          </div>
          <p className="text-xs text-[#7A695E] leading-relaxed">
            {info.slogan}. Criado para ceramistas que buscam ferramentas duráveis, precisas e com empunhadura profissional.
          </p>
          <p className="text-xs font-mono text-[#8A7569]">
            {info.cidade}
          </p>
        </div>

        {/* Coluna 2: Canais Oficiais */}
        <div className="space-y-3">
          <h5 className="font-bold text-xs font-mono uppercase tracking-wider text-[#2C221E]">
            Canais de Atendimento
          </h5>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href={info.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C86D51] transition-colors"
              >
                <MessageCircle size={14} className="text-[#C86D51]" />
                <span>WhatsApp Vendas: {info.whatsappFormatado}</span>
              </a>
            </li>
            <li>
              <a
                href={info.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C86D51] transition-colors"
              >
                <InstagramIcon size={14} className="text-[#C86D51]" />
                <span>Instagram: @{info.instagram}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Comunidade VIP */}
        <div className="space-y-3">
          <h5 className="font-bold text-xs font-mono uppercase tracking-wider text-[#2C221E]">
            Comunidade de Ceramistas
          </h5>
          <p className="text-xs text-[#7A695E]">
            Participe dos grupos oficiais no WhatsApp para lançamentos exclusivos e lotes promocionais:
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <a
              href={info.grupo1Url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#D9CFC4] hover:border-[#C86D51] text-[#2C221E] transition-all"
            >
              <Users size={13} className="text-[#C86D51]" />
              <span>Grupo VIP I</span>
            </a>
            <a
              href={info.grupo2Url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#D9CFC4] hover:border-[#C86D51] text-[#2C221E] transition-all"
            >
              <Users size={13} className="text-[#C86D51]" />
              <span>Grupo VIP II</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-[#E8DFC8]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#8A7569]">
        <p>© 2026 Chê Ferramentas. Catálogo digital demonstrativo.</p>
        <p className="flex items-center gap-1">
          <span>Projetado com paixão por cerâmica artesanal</span>
          <Heart size={11} className="text-[#C86D51] fill-[#C86D51]" />
        </p>
      </div>
    </footer>
  )
}
