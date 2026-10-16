import React from 'react';
import { ArrowUp, Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080D1A] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand & Description Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[1px] shadow-sm">
                <div className="w-full h-full bg-[#0B1020] rounded-[11px] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading text-lg font-bold tracking-tight text-white leading-tight">
                  SAMLAT
                </span>
                <span className="text-[10px] tracking-wider text-slate-400 uppercase leading-none font-medium">
                  DIGITAL SOLUTIONS
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Creative digital solutions for modern businesses. Providing websites, high-impact graphics, and supported fintech assistance.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              Your growth partner for dependable digital delivery.
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Quick Links
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => scrollTo(e, '#hero')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollTo(e, '#about')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollTo(e, '#services')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => scrollTo(e, '#portfolio')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, '#contact')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Services
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Website Development</li>
              <li>Graphic Design</li>
              <li>Fintech & Digital Solutions</li>
              <li>Branding</li>
              <li>Website Maintenance</li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Direct Contact
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-blue-400 group-hover:text-cyan-400 transition-colors shrink-0" />
                  <span className="font-mono">{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors shrink-0" />
                  <span className="font-mono">{COMPANY_INFO.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.emailHref}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors shrink-0" />
                  <span className="truncate">{COMPANY_INFO.emailDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top Button */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#151D30] hover:bg-slate-800 border border-blue-500/20 text-xs font-medium text-slate-300 hover:text-white transition-all cursor-pointer group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
