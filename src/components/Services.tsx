import React from 'react';
import {
  Monitor,
  Palette,
  Wallet,
  Settings,
  Layers,
  Lightbulb,
  Check,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import { SERVICES, getWhatsAppLink } from '../data/content';

export const Services: React.FC = () => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-blue-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-cyan-400" />;
      case 'Wallet':
        return <Wallet className="w-6 h-6 text-emerald-400" />;
      case 'Settings':
        return <Settings className="w-6 h-6 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-400" />;
      default:
        return <Monitor className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0B1020] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            Our Core Capabilities
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Digital services designed to bring your ideas to life.
          </p>
        </div>

        {/* 6 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => {
            const whatsappUrl = getWhatsAppLink(service.whatsappMessage);

            return (
              <div
                key={service.id}
                className="bg-[#151D30] hover:bg-[#182138] border border-blue-500/15 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10 group relative"
              >
                <div>
                  {/* Top Bar inside card: Icon and Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1020] border border-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {renderIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-heading text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Deliverables Bullet List */}
                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="pt-4 border-t border-slate-800/80 mb-6">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                        Key Deliverables:
                      </div>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Direct Action Button: WhatsApp Pre-filled */}
                <div className="pt-4 border-t border-slate-800/80 mt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0B1020] hover:bg-blue-600/20 border border-blue-500/30 hover:border-cyan-400/50 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                      <span>{service.ctaLabel}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Project Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Have a custom digital requirement not listed above?{' '}
            <a
              href="#contact"
              className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
            >
              Contact us directly to discuss your specific needs.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
