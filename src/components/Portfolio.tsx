import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/content';
import { PortfolioItem } from '../types';
import { ProjectMockupPreview } from './ProjectMockupPreview';
import { ProjectModal } from './ProjectModal';
import { Eye, ArrowUpRight, Sparkles, HelpCircle } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Projects');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [showReplacementHelp, setShowReplacementHelp] = useState<boolean>(false);

  const categories = [
    'All Projects',
    'Web Design',
    'Graphic Design',
    'Branding',
    'Digital Concepts',
  ];

  const filteredItems =
    activeCategory === 'All Projects'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#111827] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            Portfolio & Demonstrations
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Selected Work & Creative Showcase
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A showcase of digital design, web experiences, and creative possibilities.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25'
                    : 'bg-[#151D30] text-slate-400 hover:text-white hover:bg-[#1a233a] border border-blue-500/15'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-[#151D30] hover:bg-[#182138] border border-blue-500/15 hover:border-cyan-500/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10 group cursor-pointer"
            >
              <div>
                {/* Visual Thumbnail Area */}
                <div className="p-3 bg-[#0B1020]/60 relative">
                  <ProjectMockupPreview item={item} />
                  
                  {/* Floating Concept Badge */}
                  <div className="absolute top-5 right-5 z-10">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0B1020]/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm shadow-sm">
                      {item.typeBadge}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                    {item.category}
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {item.shortDescription}
                  </p>
                </div>
              </div>

              {/* Card Footer: View Details CTA */}
              <div className="px-6 pb-6 pt-0">
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    <span>View Concept Details</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Customization Guide (Toggleable for owner clarity) */}
        <div className="max-w-2xl mx-auto rounded-xl bg-[#151D30]/80 border border-blue-500/20 p-4 sm:p-5 text-left">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Notice: Creative Design Concepts
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  All items shown above represent illustrative design concepts and technical templates to showcase our capabilities. As live client projects are completed, they can easily replace these concept cards.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowReplacementHelp(!showReplacementHelp)}
              className="p-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer shrink-0"
              title="How to replace with real projects"
              aria-label="Toggle instructions on how to customize projects"
            >
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>

          {showReplacementHelp && (
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-2 bg-[#0B1020] p-3 rounded-lg font-mono">
              <div className="text-cyan-400 font-semibold">// How to update portfolio items:</div>
              <div>1. Open <code className="text-blue-300">src/data/content.ts</code></div>
              <div>2. Update the <code className="text-blue-300">PORTFOLIO_ITEMS</code> array with your real project titles, descriptions, and deliverables.</div>
              <div>3. You can supply custom image screenshots or live project URLs directly.</div>
            </div>
          )}
        </div>
      </div>

      {/* Selected Item Modal */}
      <ProjectModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};
