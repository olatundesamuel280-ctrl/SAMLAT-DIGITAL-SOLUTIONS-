import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../data/content';

export const FloatingActions: React.FC = () => {
  const whatsappUrl = getWhatsAppLink(COMPANY_INFO.defaultWhatsAppMessage);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* BUTTON B: Call Button (Electric Blue Accent, Above WhatsApp) */}
      <a
        href={COMPANY_INFO.phoneHref}
        className="pointer-events-auto group flex items-center gap-2.5 px-3.5 py-3 sm:px-4 sm:py-2.5 rounded-full bg-[#3B82F6] hover:bg-blue-500 text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-cyan-300 border border-blue-400/40 cursor-pointer"
        aria-label="Call SAMLAT DIGITAL SOLUTIONS"
        title={`Call SAMLAT DIGITAL SOLUTIONS at ${COMPANY_INFO.phoneDisplay}`}
      >
        <Phone className="w-5 h-5 sm:w-4 sm:h-4 shrink-0 fill-current animate-pulse-gentle" />
        <span className="hidden sm:inline text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
          Call Us
        </span>
      </a>

      {/* BUTTON A: WhatsApp Button (Official WhatsApp Brand Green #25D366, Bottom) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group flex items-center gap-2.5 px-3.5 py-3 sm:px-4 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-200 border border-emerald-300/40 cursor-pointer"
        aria-label="Contact us on WhatsApp"
        title={`Chat on WhatsApp with SAMLAT DIGITAL SOLUTIONS (${COMPANY_INFO.whatsappDisplay})`}
      >
        <MessageCircle className="w-5 h-5 sm:w-4 sm:h-4 shrink-0 fill-current" />
        <span className="hidden sm:inline text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
