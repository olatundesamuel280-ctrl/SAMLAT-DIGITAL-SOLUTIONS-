import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { Globe, Palette, ShoppingBag, Sparkles, CreditCard, Layout, Eye } from 'lucide-react';

interface Props {
  item: PortfolioItem;
}

export const ProjectMockupPreview: React.FC<Props> = ({ item }) => {
  const [imageError, setImageError] = useState(false);

  // If item has a valid generated illustrative asset and hasn't failed, show it with high-end framing
  if (item.imageUrl && !imageError) {
    return (
      <div className="w-full h-48 sm:h-56 relative overflow-hidden rounded-xl bg-[#0B1020] border border-blue-500/20 group-hover:border-cyan-500/40 transition-colors">
        <img
          src={item.imageUrl}
          alt={`${item.title} - ${item.category} illustrative concept`}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Measured dark scrim for typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-[#0B1020]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Bottom indicator tag */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
          <span className="font-semibold px-2 py-0.5 rounded-md bg-[#0B1020]/80 backdrop-blur-sm border border-blue-500/30">
            {item.category}
          </span>
          <span className="text-cyan-300 font-mono text-[10px] bg-[#0B1020]/80 backdrop-blur-sm px-2 py-0.5 rounded-md border border-cyan-500/30">
            Illustrative Showcase
          </span>
        </div>
      </div>
    );
  }

  // Fallback interactive vector layout if image fails to load
  switch (item.mockupType) {
    case 'web-corporate':
      return (
        <div className="w-full h-48 sm:h-56 bg-[#0d1424] p-3 sm:p-4 rounded-xl flex flex-col justify-between border border-blue-500/20 relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-500/70" />
              <div className="w-2 h-2 rounded-full bg-amber-500/70" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
            </div>
            <span className="text-[10px] font-mono text-slate-500">modern-corporate.web</span>
            <div className="w-4" />
          </div>

          <div className="my-auto space-y-2">
            <div className="h-4 w-3/4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-md" />
            <div className="h-2 w-1/2 bg-slate-700/60 rounded" />
            <div className="h-2 w-2/3 bg-slate-800/80 rounded" />
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="h-10 bg-slate-800/50 rounded-lg border border-slate-700/40 p-1.5 flex flex-col justify-end">
                <div className="w-full h-1 bg-blue-500/60 rounded" />
              </div>
              <div className="h-10 bg-slate-800/50 rounded-lg border border-slate-700/40 p-1.5 flex flex-col justify-end">
                <div className="w-full h-1 bg-cyan-500/60 rounded" />
              </div>
              <div className="h-10 bg-slate-800/50 rounded-lg border border-slate-700/40 p-1.5 flex flex-col justify-end">
                <div className="w-full h-1 bg-blue-400/60 rounded" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/60">
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3 text-cyan-400" /> Web Showcase
            </span>
            <span className="text-cyan-400">Preview Mode</span>
          </div>
        </div>
      );

    case 'flyer-modern':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-[#0c1833] via-[#091325] to-[#122b52] p-4 rounded-xl flex flex-col justify-between border border-blue-500/20 relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <span className="text-[10px] tracking-widest uppercase font-bold text-cyan-300">ANNUAL EVENT</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono">FLYER · 4:5</span>
          </div>

          <div className="my-auto text-left space-y-1">
            <div className="font-heading text-lg font-bold text-white leading-tight">
              DIGITAL SUMMIT <span className="text-cyan-400">2026</span>
            </div>
            <div className="text-[11px] text-slate-300">Creative Promotional Layout</div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full my-1.5" />
            <div className="text-[10px] text-slate-400 line-clamp-1">Visual Hierarchy · Print Ready · Social Formats</div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/80">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" /> Vector Artwork
            </span>
            <span className="text-blue-400">High-DPI CMYK</span>
          </div>
        </div>
      );

    case 'brand-guidelines':
      return (
        <div className="w-full h-48 sm:h-56 bg-[#0a1120] p-4 rounded-xl flex flex-col justify-between border border-blue-500/20 relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-white text-[11px]">
                S
              </div>
              <span className="text-xs font-semibold text-white">Identity System</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">v1.0 Specs</span>
          </div>

          <div className="my-auto space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#0B1020] border border-blue-500/40" />
              <div className="w-7 h-7 rounded bg-[#3B82F6]" />
              <div className="w-7 h-7 rounded bg-[#22D3EE]" />
              <div className="w-7 h-7 rounded bg-[#94A3B8]" />
              <div className="w-7 h-7 rounded bg-[#F8FAFC]" />
            </div>
            <div className="p-2 rounded bg-[#151D30] border border-slate-800 text-[10px] font-mono text-slate-300 flex justify-between items-center">
              <span>Font: Space Grotesk + Inter</span>
              <span className="text-cyan-400">Harmonized</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/80">
            <span className="flex items-center gap-1">
              <Palette className="w-3 h-3 text-cyan-400" /> Brand Identity
            </span>
            <span className="text-cyan-400">Complete Kit</span>
          </div>
        </div>
      );

    case 'ecommerce-store':
      return (
        <div className="w-full h-48 sm:h-56 bg-[#0c1424] p-3 sm:p-4 rounded-xl flex flex-col justify-between border border-blue-500/20 relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
              <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
              <span>Storefront Preview</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
              Cart Active
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="p-2 rounded-lg bg-[#151D30] border border-slate-800 space-y-1.5">
              <div className="w-full h-10 bg-slate-800/60 rounded flex items-center justify-center">
                <Layout className="w-4 h-4 text-slate-500" />
              </div>
              <div className="h-2 w-3/4 bg-slate-700 rounded" />
              <div className="h-2 w-1/3 bg-cyan-400/80 rounded" />
            </div>
            <div className="p-2 rounded-lg bg-[#151D30] border border-slate-800 space-y-1.5">
              <div className="w-full h-10 bg-slate-800/60 rounded flex items-center justify-center">
                <Layout className="w-4 h-4 text-slate-500" />
              </div>
              <div className="h-2 w-3/4 bg-slate-700 rounded" />
              <div className="h-2 w-1/3 bg-cyan-400/80 rounded" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/80">
            <span>Catalog & Checkout Flow</span>
            <span className="text-emerald-400 font-medium">Ready to Deploy</span>
          </div>
        </div>
      );

    case 'social-campaign':
      return (
        <div className="w-full h-48 sm:h-56 bg-[#0f172a] p-3 sm:p-4 rounded-xl flex flex-col justify-between border border-blue-500/20 relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white">Social Campaign Kit</span>
            <span className="text-[10px] font-mono text-blue-400">1:1 & 9:16 Assets</span>
          </div>

          <div className="my-auto flex items-center justify-center gap-3">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-tr from-blue-700 to-cyan-500 p-2 flex flex-col justify-between shadow-md">
              <div className="text-[8px] font-bold text-white uppercase">Promo</div>
              <div className="text-[7px] text-white/90 font-medium">Flash Deal</div>
            </div>
            <div className="w-14 h-22 rounded-lg bg-[#1e293b] border border-blue-500/40 p-1.5 flex flex-col justify-between">
              <div className="w-4 h-1 bg-cyan-400 rounded-full" />
              <div className="text-[7px] text-slate-300 leading-tight">Story Banner</div>
              <div className="w-full h-3 bg-blue-600/60 rounded" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/80">
            <span>Multi-Platform Formats</span>
            <span className="text-cyan-400">High Engagement</span>
          </div>
        </div>
      );

    case 'fintech-ui':
      return (
        <div className="w-full h-48 sm:h-56 bg-[#0a1120] p-3 sm:p-4 rounded-xl flex flex-col justify-between border border-blue-500/20 relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-semibold text-white">Fintech Portal</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full">
              Live Balance
            </span>
          </div>

          <div className="my-auto space-y-2">
            <div className="p-2 rounded-lg bg-[#151D30] border border-slate-800/80 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-slate-400">Available Balance</div>
                <div className="text-sm font-bold text-white font-mono">₦2,450,000.00</div>
              </div>
              <div className="text-[10px] text-emerald-400 font-mono">+12.4%</div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 px-1">
              <span>Transfer status: Verified</span>
              <span className="text-cyan-400">Secure API</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/80">
            <span>Dashboard Exploration</span>
            <span className="text-emerald-400 font-medium">Digital Workflow</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-48 sm:h-56 bg-[#151D30] rounded-xl flex items-center justify-center border border-slate-800">
          <Eye className="w-8 h-8 text-slate-600" />
        </div>
      );
  }
};
