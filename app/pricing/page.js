'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google'; // 1. Import font
import bbgImage from '../../public/bbg.jpg';

// 2. Configure the font with necessary weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function Page() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = {
    monthly: [
      {
        price: '₹0',
        name: 'Free',
        description: 'Unleash the power of automation.',
        features: [
          ' 5 Credits',
          '200 km operational range',
          'Basic listing on Rezillion map'
        ],
        highlighted: false
      },
      {
        price: '₹2999',
        name: 'Pro',
        description: 'Automation tools to take your work to the next level.',
        features: [
          '25 Credits',
          '200 km operational range',
          'Priority visibility & analytics',
         
        ],
        highlighted: false
      },
      {
        price: '₹19,999',
        name: 'Enterprise',
        description: 'Automation plus enterprise-grade features.',
        features: [
          '100 Credits',
          'Nationwide coverage',
          'Dedicated account & marketing support',
          'Advanced Admin',
          'Custom Data Retention'
        ],
        highlighted: true
      }
    ],
    annual: [
      {
        price: '₹0',
        name: 'Free',
        description: 'Unleash the power of automation.',
        features: [
          'Multi-step Zap',
          '3 Premium Apps',
          '2 Users Team'
        ],
        highlighted: false
      },
      {
        price: '₹29990',
        name: 'Pro',
        description: 'Automation tools to take your work to the next level.',
        features: [
          'Multi-step Zap',
          'Unlimited Premium',
          '50 Users team',
          'Shared Workspace'
        ],
        highlighted: false
      },
      {
        price: '₹199990',
        name: 'Enterprise',
        description: 'Automation plus enterprise-grade features.',
        features: [
          'Multi-step Zaps',
          'Unlimited Premium',
          'Unlimited user team',
          'Advanced Admin',
          'Custom Data Retention'
        ],
        highlighted: true
      }
    ]
  };

  const currentPlans = isAnnual ? plans.annual : plans.monthly;

  return (
    // 3. Apply the font class here
    <div className={`min-h-screen relative overflow-hidden ${poppins.className}`}>
      {/* Background Image */}
      <Image
        src={bbgImage}
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Solar panel image at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-60" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='1200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23374151;stop-opacity:0.8' /%3E%3Cstop offset='100%25' style='stop-color:%23111827;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='200' fill='url(%23g1)'/%3E%3Cg fill='%231f2937' opacity='0.6'%3E%3Crect x='50' y='120' width='120' height='80' rx='4'/%3E%3Crect x='200' y='120' width='120' height='80' rx='4'/%3E%3Crect x='350' y='120' width='120' height='80' rx='4'/%3E%3Crect x='500' y='120' width='120' height='80' rx='4'/%3E%3Crect x='650' y='120' width='120' height='80' rx='4'/%3E%3Crect x='800' y='120' width='120' height='80' rx='4'/%3E%3Crect x='950' y='120' width='120' height='80' rx='4'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      }} />

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Choose Your Right Plan
          </h1>
          <p className="text-white text-base mb-10 font-normal leading-relaxed">
            Select from best plans,ensuring a perfect match.Need more or less?<br />
            Customize your subscription for a seamless fit!
          </p>
          
          <div className="border-b border-gray-300 w-3xl my-4 mx-auto">
             {/* This div itself has no height, just a bottom border */}
          </div>

          {/* Toggle Switch */}
          <div className="inline-flex items-center bg-blue-600 rounded-full p-1 shadow-xl">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-16 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                !isAnnual
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'bg-blue-600 text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-12 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                isAnnual
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'bg-blue-600 text-white'
              }`}
            >
              Annual (Save 2 months)
            </button>
          </div>
        </div>

        {/* Pricing Cards Container */}
        <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative flex flex-col"
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 right-6">
                    <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2 text-base">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <circle
                          cx="10" 
                          cy="10" 
                          r="9" 
                          fill="#ede9fe"
                        />
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-[#87849D] hover:bg-[#6f6d85] text-white font-semibold py-3 mt-auto rounded-4xl transition-all duration-300 shadow-md hover:shadow-lg">
                  Get Started
                </button>
              </div>
            ))}
             
          </div>
        </div>
      </div>
    </div>
  );
}