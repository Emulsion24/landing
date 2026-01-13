import React from 'react';

const OurPlatforms = () => {
  return (
    <section className="py-12 bg-white font-sans">
      <div className="container mx-auto px-4 text-center">
        {/* Main Title */}
        <h2 className="text-6xl font-bold text-blue-900 mb-12">Our Platforms</h2>

        {/* Platforms Container */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          
          {/* Left Platform: greentransition.work */}
          <div className="flex flex-col items-center w-full md:w-1/4">
            {/* Blue Box */}
            <div className="bg-blue-800 text-white rounded-xl w-full h-64 flex items-center justify-center mb-4">
              <h3 className="text-xl font-bold">greentransition.work</h3>
            </div>
            {/* Description */}
            <h4 className="text-2xl font-semibold text-blue-900 mb-2">Green Jobs & Careers</h4>
            <p className="text-lg text-gray-700 text-center">
              Jobs & Training in the Green Energy Sector<br />
              Green Sector is going to be the new driver of jobs
            </p>
          </div>

          {/* Center Platform: Rezillion.energy */}
          <div className="flex flex-col items-center w-full md:w-1/3 -mt-8 md:mt-0">
            {/* Larger Dark Blue Box */}
            <div className="bg-indigo-950 text-white rounded-xl w-full h-80 flex items-center justify-center mb-4">
              <h3 className="text-4xl font-bold">Rezillion.energy</h3>
            </div>
            {/* Description */}
            <h4 className="text-2xl font-bold text-indigo-950 mb-2">Enabling Renewable Energy for Zillions</h4>
            <p className="text-lg text-gray-700 text-center">
              Go green with confidence<br />
              Get the Best Value
            </p>
          </div>

          {/* Right Platform: greenforev.com */}
          <div className="flex flex-col items-center w-full md:w-1/4">
            {/* Blue Box */}
            <div className="bg-blue-800 text-white rounded-xl w-full h-64 flex items-center justify-center mb-4">
              <h3 className="text-xl font-bold">greenforev.com</h3>
            </div>
            {/* Description */}
            <h4 className="text-2xl font-semibold text-blue-900 mb-2">Enabling Low-Carbon Charging for EVs</h4>
            <p className="text-lg text-gray-700 text-center">
              Lower the emission of your EV
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurPlatforms;