"use client"
import React, { useState, useRef, useEffect } from 'react';
import { CheckSquare, Calculator, Users, Briefcase, PenTool, ClipboardCheck, ArrowRight, ChevronDown, FastForward } from 'lucide-react';

const features = [
  { id: 1, title: 'Real-Time Project Tracking', icon: Calculator, color: 'from-purple-500 to-pink-500', desc: 'Stay updated with live project status — from site visit to final handover, every milestone is trackable in real-time.' },
  { id: 2, title: 'Smart Bidding System', icon: Users, color: 'from-orange-500 to-red-500', desc: 'Receive multiple verified installer quotations and compare prices, timelines, and credentials — all in one dashboard.' },
  { id: 3, title: 'Powerful Installer Scoring', icon: Briefcase, color: 'from-green-500 to-emerald-500', desc: 'Choose trusted professionals with our Rezillion Score, calculated from real project performance, customer feedback, and reliability.' },
  { id: 4, title: 'Engineering Drawing Hub', icon: PenTool, color: 'from-indigo-500 to-blue-500', desc: 'Access complete project documentation including engineering drawings, permits, and technical specs — all centralized.' },
  { id: 5, title: 'Verified Digital Contracts', icon: ClipboardCheck, color: 'from-teal-500 to-cyan-500', desc: 'Every project is protected with legally binding e-sign contracts between customer and installer for full transparency.' },
  { id: 6, title: 'End to End Management', icon: ClipboardCheck, color: 'from-teal-500 to-cyan-500', desc: 'Manage your entire solar journey from one platform — coordinate tasks, track progress, and communicate seamlessly.' }
];

export default function SolarRefinedCarousel() {
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  // CONFIGURATION
  const ANGLE_PER_ITEM = 360 / features.length;
  const RADIUS = isMobile ? 220 : 500; 

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollDistance = -top;
      const totalScrollableDistance = height - windowHeight;
      let progress = scrollDistance / totalScrollableDistance;

      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      setScrollProgress(progress); // Save progress for UI logic

      const totalRotation = (features.length - 1) * ANGLE_PER_ITEM;
      setRotation(-(progress * totalRotation));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ANGLE_PER_ITEM]);

  // --- NEW: SKIP FUNCTIONALITY ---
  const handleSkip = () => {
    if (containerRef.current) {
      // Calculate the bottom of the container relative to the document
      const containerBottom = containerRef.current.offsetTop + containerRef.current.offsetHeight;
      
      window.scrollTo({
        top: containerBottom, // Scroll exactly to the end of this component
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div ref={containerRef} className="relative h-[400vh] md:h-[500vh] bg-[#0B1120]">
        
        {/* Background Decor */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px]" />
           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0B1120] to-transparent z-10" />
        </div>

        {/* STICKY CONTAINER */}
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center perspective-[1200px]">
          
          {/* HEADER */}
          <div className="flex-shrink-0 pt-20 pb-4 md:pt-16 md:pb-8 text-center z-50 px-4 w-full max-w-2xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-[10px] md:text-xs font-semibold tracking-wider mb-3 md:mb-4 backdrop-blur-md">
              PLATFORM FEATURES
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2">
             Why Rezillion
            </h1>
          </div>

          {/* 3D CAROUSEL ROOT */}
          <div className="flex-1 w-full flex items-center justify-center relative">
            <div 
              className="relative w-full max-w-3xl flex items-center justify-center"
              style={{
                height: isMobile ? '300px' : '450px',
                transformStyle: 'preserve-3d',
                transform: `translateZ(-100px) rotateX(-5deg) rotateY(${rotation}deg)`,
                transition: 'transform 0.1s linear'
              }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const cardAngle = index * ANGLE_PER_ITEM;
                
                let relativeAngle = (cardAngle + rotation) % 360;
                if (relativeAngle < 0) relativeAngle += 360;
                const distanceToFront = Math.min(relativeAngle, 360 - relativeAngle);
                const isActive = distanceToFront < 25;
                
                return (
                  <div
                    key={feature.id}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      transform: `rotateY(${cardAngle}deg) translateZ(${RADIUS}px)`,
                      transformStyle: 'preserve-3d',
                      visibility: distanceToFront > 100 ? 'hidden' : 'visible'
                    }}
                  >
                    <div 
                      className={`
                        group relative rounded-3xl p-1 border transition-all duration-500 ease-out
                        ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-40 blur-[2px] grayscale-[0.7]'}
                      `}
                      style={{
                        width: isMobile ? '280px' : '360px',
                        height: isMobile ? '360px' : '440px',
                      }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-xl opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-40' : ''}`} />

                      <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[22px] overflow-hidden flex flex-col p-6 md:p-8 shadow-2xl">
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`} />
                        <div className={`
                          w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 md:mb-8 text-white shadow-lg
                          bg-gradient-to-br ${feature.color}
                          transform transition-transform duration-500 ${isActive ? 'scale-110 rotate-3' : 'scale-100'}
                        `}>
                          <Icon size={isMobile ? 24 : 28} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-slate-400 text-sm md:text-lg leading-relaxed flex-1 line-clamp-4 md:line-clamp-none">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BOTTOM CONTROLS & INDICATORS */}
          <div className="flex-shrink-0 w-full px-6 pb-8 md:pb-10 relative z-50">
            
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* 1. PROGRESS BAR */}
              <div className="w-full md:w-1/3 order-2 md:order-1">
                <div className="bg-slate-800/50 rounded-full h-1.5 overflow-hidden backdrop-blur-sm w-full">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-75 ease-linear"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                </div>
              </div>

              {/* 2. CENTER ARROW (More Content Below) */}
              <div className={`
                 order-3 md:order-2 flex flex-col items-center justify-center transition-opacity duration-300
                 ${scrollProgress > 0.95 ? 'opacity-0' : 'opacity-100'}
              `}>
                 <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Scroll</span>
                 <ChevronDown className="w-6 h-6 text-slate-400 animate-bounce" />
              </div>

              {/* 3. SKIP BUTTON (Bottom Right) */}
              <div className="w-full md:w-1/3 flex justify-end order-1 md:order-3">
                 <button 
                   onClick={handleSkip}
                   className="
                     group flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-white/5 hover:bg-white/10 border border-white/10 
                     backdrop-blur-md transition-all duration-300
                     hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]
                   "
                 >
                   <span className="text-xs font-medium text-slate-300 group-hover:text-white">Skip To Next Section </span>
                   <FastForward size={14} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                 </button>
              </div>

            </div>
          </div>

        </div>
      </div>

    
    </>
  );
}