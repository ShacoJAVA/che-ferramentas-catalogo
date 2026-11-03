import React from 'react'

export function ProductIllustration({ iconType, className = "w-full h-48" }) {
  const bgGrad = "bg-gradient-to-b from-[#F5EFE6] to-[#EBE2D5]"

  switch (iconType) {
    case 'wood':
      return (
        <div className={`flex items-center justify-center p-6 ${bgGrad} ${className} relative overflow-hidden rounded-t-xl`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:12px_12px]" />
          <svg viewBox="0 0 200 140" className="w-36 h-28 drop-shadow-md">
            {/* Esteca 1 */}
            <path d="M30 110 L150 30 C160 22 175 25 170 35 L160 45 L50 120 Z" fill="#C29B78" stroke="#8E6A4B" strokeWidth="1.5" />
            <path d="M150 30 C165 18 180 25 165 40 Z" fill="#9C5B32" opacity="0.8" />
            {/* Esteca 2 cruzada */}
            <path d="M40 30 L160 110 C170 118 165 130 155 125 L45 45 C35 38 35 25 40 30 Z" fill="#A87D56" stroke="#6F4E37" strokeWidth="1.5" />
            <circle cx="160" cy="118" r="4" fill="#C86D51" opacity="0.6" />
          </svg>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono uppercase tracking-wider text-[#8A7569] bg-white/70 px-1.5 py-0.5 rounded">Madeira Nobre</span>
        </div>
      )

    case 'cutter':
      return (
        <div className={`flex items-center justify-center p-6 ${bgGrad} ${className} relative overflow-hidden rounded-t-xl`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:12px_12px]" />
          <svg viewBox="0 0 200 140" className="w-36 h-28 drop-shadow-md">
            {/* Cabo */}
            <rect x="85" y="70" width="30" height="55" rx="6" fill="#C29B78" stroke="#8E6A4B" strokeWidth="1.5" />
            <line x1="85" y1="85" x2="115" y2="85" stroke="#8E6A4B" strokeWidth="1" />
            <line x1="85" y1="100" x2="115" y2="100" stroke="#8E6A4B" strokeWidth="1" />
            {/* Haste metálica e lâmina curva de alça */}
            <path d="M92 70 L92 45 C92 30 108 30 108 45 L108 70" fill="none" stroke="#6B7280" strokeWidth="3" strokeLinecap="round" />
            <path d="M85 38 C85 20 115 20 115 38" fill="none" stroke="#C86D51" strokeWidth="3.5" strokeLinecap="round" />
            {/* Fita de argila simulada */}
            <path d="M60 40 Q100 28 140 40 Q100 34 60 40" fill="#B3805B" opacity="0.4" />
          </svg>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono uppercase tracking-wider text-[#8A7569] bg-white/70 px-1.5 py-0.5 rounded">Corte de Vinco</span>
        </div>
      )

    case 'loop':
      return (
        <div className={`flex items-center justify-center p-6 ${bgGrad} ${className} relative overflow-hidden rounded-t-xl`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:12px_12px]" />
          <svg viewBox="0 0 200 140" className="w-36 h-28 drop-shadow-md">
            {/* Cabo torneado */}
            <path d="M30 110 L120 45 C125 40 130 42 128 48 L45 120 Z" fill="#B88A60" stroke="#7E5632" strokeWidth="1.5" />
            {/* Anel de fixação */}
            <circle cx="125" cy="45" r="5" fill="#9CA3AF" />
            {/* Lâmina redonda de desbaste (fio de tungstênio) */}
            <circle cx="145" cy="32" r="16" fill="none" stroke="#374151" strokeWidth="3" />
            <circle cx="145" cy="32" r="13" fill="#C86D51" opacity="0.15" />
            <path d="M136 24 L154 40" stroke="#C86D51" strokeWidth="1.5" opacity="0.6" />
          </svg>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono uppercase tracking-wider text-[#8A7569] bg-white/70 px-1.5 py-0.5 rounded">Desbaste Torno</span>
        </div>
      )

    case 'wire':
      return (
        <div className={`flex items-center justify-center p-6 ${bgGrad} ${className} relative overflow-hidden rounded-t-xl`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:12px_12px]" />
          <svg viewBox="0 0 200 140" className="w-36 h-28 drop-shadow-md">
            {/* Puxador Esquerdo */}
            <rect x="25" y="45" width="16" height="50" rx="4" fill="#C29B78" stroke="#8E6A4B" strokeWidth="1.5" transform="rotate(-15 33 70)" />
            {/* Puxador Direito */}
            <rect x="155" y="45" width="16" height="50" rx="4" fill="#C29B78" stroke="#8E6A4B" strokeWidth="1.5" transform="rotate(15 163 70)" />
            {/* Cabo trançado em onda */}
            <path d="M40 70 Q100 115 155 70" fill="none" stroke="#4B5563" strokeWidth="2" strokeDasharray="3,1" />
            <circle cx="98" cy="92" r="3" fill="#C86D51" />
          </svg>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono uppercase tracking-wider text-[#8A7569] bg-white/70 px-1.5 py-0.5 rounded">Fio Inox</span>
        </div>
      )

    case 'rib':
      return (
        <div className={`flex items-center justify-center p-6 ${bgGrad} ${className} relative overflow-hidden rounded-t-xl`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:12px_12px]" />
          <svg viewBox="0 0 200 140" className="w-36 h-28 drop-shadow-md">
            {/* Rim metálico flexível */}
            <path d="M45 45 C45 25 155 25 155 55 C155 85 130 115 95 115 C60 115 45 75 45 45 Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
            <path d="M60 48 C60 38 140 38 140 58 C140 78 120 100 95 100 C70 100 60 70 60 48 Z" fill="none" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="4,2" />
            <circle cx="85" cy="65" r="4" fill="#9CA3AF" />
            <circle cx="105" cy="65" r="4" fill="#9CA3AF" />
          </svg>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono uppercase tracking-wider text-[#8A7569] bg-white/70 px-1.5 py-0.5 rounded">Aço Flexível</span>
        </div>
      )

    case 'mold':
      return (
        <div className={`flex items-center justify-center p-6 ${bgGrad} ${className} relative overflow-hidden rounded-t-xl`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:12px_12px]" />
          <svg viewBox="0 0 200 140" className="w-36 h-28 drop-shadow-md">
            {/* Molde circular perspectivado */}
            <ellipse cx="100" cy="70" rx="65" ry="40" fill="#E8DED1" stroke="#B8A793" strokeWidth="2" />
            <ellipse cx="100" cy="67" rx="55" ry="32" fill="#FAF6F0" stroke="#C86D51" strokeWidth="1.5" />
            <ellipse cx="100" cy="65" rx="35" ry="18" fill="#F0E5D6" stroke="#A8947C" strokeWidth="1" strokeDasharray="3,2" />
            <text x="100" y="70" textAnchor="middle" fill="#8C6E54" fontSize="10" fontFamily="sans-serif" fontWeight="bold">23 cm</text>
          </svg>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono uppercase tracking-wider text-[#8A7569] bg-white/70 px-1.5 py-0.5 rounded">Molde 23cm</span>
        </div>
      )

    case 'stamp':
      return (
        <div className={`flex items-center justify-center p-6 ${bgGrad} ${className} relative overflow-hidden rounded-t-xl`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:12px_12px]" />
          <svg viewBox="0 0 200 140" className="w-36 h-28 drop-shadow-md">
            {/* Haste do carimbo */}
            <path d="M92 40 L108 40 L104 80 L96 80 Z" fill="#9C6B46" stroke="#6F4A2E" strokeWidth="1.5" />
            {/* Puxador redondo */}
            <circle cx="100" cy="35" r="14" fill="#C29267" stroke="#6F4A2E" strokeWidth="1.5" />
            {/* Base retangular */}
            <rect x="75" y="80" width="50" height="15" rx="2" fill="#C86D51" stroke="#8F4630" strokeWidth="1.5" />
            {/* Iniciais estilizadas */}
            <text x="100" y="91" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="serif">CHÊ</text>
          </svg>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono uppercase tracking-wider text-[#8A7569] bg-white/70 px-1.5 py-0.5 rounded">Carimbo</span>
        </div>
      )

    case 'cone':
      return (
        <div className={`flex items-center justify-center p-6 ${bgGrad} ${className} relative overflow-hidden rounded-t-xl`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:12px_12px]" />
          <svg viewBox="0 0 200 140" className="w-36 h-28 drop-shadow-md">
            {/* Cone de bocas com 4 degraus */}
            <ellipse cx="100" cy="105" rx="45" ry="12" fill="#D3C1AD" stroke="#8C7764" strokeWidth="1.5" />
            <path d="M55 105 L65 75 L135 75 L145 105 Z" fill="#DFCDBB" />
            <ellipse cx="100" cy="75" rx="35" ry="9" fill="#CBB7A1" stroke="#8C7764" strokeWidth="1" />
            <path d="M65 75 L75 50 L125 50 L135 75 Z" fill="#E8DC CE" />
            <ellipse cx="100" cy="50" rx="25" ry="7" fill="#C4AF98" stroke="#8C7764" strokeWidth="1" />
            <path d="M75 50 L85 30 L115 30 L125 50 Z" fill="#F1E7DC" />
            <ellipse cx="100" cy="30" rx="15" ry="5" fill="#C86D51" stroke="#8F4630" strokeWidth="1" />
          </svg>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono uppercase tracking-wider text-[#8A7569] bg-white/70 px-1.5 py-0.5 rounded">4 Medidas</span>
        </div>
      )

    case 'sponge':
      return (
        <div className={`flex items-center justify-center p-6 ${bgGrad} ${className} relative overflow-hidden rounded-t-xl`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:12px_12px]" />
          <svg viewBox="0 0 200 140" className="w-36 h-28 drop-shadow-md">
            {/* Esponja orgânica com poros */}
            <path d="M70 45 C50 55 45 80 60 100 C75 118 120 115 135 100 C150 85 145 55 125 45 C105 35 85 38 70 45 Z" fill="#E4C188" stroke="#B8945B" strokeWidth="2" />
            {/* Poros */}
            <circle cx="85" cy="65" r="4" fill="#B8945B" opacity="0.6" />
            <circle cx="105" cy="75" r="5" fill="#B8945B" opacity="0.5" />
            <circle cx="120" cy="60" r="3" fill="#B8945B" opacity="0.7" />
            <circle cx="75" cy="85" r="3.5" fill="#B8945B" opacity="0.6" />
            <circle cx="100" cy="95" r="4" fill="#B8945B" opacity="0.5" />
          </svg>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono uppercase tracking-wider text-[#8A7569] bg-white/70 px-1.5 py-0.5 rounded">100% Natural</span>
        </div>
      )

    default: // cup
      return (
        <div className={`flex items-center justify-center p-6 ${bgGrad} ${className} relative overflow-hidden rounded-t-xl`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C86D51_1px,transparent_1px)] [background-size:12px_12px]" />
          <svg viewBox="0 0 200 140" className="w-36 h-28 drop-shadow-md">
            {/* Xícara Cônica */}
            <ellipse cx="100" cy="40" rx="35" ry="10" fill="#FAF6F0" stroke="#7A604D" strokeWidth="1.5" />
            <path d="M65 40 L78 95 C82 102 118 102 122 95 L135 40 Z" fill="#EBDDCF" stroke="#7A604D" strokeWidth="1.5" />
            {/* Alça lateral */}
            <path d="M130 50 C150 55 150 80 120 85" fill="none" stroke="#C86D51" strokeWidth="3" strokeLinecap="round" />
            {/* Pauta de medidas */}
            <line x1="50" y1="95" x2="150" y2="95" stroke="#8E6A4B" strokeWidth="1" strokeDasharray="3,3" />
          </svg>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono uppercase tracking-wider text-[#8A7569] bg-white/70 px-1.5 py-0.5 rounded">Cônica</span>
        </div>
      )
  }
}
