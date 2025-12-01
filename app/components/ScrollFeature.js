import { useEffect, useState, useCallback } from 'react';
// We switch to 'react-icons/md' to get true "Filled/Solid" icons
import { 
  MdCheckBox, 
  MdCalculate, 
  MdPeopleAlt, 
  MdWork, 
  MdArchitecture, 
  MdAssignmentTurnedIn, 
  MdArrowForward,
  MdPause,
  MdPlayArrow
} from "react-icons/md";
import {RiAuctionFill} from "react-icons/ri"

const features = [
  {
    id: 1,
    title: 'Pre-Installation Checklist',
    icon: MdCheckBox,
    description: 'Comprehensive site assessment and preparation verification before installation begins.',
  },
  {
    id: 2,
    title: 'Rezillion Solar Estimation Calculator',
    icon: MdCalculate,
    description: 'Advanced solar energy estimation tool for accurate system sizing and ROI calculations.',
  },
  {
    id: 3,
    title: 'Competitive Bidding',
    icon: RiAuctionFill,
    description: 'Streamlined vendor selection process with transparent pricing and comparison tools.',
  },
  {
    id: 4,
    title: 'Intelligent Project Management',
    icon: MdWork,
    description: 'AI-powered project tracking and resource allocation for optimal efficiency.',
  },
  {
    id: 5,
    title: 'Engineering Drawing',
    icon: MdArchitecture,
    description: 'Automated technical drawings and system design documentation generation.',
  },
  {
    id: 6,
    title: 'Post-Installation Checklist',
    icon: MdAssignmentTurnedIn,
    description: 'Thorough quality control and system performance validation after installation.',
  }
];

export default function SolarFeaturesAuto() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Function to move to next slide
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  }, []);

  // Auto-animate logic
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        nextSlide();
      }, 1500); // Change slide every 3.5 seconds
    }
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div className="bg-slate-950 text-slate-200 selection:bg-blue-500/30 overflow-x-hidden min-h-screen flex flex-col">
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', 
             backgroundSize: '32px 32px' 
           }} 
      />

      {/* Animated background gradient */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-20 pb-10 px-4 text-center">
        <div className="inline-block px-4 py-1.5 border border-blue-400/40 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono tracking-wider uppercase mb-4 backdrop-blur-sm">
          System Architecture
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Solar Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">Features</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A complete automated solution for your solar installation journey.
        </p>
      </div>

      {/* Auto-Slider Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-10 flex-grow flex flex-col justify-center">
        
        {/* Main Carousel Window */}
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Inner Track */}
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeIndex;

              return (
                <div key={feature.id} className="w-full flex-shrink-0 flex justify-center px-4">
                  {/* Card */}
                  <div
                    className={`relative w-full max-w-xl transition-all duration-700 ${
                      isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-50 blur-[2px]'
                    }`}
                  >
                     {/* Card Background & Border */}
                     <div
                      className={`relative overflow-hidden bg-slate-900/80 backdrop-blur-sm border transition-all duration-500 group rounded-2xl
                        ${isActive 
                          ? 'border-blue-500 shadow-[0_0_80px_-12px_rgba(59,130,246,0.5)]' 
                          : 'border-slate-800 shadow-none'
                        }
                      `}
                    >
                      {/* Animated gradient overlay */}
                      {isActive && (
                        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-500 via-transparent to-cyan-500 animate-pulse" />
                      )}

                      {/* Content */}
                      <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-8">
                          {/* Icon Box */}
                          <div className={`p-4 rounded-xl transition-all duration-500 ${
                              isActive 
                                ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50' 
                                : 'bg-slate-800 text-slate-500'
                            }`}>
                            <Icon className="w-8 h-8 md:w-10 md:h-10" />
                          </div>
                          
                          <span className="font-mono text-6xl font-bold text-slate-800/50 select-none">
                            0{feature.id}
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-4">
                          {feature.title}
                        </h3>
                        
                        <p className="text-lg text-slate-400 leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Status Indicator */}
                        <div className="mt-10 flex items-center justify-between">
                          <div className={`flex items-center gap-3 text-sm font-mono tracking-wider transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="relative">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_16px_rgba(96,165,250,0.9)]"></div>
                              <div className="absolute inset-0 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                            </div>
                            <span className="text-blue-400">ACTIVE</span>
                          </div>
                          
                          {/* Pause/Play Hint */}
                          {isActive && (
                            <div className="text-xs text-slate-600 flex items-center gap-1">
                              {isPaused ? <MdPlayArrow /> : <MdPause />}
                              <span>{isPaused ? "Paused" : "Auto-playing"}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-10 flex flex-col items-center gap-6">
          
          {/* Progress Indicators */}
          <div className="flex items-center gap-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex 
                    ? 'w-12 h-1.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' 
                    : 'w-2 h-2 bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-white transition-colors group"
          >
            <span>Next Feature</span>
            <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
          </button>
           <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Trusted by leading energy partners</p>
        </div>
      </div>


      <style jsx>{`
        /* Smooth scrolling disabled, using transforms instead */
      `}</style>
    </div>
  );
}