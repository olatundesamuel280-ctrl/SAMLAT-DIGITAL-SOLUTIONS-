import React from 'react';
import {
  Layout,
  Smartphone,
  CheckCircle,
  Users,
  Cpu,
  MessageSquare,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-blue-400" />;
      case 'CheckCircle':
        return <CheckCircle className="w-6 h-6 text-emerald-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-cyan-300" />;
      default:
        return <Layout className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#0B1020] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            Our Commitment
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Why Work With SAMLAT DIGITAL SOLUTIONS?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A reliable partner committed to delivering quality digital outcomes for your brand.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.number}
              className="bg-[#151D30] hover:bg-[#192238] border border-blue-500/15 hover:border-cyan-500/35 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-cyan-500/10 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0B1020] border border-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-400/80 bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-500/20">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Client Centric</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
