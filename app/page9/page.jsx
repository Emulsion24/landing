import React from 'react';
import { Sun, Briefcase, Leaf } from 'lucide-react';
import Image from 'next/image';
import OurPlatforms from '../components/Ourplatform';
import GreenTransitionLoop from '../components/GreenTransitionLoop';
import FAQSection2 from '../components/FAQSection2';

const HeroSection = () => {
  return (
    <>
   <div className="relative w-full h-screen overflow-hidden font-sans">
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full">
    <Image
      src="/panel.jpg"
      alt="Renewable Energy Background"
      className="object-cover w-full h-full blur-xs scale-110"
      width={1920}
      height={1080}
      priority
    />
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/10 backdrop-blur-[0px]"></div>
  </div>

  {/* Content Wrapper - Increased side padding for better framing */}
  <div className="relative z-10 flex flex-col w-full h-full px-6 md:px-20 pt-8 md:pt-16">
    
    {/* Navigation Bar */}
    <div className="w-full flex justify-center mb-10 md:mb-0">
      <nav className="bg-white/60 backdrop-blur-md border border-white/40 rounded-full px-8 md:px-12 py-3 flex gap-6 md:gap-10 items-center justify-center text-sm md:text-base font-semibold text-gray-900 shadow-lg overflow-x-auto max-w-full whitespace-nowrap scrollbar-hide">
        <a href="#" className="hover:text-black transition">Home</a>
        <a href="#" className="hover:text-black transition">Our Mission</a>
        <a href="#" className="hover:text-black transition">Platforms</a>
        <a href="#" className="hover:text-black transition">Contact</a>
        <a href="#" className="hover:text-black transition">About Us</a>
      </nav>
    </div>

    {/* Main Hero Content - Removed negative margin, added vertical spacing */}
    <div className="flex flex-col justify-center flex-grow w-full max-w-7xl mx-auto pb-12 md:pb-0">

      {/* 1. Main Title - Added bottom margin for separation */}
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg text-center md:text-left whitespace-nowrap mb-6 md:mb-8">
        Rezillion Tech Private Limited
      </h1>

      {/* 2. Subheading - Added bottom margin */}
      <p className="text-xl md:text-3xl lg:text-4xl text-white font-medium drop-shadow-md text-center md:text-left mb-4">
        An energy transition tech company
      </p>

      {/* 3. Description */}
      <p className="text-lg md:text-2xl text-white/90 font-light drop-shadow-sm text-center md:text-left">
        Accelerating energy transition through Technology
      </p>

      {/* Bottom Action Cards - Increased top margin (mt-20 md:mt-32) to push cards down */}
      <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 w-full items-center gap-6 md:gap-8">

        {/* Button 1: Green Energy */}
        <div className="md:justify-self-start group flex items-center gap-4 px-8 py-5 md:py-6 bg-white/20 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl cursor-pointer hover:bg-white/30 transition w-full md:w-auto justify-center md:justify-start">
          <Sun className="text-white w-7 h-7 group-hover:scale-110 transition-transform drop-shadow-md" />
          <span className="text-white text-xl font-medium drop-shadow-md">Green Energy</span>
        </div>

        {/* Button 2: Green Jobs */}
        <div className="md:justify-self-center group flex items-center gap-4 px-8 py-5 md:py-6 bg-white/20 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl cursor-pointer hover:bg-white/30 transition w-full md:w-auto justify-center md:justify-start">
          <Briefcase className="text-white w-7 h-7 group-hover:scale-110 transition-transform drop-shadow-md" />
          <span className="text-white text-xl font-medium drop-shadow-md">Green Jobs</span>
        </div>

        {/* Button 3: Clean Mobility */}
        <div className="md:justify-self-end group flex items-center gap-4 px-8 py-5 md:py-6 bg-white/20 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl cursor-pointer hover:bg-white/30 transition w-full md:w-auto justify-center md:justify-start">
          <Leaf className="text-white w-7 h-7 group-hover:scale-110 transition-transform drop-shadow-md" />
          <span className="text-white text-xl font-medium drop-shadow-md">Clean Mobility</span>
        </div>

      </div>

    </div>
  </div>
</div>
    <OurPlatforms/>
    <GreenTransitionLoop/>
    <FAQSection2/>
    </>
  );
};

export default HeroSection;