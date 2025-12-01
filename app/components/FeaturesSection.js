import React, { useState, useEffect, useRef } from 'react';

const features = [
  {
    title: "Smart Bidding System",
    description: "Receive multiple verified installer quotations and compare prices, timelines, and credentials — all in one dashboard.",
    iconSrc: "/auction.png", 
    color: "from-sky-400 to-blue-500",
    iconBg: "bg-blue-50",
    delay: 0
  },
  {
    title: "Verified Digital Contracts",
    description: "Every project is protected with legally binding e-sign contracts between customer and installer for full transparency.",
    iconSrc: "/check.png", 
    gradient: "from-amber-400 to-orange-500",
    iconBg: "bg-orange-50",
    delay: 150
  },
  {
    title: "Real-Time Project Tracking",
    description: "Stay updated with live project status — from site visit to final handover, every milestone is trackable in real-time.",
    iconSrc: "/in-time.png", 
    gradient: "from-green-400 to-emerald-500",
    iconBg: "bg-emerald-50",
    delay: 300
  },
  {
    title: "Powerful Installer Scoring",
    description: "Choose trusted professionals with our Rezillion Score, calculated from real project performance, customer feedback, and reliability.",
    iconSrc: "/rating-system.png", 
    gradient: "from-purple-400 to-pink-500",
    iconBg: "bg-purple-50",
    delay: 450
  },
  {
    title: "Engineering Drawing Hub",
    description: "Access complete project documentation including engineering drawings, permits, and technical specs — all centralized.",
    iconSrc: "/blueprint (1).png", 
    gradient: "from-indigo-400 to-blue-600",
    iconBg: "bg-indigo-50",
    delay: 600
  },
  {
    title: "End to End Management",
    description: "Manage your entire solar journey from one platform — coordinate tasks, track progress, and communicate seamlessly.",
    iconSrc: "/iteration.png", 
    gradient: "from-teal-400 to-cyan-500",
    iconBg: "bg-cyan-50",
    delay: 750
  }
];

export default function SolarFeaturesScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        setRotation(prev => {
          // Decrementing makes it rotate counter-clockwise (Index 0 -> 1 -> 2...)
          // Adjust 0.2 to change speed
          return prev - 0.50; 
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  // Calculate active index based on rotation
  useEffect(() => {
    const sectionSize = 360 / features.length;
    // Normalize rotation to positive 0-360 range for calculation
    const normalizedRotation = (rotation % 360 + 360) % 360;
    
    // Calculate which index is currently at the "start" position (top)
    // We offset by half a section (sectionSize / 2) to switch active state mid-transition
    const currentIndex = Math.floor(((360 - normalizedRotation) + (sectionSize / 2)) / sectionSize) % features.length;
    
    setActiveIndex(currentIndex);
  }, [rotation]);

  const getCardPosition = (index) => {
    const radius = 280;
    const anglePerCard = (2 * Math.PI) / features.length;
    const startAngle = -Math.PI / 2; // Start from top
    const angle = startAngle + index * anglePerCard + (rotation * Math.PI / 180);
    
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    return { x, y, angle: angle * (180 / Math.PI) };
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
         Why Rezillion ?
          </h1>

      
        </div>

        <div 
          className="relative w-full h-[600px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Center indicator */}
         
          
          {/* Circular track indicator */}
          <div className="absolute w-[560px] h-[560px] border-2 border-dashed border-slate-700 rounded-full opacity-30"></div>

          {features.map((feature, index) => {
            const isActive = index === activeIndex;
            const pos = getCardPosition(index);
            const displayColor = feature.color || feature.gradient;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-300 ${
                  isActive ? 'z-10' : 'z-0'
                }`}
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-190px',
                  marginTop: '-140px'
                }}
              >
                <div
                  className={`transition-all duration-300 transform ${
                    isActive 
                      ? 'scale-110 opacity-100' 
                      : 'scale-75 opacity-40'
                  }`}
                  style={{ width: '380px' }}
                >
                  <div className={`relative rounded-2xl overflow-hidden cursor-pointer ${
                    isActive ? 'shadow-2xl shadow-cyan-500/40' : 'shadow-lg'
                  }`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${displayColor} opacity-10`}></div>
                    
                    <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700 p-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${displayColor} w-fit mb-4 ${
                        isActive ? 'animate-pulse' : ''
                      }`}>
                        <img 
                          src={feature.iconSrc} 
                          alt={feature.title} 
                          className="w-8 h-8 object-contain brightness-0 invert" 
                        />
                      </div>
                      
                      <div>
                        <h3 className={`text-xl font-bold mb-3 transition-colors ${
                          isActive ? 'text-white' : 'text-slate-400'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className={`text-sm leading-relaxed transition-colors ${
                          isActive ? 'text-slate-200' : 'text-slate-500'
                        }`}>
                          {feature.description}
                        </p>
                      </div>
                      
                   
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-8 bg-cyan-500' 
                  : 'w-2 bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}