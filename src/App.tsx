import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1020] text-[#F8FAFC] flex flex-col font-sans selection:bg-blue-600/30 selection:text-cyan-300">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Page Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About the Company */}
        <About />

        {/* 3. Services Section */}
        <Services />

        {/* 4. Portfolio & Showcase */}
        <Portfolio />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. How It Works (Timeline) */}
        <HowItWorks />

        {/* 7. Testimonials & Client Feedback */}
        <Testimonials />

        {/* 8. Contact Section & WhatsApp Fallback Form */}
        <Contact />
      </main>

      {/* Footer with Dynamic Year & Back-to-Top */}
      <Footer />

      {/* Floating Action Buttons: WhatsApp & Call */}
      <FloatingActions />
    </div>
  );
}
