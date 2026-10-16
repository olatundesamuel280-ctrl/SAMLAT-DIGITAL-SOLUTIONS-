import React from 'react';
import { MessageSquareHeart, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

export const Testimonials: React.FC = () => {
  const whatsappFeedbackMessage =
    'Hello SAMLAT DIGITAL SOLUTIONS, I would like to share feedback and a testimonial regarding our recent project together.';
  const whatsappUrl = getWhatsAppLink(whatsappFeedbackMessage);

  return (
    <section className="py-16 md:py-24 bg-[#0B1020] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#151D30] to-[#0f1627] border border-blue-500/20 rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="w-14 h-14 rounded-2xl bg-[#0B1020] border border-blue-500/30 flex items-center justify-center mx-auto mb-6 text-cyan-400 shadow-md">
            <MessageSquareHeart className="w-7 h-7" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
            Your experience matters.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Have we worked together? Contact us to share your feedback and help others discover our services.
          </p>

          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Architecture Placeholder Note for Future Verified Testimonials */}
          <div className="mt-8 pt-6 border-t border-slate-800/60 text-[11px] text-slate-400">
            <span>Client feedback integrity policy: Verified reviews are added directly upon client authorization.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
