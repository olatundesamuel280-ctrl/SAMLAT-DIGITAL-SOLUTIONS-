import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../data/content';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    service: 'Website Development',
    budget: '',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please provide some details about your project.';
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please provide at least 10 characters describing your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Format professional WhatsApp message with all customer details
    const messageLines = [
      `*New Project Inquiry for SAMLAT DIGITAL SOLUTIONS*`,
      ``,
      `*Client Name:* ${formData.fullName.trim()}`,
      `*Email Address:* ${formData.email.trim()}`,
      `*Service Required:* ${formData.service}`,
      formData.budget ? `*Budget Range:* ${formData.budget}` : null,
      ``,
      `*Project Details:*`,
      `${formData.projectDetails.trim()}`,
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const waUrl = getWhatsAppLink(fullMessage);

    // Confirmation message explaining WhatsApp dispatch
    setSubmissionSuccess(
      `Your inquiry has been compiled! Launching WhatsApp to send your project details directly to our team.`
    );

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 600);
  };

  const servicesList = [
    'Website Development',
    'Graphic Design',
    'Fintech and Digital Financial Services',
    'Website Maintenance',
    'Branding and Digital Identity',
    'Digital Consultation',
    'Other Custom Digital Solution',
  ];

  const budgetOptions = [
    'Flexible / Discussion',
    'Entry / Starter Range',
    'Growth / Standard Project',
    'Custom Enterprise Scope',
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#111827] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Have a website idea, need professional graphics, or want to discuss a digital service? Get in touch with SAMLAT DIGITAL SOLUTIONS and tell us what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#151D30] rounded-2xl p-6 sm:p-8 border border-blue-500/15 shadow-xl">
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Direct Communication
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Reach us directly via phone, WhatsApp, or email. We are available to consult on your web and design requirements.
              </p>

              <div className="space-y-4">
                {/* Phone Link */}
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#0B1020] hover:bg-[#101728] border border-blue-500/20 hover:border-cyan-500/40 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Phone Call
                      </div>
                      <div className="text-base font-bold text-white font-mono">
                        {COMPANY_INFO.phoneDisplay}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* WhatsApp Link */}
                <a
                  href={COMPANY_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#0B1020] hover:bg-[#101728] border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        WhatsApp Message
                      </div>
                      <div className="text-base font-bold text-white font-mono">
                        {COMPANY_INFO.whatsappDisplay}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* Email Link */}
                <a
                  href={COMPANY_INFO.emailHref}
                  className="flex items-center justify-between p-4 rounded-xl bg-[#0B1020] hover:bg-[#101728] border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Email Address
                      </div>
                      <div className="text-sm sm:text-base font-medium text-white truncate">
                        {COMPANY_INFO.emailDisplay}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                </a>
              </div>
            </div>

            {/* Verification & Trust Badge */}
            <div className="p-5 rounded-2xl bg-[#151D30]/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Direct Project Inquiries:</strong> All project inquiries are sent securely and directly to our WhatsApp support line, ensuring rapid review and prompt follow-up without intermediary delays.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#151D30] rounded-2xl p-6 sm:p-10 border border-blue-500/20 shadow-xl relative">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                Send Project Inquiry
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Fill out the details below. We will immediately prepare your customized WhatsApp inquiry message.
              </p>

              {submissionSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/40 flex items-start gap-3 text-emerald-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <div className="font-semibold text-emerald-200">Inquiry Prepared</div>
                    <div>{submissionSuccess}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0B1020] text-white border text-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.fullName
                        ? 'border-rose-500/80 focus:ring-rose-500/50'
                        : 'border-slate-800 focus:border-cyan-500/60 focus:ring-cyan-500/30'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. name@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0B1020] text-white border text-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.email
                        ? 'border-rose-500/80 focus:ring-rose-500/50'
                        : 'border-slate-800 focus:border-cyan-500/60 focus:ring-cyan-500/30'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Service Required & Budget Range (2 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Service Required <span className="text-rose-400">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1020] text-white border border-slate-800 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/30 transition-colors cursor-pointer"
                    >
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv} className="bg-[#0B1020] text-white">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Budget Range <span className="text-slate-500 lowercase">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1020] text-white border border-slate-800 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/30 transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-[#0B1020] text-slate-400">
                        Select a range
                      </option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0B1020] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Project Details <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => {
                      setFormData({ ...formData, projectDetails: e.target.value });
                      if (errors.projectDetails) setErrors({ ...errors, projectDetails: undefined });
                    }}
                    placeholder="Tell us about your project goals, desired features, deadlines, or design preferences..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#0B1020] text-white border text-sm focus:outline-none focus:ring-2 transition-colors resize-y ${
                      errors.projectDetails
                        ? 'border-rose-500/80 focus:ring-rose-500/50'
                        : 'border-slate-800 focus:border-cyan-500/60 focus:ring-cyan-500/30'
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.projectDetails}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Opening WhatsApp...' : 'Send Project Inquiry'}</span>
                  </button>
                  <p className="mt-3 text-center text-xs text-slate-400">
                    Clicking sends your inquiry directly to our official WhatsApp line ({COMPANY_INFO.whatsappDisplay}) for prompt discussion.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
