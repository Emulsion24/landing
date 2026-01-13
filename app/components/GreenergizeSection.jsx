"use client";

import React, { useEffect, useRef, useState } from "react";

const stepsData = [
  {
    number: "01",
    title: "Evaluate Your Site's Solar Readiness",
    description:
      "Guided pre-installation checklist that verifies sunlight availability, shading, roof condition, electrical setup, net metering, and required approvals — so you avoid delays and hidden issues.",
    variant: "white",
  },
  {
    number: "02",
    title: "Calculate Your Ideal Solar System Size",
    description:
      "Smart energy calculator that analyzes your area, electricity bills, expected output, savings, and payback period — optimized for Indian tariff structures.",
    variant: "glass",
  },
  {
    number: "03",
    title: "Fair Price Discovery",
    description:
      "Receive blind bids from top-rated, verified installers. Compare technical proposals and prices side-by-side.",
    variant: "white",
  },
  {
    number: "04",
    title: "Submit A Complete Installer-Ready Project",
    description:
      "All technical details including property type, installation type, shadow-free area, load info, and geolocation — supported by auto-save, validations, and clean structured format for faster quotes.",
    variant: "glass",
  },
];

const GreenergizeSection = () => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    let timeouts = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCards([]);
          stepsData.forEach((_, i) => {
            const t = setTimeout(() => {
              setVisibleCards((prev) => [...prev, i]);
            }, i * 200);
            timeouts.push(t);
          });
        } else {
          setVisibleCards([]);
          timeouts.forEach(clearTimeout);
          timeouts = [];
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-x-hidden bg-[linear-gradient(180deg,#728FE4,#162B76)] px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 font-sans text-white"
    >
      {/* Header Area */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start mb-12 sm:mb-16 gap-8">
        <div className="lg:max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-archivo font-bold mb-4 sm:mb-6 tracking-tight">
            Ready To Greenergize !!
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-poppins text-blue-100 font-light leading-relaxed max-w-xl">
            Plan, calculate, and submit your complete solar project with one guided,
            intelligent workflow.
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-5 sm:p-6 md:p-8 lg:max-w-md shadow-lg">
          <h3 className="text-lg sm:text-xl text-black font-archivo mb-2">
            The Rezillion Advantage
          </h3>
          <p className="text-sm sm:text-base font-manrope text-blue-50 leading-relaxed">
            Our Solar Project Builder combines site readiness, energy calculation,
            and project submission into one seamless experience.
          </p>
        </div>
      </div>

      {/* Roadmap Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative">
        
        {/* Mobile Roadmap Line - Adjusted to line up with smaller nodes */}
        <div className="absolute left-[23px] top-0 bottom-0 w-[2px] border-l-2 border-dashed border-white/20 lg:hidden" />

        {stepsData.map((step, index) => {
          const isVisible = visibleCards.includes(index);
          const offsetClass = index % 2 === 0 ? "lg:-translate-y-4" : "lg:translate-y-4";

          return (
            <div
              key={index}
              className={`
                relative w-full flex flex-row lg:flex-col items-stretch lg:items-start gap-4 sm:gap-6
                transition-all duration-700 ease-out transform
                ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}
                ${offsetClass}
              `}
            >
              {/* Roadmap Node (Mobile) - Scaled down to fit better */}
              <div className="flex flex-col items-center lg:hidden shrink-0 z-10">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center font-archivo font-bold text-lg border-2
                  ${step.variant === "white" 
                    ? "bg-white text-blue-700 border-blue-200" 
                    : "bg-blue-600 text-white border-white/30 shadow-inner"}
                `}>
                  {step.number}
                </div>
              </div>

              {/* Card Content - Improved padding and text wrap */}
              <div
                className={`
                  flex-1 p-5 sm:p-6 lg:p-8 rounded-2xl flex flex-col justify-center
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
                  ${
                    step.variant === "white"
                      ? "bg-white text-black shadow-xl"
                      : "bg-white/10 backdrop-blur-md border border-white/30 text-white shadow-lg shadow-blue-900/10"
                  }
                `}
              >
                {/* Number (Desktop Only) */}
                <div className={`
                  hidden lg:block text-5xl lg:text-7xl font-bold font-archivo mb-4
                  ${step.variant === "white" ? "text-black/10" : "text-white/40"}
                `}>
                  {step.number}
                </div>

                <h3 className="text-base sm:text-lg lg:text-2xl font-archivo font-bold leading-tight mb-2 break-words">
                  {step.title}
                </h3>

                <p className={`
                  text-[13px] sm:text-sm leading-relaxed font-manrope hyphens-auto
                  ${step.variant === "white" ? "text-gray-600" : "text-blue-50"}
                `}>
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GreenergizeSection;