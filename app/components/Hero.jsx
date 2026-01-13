"use client";

import React, { useEffect, useState } from "react";
import { ArrowDownRight, Sunrise } from "lucide-react";

/* 🔹 Background images (3 images for 3 sides) */
const bgImages = [
  "solarbg1.jpg",
  "solarbg2.jpg",
  "solarbg3.jpg",
];

const useTypewriter = (text, speed = 35) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");
    const type = () => {
      setDisplayed(text.slice(0, index + 1));
      index++;
      if (index < text.length) setTimeout(type, speed);
    };
    type();
    return () => (index = text.length);
  }, [text, speed]);

  return displayed;
};

export const HeroSection = () => {
  const [rotation, setRotation] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  /* 🔹 Rotate cube with depth effect */
  useEffect(() => {
    const interval = setInterval(() => {
      setIsMoving(true);
      setRotation((prev) => prev - 90);
      
      // Reset the depth effect scale after animation finishes
      setTimeout(() => setIsMoving(false), 2200); 
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const badge = useTypewriter("The future of energy transition is here!", 30);
  const headline1 = useTypewriter("Powering People,", 30);
  const headline2 = useTypewriter("Sustaining The Planet.", 30);
  const cta = useTypewriter("Excited to Greenergize?", 30);
  const compare = useTypewriter(
    "Compare Solar Installers, Get The Best Value, And Go Solar With Confidence.",
    30
  );

  return (
    <div className="relative w-full min-h-[600px] font-manrope flex flex-col justify-center px-5 sm:px-6 md:px-12 lg:px-20 py-12 overflow-hidden bg-slate-950">
      
      {/* 🔹 CUBE BACKGROUND CONTAINER */}
      <div className="absolute inset-0 perspective-[2500px]">
        <div
          className="relative w-full h-full transition-all duration-[2200ms]"
          style={{
            transformStyle: "preserve-3d",
            // rotation + a slight scale back during movement makes it feel more 3D
            transform: `rotateY(${rotation}deg) ${isMoving ? 'scale(0.85)' : 'scale(1)'}`,
            transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        >
          {/* Side 1: Solid Color (Front) */}
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,#728FE4,#162B76)]"
            style={{
              transform: `rotateY(0deg) translateZ(50vw)`,
              backfaceVisibility: "hidden",
            }}
          />

          {/* Sides 2, 3, 4: Images */}
          {bgImages.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                transform: `rotateY(${(index + 1) * 90}deg) translateZ(50vw)`,
                backfaceVisibility: "hidden",
                backgroundImage: `url(${img})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 🔹 GRADIENT OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* 🔹 CONTENT */}
      <div className="relative z-10 max-w-5xl">
        <div className="inline-block bg-white/10 border border-white/60 rounded-full px-4 sm:px-5 py-1.5 mb-6 backdrop-blur-sm">
          <span className="text-white text-sm sm:text-base md:text-lg font-light tracking-wide">
            {badge}
          </span>
        </div>

        <h1 className="font-poppins text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-8 tracking-tight drop-shadow-2xl">
          {headline1}
          <br />
          {headline2}
        </h1>

        <button className="group bg-white hover:bg-gray-50 text-black px-6 py-3.5 rounded-full flex items-center gap-2 transition-all duration-300 mb-14 shadow-lg shadow-black/20">
          <span className="text-base sm:text-lg font-medium">
            {cta}
          </span>
          <Sunrise className="w-5 h-5" />
        </button>

        <div className="w-full h-px bg-white/40 mb-8 md:mb-10" />

        <div className="w-full border bg-white/10 border-white/60 rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between gap-4 text-white hover:bg-white/20 backdrop-blur-md transition-colors cursor-pointer group">
          <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold leading-snug">
            {compare}
          </span>
          <ArrowDownRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};