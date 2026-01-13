"use client";
import React from 'react';
import Image from 'next/image';

const GreenTransitionLoop = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden font-sans bg-gray-900">
      
      {/* GLOBAL STYLES FOR ANIMATION */}
      <style jsx global>{`
        @keyframes flow-animation {
          from { stroke-dashoffset: 24; }
          to { stroke-dashoffset: 0; }
        }
        .arrow-flow {
          animation: flow-animation 1.5s linear infinite;
        }
      `}</style>

      {/* 1. Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/powergrid.jpg" 
          alt="Background"
          fill
          className="w-full h-full object-cover blur-sm opacity-60"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay"></div>
      </div>

      {/* 2. Main Title */}
      <div className="relative z-10 text-center mb-8 md:mb-12 px-4 mt-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-sm leading-tight">
          A Closed-Loop for <br /> Green Transition
        </h2>
      </div>

      {/* 3. The Cycle Diagram Container */}
      <div className="relative z-10 w-[350px] h-[350px] md:w-[600px] md:h-[600px] aspect-square">
        
        {/* SVG Layer */}
        <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <defs>
            {/* Arrow Head */}
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 z" fill="white" opacity="0.8" />
            </marker>

            {/* --- ARROW PATHS (Connecting the centers) --- */}
            {/* Top -> Right */}
            <path id="arrow1" d="M 340,130 Q 530,200 500,400" />
            {/* Right -> Left */}
            <path id="arrow2" d="M 450,480 Q 300,560 150,480" />
            {/* Left -> Top */}
            <path id="arrow3" d="M 100,400 Q 70,200 260,130" />

            {/* --- TEXT WRAPPING PATHS (Arcs around the images) --- */}
            {/* 1. Top Image Text Path (Arches OVER the circle) 
                Center: 300, 108 */}
            <path id="textPathTop" d="M 180,108 A 120,120 0 1,1 420,108" />

            {/* 2. Right Image Text Path (Arches UNDER the circle) 
                Center: 486, 438 */}
            <path id="textPathRight" d="M 366,438 A 120,120 0 0,0 606,438" />

            {/* 3. Left Image Text Path (Arches UNDER the circle) 
                Center: 114, 438 */}
            <path id="textPathLeft" d="M -6,438 A 120,120 0 0,0 234,438" />

          </defs>

          {/* RENDER ARROWS */}
          <g fill="none" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" opacity="0.6">
            <use href="#arrow1" className="arrow-flow" strokeDasharray="12 12" />
            <use href="#arrow2" className="arrow-flow" strokeDasharray="12 12" />
            <use href="#arrow3" className="arrow-flow" strokeDasharray="12 12" />
          </g>

          {/* RENDER TEXT ON CURVED PATHS */}
          
          {/* Top Label */}
          <text fill="white" fontSize="19" fontWeight="700" letterSpacing="1.2" style={{ textShadow: "0px 2px 4px rgba(0,0,0,1)" }}>
            <textPath href="#textPathTop" startOffset="50%" textAnchor="middle" dy="-10">
              Green Energy Deployment
            </textPath>
          </text>

          {/* Right Label */}
          <text fill="white" fontSize="19" fontWeight="700" letterSpacing="1.2" style={{ textShadow: "0px 2px 4px rgba(0,0,0,1)" }}>
            <textPath href="#textPathRight" startOffset="50%" textAnchor="middle" dy="25">
              Talent for Green Transition
            </textPath>
          </text>

          {/* Left Label */}
          <text fill="white" fontSize="19" fontWeight="700" letterSpacing="1.2" style={{ textShadow: "0px 2px 4px rgba(0,0,0,1)" }}>
            <textPath href="#textPathLeft" startOffset="50%" textAnchor="middle" dy="25">
              Accelarating  Clean Mobility
            </textPath>
          </text>
        </svg>

        {/* --- IMAGES (Positioned at centers) --- */}
        
        {/* 1. TOP IMAGE (Center ~300, 108) */}
        <div className="absolute w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-green-400/50 shadow-[0_0_30px_rgba(74,222,128,0.3)] z-20"
             style={{ top: '18%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Image 
            src="/deployment.jpg" 
            alt="Green Energy"
            fill
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* 2. BOTTOM RIGHT IMAGE (Center ~486, 438) */}
        <div className="absolute w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-blue-400/50 shadow-[0_0_30px_rgba(96,165,250,0.3)] z-20"
             style={{ top: '73%', left: '81%', transform: 'translate(-50%, -50%)' }}>
          <Image 
            src="/workforce.jpg" 
            alt="Talent"
            fill
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* 3. BOTTOM LEFT IMAGE (Center ~114, 438) */}
        <div className="absolute w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-teal-400/50 shadow-[0_0_30px_rgba(45,212,191,0.3)] z-20"
             style={{ top: '73%', left: '19%', transform: 'translate(-50%, -50%)' }}>
          <Image 
            src="/mobility.jpg" 
            alt="Clean Mobility"
            fill
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

      </div>
    </div>
  );
};

export default GreenTransitionLoop;