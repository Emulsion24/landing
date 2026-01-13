import React from 'react';
import {HeroSection} from '../components/Hero.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';
import GreenergizeSection from '../components/GreenergizeSection.jsx';
import WhyRezillionSection from '../components/WhyRezillionSection.jsx';
import FAQSection from '../components/FAQSection.jsx';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ProductShowcase from '../components/gg.jsx';

export default function HomeV2() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <Header/>
      {/* 1. Hero Section: "The future of energy transition is here" */}
      <HeroSection/>

      {/* 2. Features Section: "Rezillion Platform Features" */}
      <FeaturesSection />

      {/* 3. Steps Section: "Ready To Greenergize !!" */}
      <GreenergizeSection />

      {/* 4. Why Rezillion: "Why Rezillion?" Grid */}
      <WhyRezillionSection />

      {/* 5. FAQ Section: "Frequently Asked Questions" */}
      <FAQSection />
      
<ProductShowcase/>
      {/* Optional Simple Footer to close the page */}
      <Footer/>
  

    </main>
  );
}