import React from 'react'
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react'
import { InstagramIcon } from './InstagramIcon'

export function PitchBanner({ info }) {
  return (
    <section className="bg-gradient-to-r from-[#2C221E] via-[#3D2E28] to-[#2C221E] text-white py-10 px-4 mt-16 rounded-2xl border border-[#4D3B33] shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C86D51]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#C86D51]/30 border border-[#C86D51]/50 text-[#FAF7F2] text-xs font-mono px-3 py-1 rounded-full mb-1">
            <Sparkles size={13} className="text-[#C86D51]" />
            <span>Demonstração de Catálogo Comercial</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-[#FAF7F2]">
            Facilite os pedidos dos seus clientes do Instagram
          </h3>
          <p className="text-xs sm:text-sm text-[#D3C4B6] max-w-xl leading-relaxed">
            Este catálogo foi projetado para transformar o público do perfil <strong className="text-white">@{info.instagram}</strong> em compradores diretos. Os clientes encontram o que precisam em segundos e o pedido chega pronto no seu WhatsApp.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={info.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-xs font-bold py-3 px-5 rounded-xl bg-[#C86D51] hover:bg-[#B35C42] text-white shadow-md transition-all"
          >
            <MessageCircle size={15} />
            <span>Chamar no WhatsApp</span>
            <ArrowRight size={14} />
          </a>

          <a
            href={info.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-xs font-semibold py-3 px-4 rounded-xl border border-white/20 hover:bg-white/10 text-white transition-all"
          >
            <InstagramIcon size={15} />
            <span>Ver Instagram</span>
          </a>
        </div>
      </div>
    </section>
  )
}
