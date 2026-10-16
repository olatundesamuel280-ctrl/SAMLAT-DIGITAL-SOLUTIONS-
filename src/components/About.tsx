import React, { useState } from 'react';
import { Lightbulb, Palette, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { VALUE_PROPS } from '../data/content';

export const About: React.FC = () => {
  const [aboutImageLoaded, setAboutImageLoaded] = useState(true);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Lightbulb className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Palette className="w-6 h-6 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Lightbulb className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#111827] relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            About SAMLAT DIGITAL SOLUTIONS
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Digital Creativity Meets Smart Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Technology, creativity, and digital innovation working together for your business.
          </p>
        </div>

        {/* Narrative Description Block with Visual Studio Preview */}
        <div className="max-w-5xl mx-auto mb-16 bg-[#151D30] rounded-2xl p-6 sm:p-10 border border-blue-500/15 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed text-left">
              <p>
                <strong className="text-white font-semibold">SAMLAT DIGITAL SOLUTIONS</strong> is a digital services brand focused on website development, graphic design, and practical digital solutions. We combine creativity, technology, and attention to detail to help individuals, startups, and businesses build a stronger digital presence.
              </p>
              <p>
                Whether you need a professional website, eye-catching graphics, or assistance with supported fintech-related digital services, our goal is to deliver solutions that are useful, reliable, and tailored to your needs.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Custom Digital Craft</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Responsive Web Standards</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Practical Tech Execution</span>
                </div>
              </div>
            </div>

            {/* Right visual asset column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-blue-500/30 shadow-2xl group bg-[#0B1020]">
                {aboutImageLoaded ? (
                  <img
                    src="/src/assets/images/brand_identity_showcase_1792161662943.jpg"
                    alt="SAMLAT DIGITAL SOLUTIONS brand design and digital craft"
                    referrerPolicy="no-referrer"
                    onError={() => setAboutImageLoaded(false)}
                    className="w-full h-56 sm:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-56 flex items-center justify-center bg-[#0B1020] text-slate-500">
                    <Palette className="w-10 h-10 text-cyan-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 bg-[#0B1020]/90 px-2 py-0.5 rounded border border-cyan-500/30">
                    Design & Identity Craft
                  </span>
                  <div className="text-xs font-semibold text-white mt-1">
                    Consistent Brand Standards Across All Screens
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Core Specializations: Web · Graphics · Digital Solutions · Fintech
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Connect with us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {VALUE_PROPS.map((prop, idx) => (
            <div
              key={prop.title}
              className="bg-[#151D30] hover:bg-[#1a233a] border border-blue-500/15 hover:border-cyan-500/35 rounded-2xl p-6 sm:p-8 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0B1020] border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(prop.iconName)}
                </div>

                <div className="text-xs font-mono text-cyan-400 font-semibold mb-2">
                  0{idx + 1}. PRINCIPLE
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3 tracking-tight">
                  {prop.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {prop.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Dedicated Execution</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
