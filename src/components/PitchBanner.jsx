import React from 'react'
import { Sparkles, ArrowRight, MessageCircle, ShoppingBag, Zap, CheckCircle2 } from 'lucide-react'
import { InstagramIcon } from './InstagramIcon'

export function PitchBanner({ info }) {
  return (
    <section className="mt-16 rounded-3xl border border-stone-800/80 bg-gradient-to-br from-[#241B18] via-[#2F231F] to-[#1C1513] text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Luzes difusas de fundo (ambient glows) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C86D51]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 space-y-8">
        {/* Topo do Pitch */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-stone-200 text-xs font-mono px-3.5 py-1.5 rounded-full">
              <Sparkles size={13} className="text-[#E89578]" />
              <span>Proposta de Solução Comercial Digital</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              Transforme a audiência do Instagram em pedidos organizados
            </h3>
            
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Nos Reels do perfil <strong className="text-white">@che_ferramentas</strong>, dezenas de ceramistas perguntam diariamente: <span className="text-[#E89578] italic">"Qual valor?"</span>, <span className="text-[#E89578] italic">"Tem catálogo?"</span> e <span className="text-[#E89578] italic">"Como faço para comprar?"</span>. Este catálogo resolve esse gargalo imediatamente.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={info.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold py-3.5 px-5 rounded-2xl bg-[#C86D51] hover:bg-[#B35C42] text-white shadow-lg shadow-[#C86D51]/30 hover:scale-102 active:scale-98 transition-all"
            >
              <MessageCircle size={16} />
              <span>Falar com o Ateliê</span>
              <ArrowRight size={14} />
            </a>

            <a
              href={info.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium py-3.5 px-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-md transition-all"
            >
              <InstagramIcon size={16} />
              <span>Ver Instagram</span>
            </a>
          </div>
        </div>

        {/* 3 Pilares com Cards em Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 space-y-2 hover:bg-white/10 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-[#C86D51]/20 text-[#E89578] flex items-center justify-center border border-[#C86D51]/30">
              <ShoppingBag size={18} />
            </div>
            <h4 className="font-display font-bold text-base text-white">Carrinho Multi-Itens</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Ceramistas compram kits ou múltiplos tamanhos juntos. O cliente monta seu pedido e você recebe a lista pronta com valores calculados.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 space-y-2 hover:bg-white/10 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-500/30">
              <Zap size={18} />
            </div>
            <h4 className="font-display font-bold text-base text-white">Zero Fricção de Compra</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              O link fica na bio do Instagram e nos stories. O cliente vê fotos reais de qualidade, dimensões em centímetros e preços sem precisar esperar resposta no Direct.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 space-y-2 hover:bg-white/10 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 size={18} />
            </div>
            <h4 className="font-display font-bold text-base text-white">WhatsApp 100% Organizado</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Nada de mensagens soltas ou confusão de medidas. O pedido chega estruturado com item, variação, quantidade e valor total para você só cotar o frete.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
