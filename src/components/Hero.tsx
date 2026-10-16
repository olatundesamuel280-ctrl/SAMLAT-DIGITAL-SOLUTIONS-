import React, { useState } from 'react';
import { ArrowRight, Code2, Palette, Sparkles, CheckCircle2, ChevronRight, Monitor, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Hero: React.FC = () => {
  const [heroImageLoaded, setHeroImageLoaded] = useState(true);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call-To-Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Introductory Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              Building Digital Experiences That{' '}
              <span className="text-gradient block sm:inline">
                Move Your Business Forward.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {COMPANY_INFO.subheadline}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium text-slate-200 bg-[#151D30] hover:bg-[#1C263E] border border-blue-500/20 hover:border-cyan-500/40 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Compact Value Indicators */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-medium">Creative Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-medium">Modern Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span className="font-medium">Business-Focused Solutions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Digital Studio Visual & Dashboard Mockup */}
          <div className="lg:col-span-5 relative w-full">
            {/* Visual Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/25 to-cyan-400/25 rounded-3xl blur-2xl -z-10" />

            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Container Card: Modern Browser Frame with Studio Visual */}
              <div className="rounded-2xl bg-[#151D30] border border-blue-500/30 overflow-hidden shadow-2xl shadow-black/80 relative z-10 transition-transform duration-300 hover:scale-[1.01]">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0B1020] border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-3 py-1 rounded-md bg-[#151D30] border border-blue-500/20 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                    <span className="text-cyan-400">https://</span>
                    <span>samlat-digital.com</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SSL</span>
                  </div>
                </div>

                {/* Primary Visual Studio Hero Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0B1020]">
                  {heroImageLoaded ? (
                    <img
                      src="/src/assets/images/hero_digital_studio_1792161661132.jpg"
                      alt="SAMLAT DIGITAL SOLUTIONS - Creative development and design studio"
                      referrerPolicy="no-referrer"
                      onError={() => setHeroImageLoaded(false)}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-950 via-[#0B1020] to-slate-900">
                      <Monitor className="w-12 h-12 text-cyan-400/60" />
                    </div>
                  )}

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151D30] via-transparent to-black/30 pointer-events-none" />

                  {/* Live Studio Kicker Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-[#0B1020]/85 backdrop-blur-md px-3 py-1 rounded-lg border border-blue-500/30 text-[11px] text-white">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-semibold">Digital Production Hub</span>
                  </div>
                </div>

                {/* Lower Overlaid Dashboard Strip */}
                <div className="p-4 bg-[#151D30] border-t border-slate-800 space-y-3">
                  {/* Code Editor Mini Snippet */}
                  <div className="p-3 rounded-xl bg-[#0B1020] border border-blue-500/20 font-mono text-xs leading-relaxed text-slate-300 flex items-center justify-between">
                    <div>
                      <span className="text-blue-400">samlat</span>.<span className="text-cyan-300">build</span>({'{'} <span className="text-emerald-400">quality: "premium"</span> {'}'})
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-500/30">
                      Active
                    </span>
                  </div>

                  {/* Dual Quick Tags: Palette & Response */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-[#0B1020] border border-slate-800 flex items-center gap-2">
                      <Palette className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-slate-200 font-medium">Bespoke Design</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#0B1020] border border-slate-800 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="text-slate-200 font-medium">Modern Tech Stack</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Accent Badge 1: Top-Right */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#0B1020]/95 backdrop-blur-md border border-cyan-500/40 rounded-xl px-3.5 py-2 shadow-xl shadow-cyan-500/10 z-20 hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-xs font-semibold text-white">Mobile-Responsive First</span>
              </div>

              {/* Floating Accent Badge 2: Bottom-Left */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#0B1020]/95 backdrop-blur-md border border-blue-500/40 rounded-xl px-3.5 py-2.5 shadow-xl shadow-blue-500/10 z-20 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-600/30 flex items-center justify-center text-cyan-400 font-bold text-xs">
                  100%
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Performance Focused</div>
                  <div className="text-[10px] text-slate-400">Clean & Scalable Code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
