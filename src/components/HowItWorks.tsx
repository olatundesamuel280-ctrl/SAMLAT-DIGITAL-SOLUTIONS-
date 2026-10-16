import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ArrowRight, Check } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#111827] relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            Simple & Transparent Process
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            From initial concept to project delivery, here is our straightforward 4-step workflow.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 -translate-y-8 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-[#151D30] border border-blue-500/15 hover:border-cyan-500/35 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-mono font-bold text-base shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                      {step.step}
                    </div>
                    {idx < PROCESS_STEPS.length - 1 && (
                      <ArrowRight className="hidden lg:block w-4 h-4 text-slate-500" />
                    )}
                  </div>

                  <div className="text-[11px] font-mono text-cyan-400 font-semibold mb-1">
                    PHASE {step.step}
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Clear milestones</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
