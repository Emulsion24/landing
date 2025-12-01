"use client";

import React, { useEffect, useState, useRef } from "react";
import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaWhatsappSquare} from "react-icons/fa"
import Image from "next/image";
import {
  CheckCircle,
  ArrowRight,
  Calculator,
  ChevronDown,
  Zap,
  FileText,
  Users,
  ClipboardCheck,
  Download,
} from "lucide-react";
import RezillionFeatures from "../components/FeaturesSection";
import SolarFeaturesScroll from "../components/ScrollFeature";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * ANIMATION WRAPPER
 */
const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};


export default function RezillionLandingV6() {
  
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleFaq(index) {
    setOpenFaq(openFaq === index ? null : index);
  }

  if (!mounted) return null;

  // --- DATA ---
  const workflowSteps = [
    { 
      id: "01", 
      title: "Evaluate your site's solar readiness", 
      desc: "Guided pre-installation checklist that verifies sunlight availability, shading, roof condition, electrical setup, net metering, and required approvals — so you avoid delays and hidden issues.", 
      icon: <ClipboardCheck className="w-5 h-5" />,
      type: "checklist",
      items: ["Sunlight Exposure", "Roof Condition", "Shadow Analysis"]
    },
    { 
      id: "02", 
      title: "Calculate your ideal solar system size", 
      desc: "Smart energy calculator that analyzes your area, electricity bills, expected output, savings, and payback period — optimized for Indian tariff structures.", 
      icon: <Calculator className="w-5 h-5" />,
      type: "stat",
    
    },
    { 
      id: "03", 
      title: "Competitive Bidding", 
      desc: "Receive blind bids from top-rated, verified installers. Compare technical proposals and prices side-by-side.", 
      icon: <Users className="w-5 h-5" />,
      type: "bids",
      activeBidder: "ABC Solar",
      count: "+5 Bids"
    },
    { 
      id: "04", 
      title: "Submit a complete installer-ready project", 
      desc: "All technical details including property type, installation type, shadow-free area, load info, and geolocation — supported by auto-save, validations, and clean structured format for faster quotes.", 
      icon: <FileText className="w-5 h-5" />,
      type: "file",
      filename: "Project_Specs.pdf",
      tag: "Auto-generated"
    },
    
  ];

  const faqs = [
    { q: "How does the blind bidding process work?", a: "Installers see your technical specs but not your contact info initially. They submit their best price to win your business, ensuring you get the true market rate." },
    { q: "Is the site evaluation done physically?", a: "We start with a satellite-based analysis. If the data looks promising, we coordinate a physical verification with a local certified partner." },
    { q: "Do you cover commercial projects?", a: "Yes. Our platform handles everything from residential rooftops to multi-megawatt industrial installations." },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-sky-200">
      
      <Header/>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-48 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?q=80&w=2000&auto=format&fit=crop"
              alt="Solar Roof"
              width={2000}
              height={1200}
              className="w-full h-full object-cover opacity-100" 
              priority
            />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          </div>

          <div className="container mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-16 items-center relative z-20">
            <RevealOnScroll className="space-y-8">
              
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] drop-shadow-md">
                Powering People <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400 animate-gradient-x">
                  Sustaining the Planet.
                </span>
              </h1>
              
              <p className="text-lg text-white/90 max-w-lg leading-relaxed font-medium drop-shadow-sm">
               The future of energy transition is here!
              Powering a Greener Future.
              Excited to Greenergize? Compare Solar Installers, Get the Best Quote, and Go Solar With Confidence.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button className="group relative px-8 py-4 bg-sky-600 text-white rounded-full font-bold overflow-hidden shadow-xl shadow-sky-900/50 hover:bg-sky-500 transition-all">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  <span className="flex items-center gap-2">
                   Build Your Solar Project Now <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <SolarFeaturesScroll/>

        {/* CHANGED: Removed top padding (py-24 -> pt-0 pb-24) 
           This removes the gap between the features scroll and this section.
        */}
        <section id="workflow" className="pt-0 pb-24 bg-slate-50 relative">
          <div className="container mx-auto max-w-6xl px-4 grid lg:grid-cols-12 gap-16">
            
            {/* Sticky Left Content */}
            {/* Added mt-12 to push content slightly down so it doesn't touch the previous section immediately, but the container gap is gone */}
            <div className="lg:col-span-5 sticky top-32 h-fit mt-12 md:mt-20">
              
              <div className="inline-block px-3 py-1 mb-4 border border-sky-200 bg-sky-50 rounded-full text-sky-600 text-xs font-bold tracking-widest uppercase">
                Streamlined Workflow
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                Greenergize Solar Experience
              </h2>
            
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
               Plan, calculate, and submit your complete solar project with one guided, intelligent workflow.
              </p>
              
              <div className="hidden lg:block bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                 <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-amber-500 fill-current" />
                    <span className="font-bold text-slate-900">Why this matters</span>
                 </div>
                 <p className="text-sm text-slate-600">Our Solar Project Builder combines site readiness, energy calculation, and project submission into one seamless experience — helping homeowners, businesses, and industries go solar with total clarity and confidence.</p>
              </div>
            </div>

            {/* Right Side - Detailed Workflow Steps */}
            {/* Added mt-12 to align with left side */}
            <div className="lg:col-span-7 space-y-8 relative mt-12 md:mt-20">
              <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-slate-200 -z-10" />
              
              {workflowSteps.map((step, idx) => (
                <RevealOnScroll key={step.id} delay={idx * 100} className="group flex gap-6">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full bg-white border-4 border-slate-100 shadow-lg flex items-center justify-center text-slate-400 font-bold group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-200 transition-all duration-300">
                      {step.id}
                    </div>
                  </div>
                  
                  <div className="flex-1 pt-2">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-100 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-sky-50 text-sky-700 rounded-lg">
                          {step.icon}
                        </div>
                        <h3 className="font-bold text-xl text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-6">{step.desc}</p>

                      {step.type === 'checklist' && (
                        <div className="flex flex-wrap gap-2">
                            {step.items.map(item => (
                                <div key={item} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-700 font-medium">
                                    <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                                    {item}
                                </div>
                            ))}
                        </div>
                      )}
                
                      {step.type === 'file' && (
                        <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl max-w-xs cursor-pointer hover:bg-sky-50 hover:border-sky-200 transition-colors">
                            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center shrink-0">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <div className="text-sm font-bold truncate text-slate-800">{step.filename}</div>
                                <div className="text-xs text-slate-500 font-medium">{step.tag}</div>
                            </div>
                            <Download className="w-4 h-4 text-slate-400" />
                        </div>
                      )}
                      {step.type === 'bids' && (
                        <div className="flex items-center gap-4">
                           <div className="flex -space-x-3">
                              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">A</div>
                              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-600">B</div>
                              <div className="w-10 h-10 rounded-full border-2 border-white bg-sky-100 flex items-center justify-center text-xs font-bold text-sky-700">+3</div>
                          </div>
                          <div className="text-sm font-bold text-slate-700">Lowest Bid: <span className="text-green-600">$18,400</span></div>
                        </div>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <RezillionFeatures/>

        <section id="faq" className="py-24 bg-slate-50">
            <div className="container mx-auto max-w-3xl px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <RevealOnScroll key={idx} delay={idx * 50}>
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                <button 
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                                >
                                    {faq.q}
                                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>

        <Footer/>
      </main>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
      `}</style>
    </div>
  );
}