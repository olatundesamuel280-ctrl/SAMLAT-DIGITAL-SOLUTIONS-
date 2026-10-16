import React, { useEffect } from 'react';
import { X, Check, ArrowRight, Palette, Layers, MessageCircle } from 'lucide-react';
import { PortfolioItem } from '../types';
import { ProjectMockupPreview } from './ProjectMockupPreview';
import { getWhatsAppLink } from '../data/content';

interface Props {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const whatsappMessage = `Hello SAMLAT DIGITAL SOLUTIONS, I am interested in ordering a project similar to your concept: "${item.title}" (${item.category}). Let's discuss details and pricing.`;
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#151D30] border border-blue-500/25 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Concept Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            {item.category}
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-500/30">
            {item.typeBadge}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
          {item.title}
        </h3>

        {/* Mockup Preview Area */}
        <div className="mb-6 rounded-xl overflow-hidden shadow-lg border border-slate-800">
          <ProjectMockupPreview item={item} />
        </div>

        {/* Full Concept Description */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Concept Overview
          </h4>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {item.fullDescription}
          </p>
        </div>

        {/* Deliverables & Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-[#0B1020] border border-slate-800/80">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Deliverables</span>
            </div>
            <ul className="space-y-1.5">
              {item.deliverables.map((deliv) => (
                <li key={deliv} className="flex items-start gap-2 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
              <Palette className="w-3.5 h-3.5 text-blue-400" />
              <span>Color System</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              {item.colorPalette.map((color) => (
                <div
                  key={color}
                  className="w-7 h-7 rounded-lg border border-slate-700/60 shadow-sm"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
            <div className="text-[11px] text-slate-400">
              Harmonized for dark-mode clarity and accessible contrast ratios.
            </div>
          </div>
        </div>

        {/* Action Button: WhatsApp Order */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="text-xs text-slate-400">
            Want a project built in this style for your brand?
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-blue-500/30 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Order This Style via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
