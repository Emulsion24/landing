"use client";   
import React from 'react';
import { ArrowUpRight, Workflow, Users, Clock, FileText } from 'lucide-react';
import Header from '../components/Header';

const RezillionLandingPage = () => {
  const features = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Continuous",
      subtitle: "Project Flow"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Smart",
      subtitle: "Project Manager"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-Time",
      subtitle: "Progress Monitoring"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Centralized",
      subtitle: "Document Workspace"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;500;600;700;800;900&display=swap');
        .space-grotesk {
          font-family: 'Space Grotesk', sans-serif;
        }
        .darker-grotesque {
          font-family: 'Darker Grotesque', sans-serif;
        }
      `}</style>
      <Header />
      {/* Hero Section */}
      <section className="bg-[#5187FF] text-white px-8 py-16 md:px-16 md:py-24 rounded-b-[60px]">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h1 className="space-grotesk text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Local Solar<br />Installers Across India
          </h1>
          
          {/* Subheading */}
          <p className="space-grotesk text-lg md:text-xl mb-8 max-w-4xl opacity-90">
            We believe our installer network provides immense value to communities by creating local jobs,
            reducing emissions, and lowering energy costs. We celebrate these unsung climate heroes.
          </p>
          
          {/* Register Button */}
          <button className="bg-[#5846FB] hover:bg-purple-700 space-grotesk text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 mb-16 transition-all duration-300 shadow-lg hover:shadow-xl">
            Register Now
            <ArrowUpRight className="w-5 h-5" />
          </button>
          
          {/* Commitment Text */}
          <p className="text-lg space-grotesk md:text-xl mb-8 opacity-90">
            At Rezillion, we are committed to empowering local solar installers by:
          </p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-full px-6 py-5 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-yellow-400 flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="space-grotesk">
                  <div className=" text-base">{feature.title}</div>
                  <div className="text-sm opacity-90">{feature.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Rezillion Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-full mx-auto">
          {/* Section Title */}
          <div className="bg-[#5187FF] text-white text-center py-8 rounded-t-3xl mb-0">
            <h2 className="darker-grotesque text-4xl md:text-5xl font-semibold">Why Join Rezillion</h2>
          </div>

          {/* Feature 1 - Light background */}
          <div className="bg-gray-50 px-8 md:px-12 py-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="border-4 border-blue-400 rounded-3xl bg-gray-200 h-48 md:h-56"></div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="darker-grotesque text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Continuous Work Opportunities
              </h3>
              <p className="darker-grotesque text-gray-700 text-lg leading-relaxed">
                Gain consistent flow of Green Energy Projects from Homeowners and Businesses.
              </p>
            </div>
          </div>

          {/* Feature 2 - Blue background */}
          <div className="bg-[#5187FF] px-8 md:px-12 py-12 flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="border-4 border-white rounded-3xl bg-gray-300 h-48 md:h-56"></div>
            </div>
            <div className="w-full md:w-2/3 text-white">
              <h3 className="darker-grotesque text-2xl md:text-3xl font-semibold mb-4">
                Community & Learning
              </h3>
              <p className="darker-grotesque text-lg leading-relaxed opacity-95">
                Access educational resources, sustainability tips, and the latest green technology trends.
              </p>
            </div>
          </div>

          {/* Feature 3 - Light background */}
          <div className="bg-gray-50 px-8 md:px-12 py-12 flex flex-col md:flex-row items-center gap-8 rounded-b-3xl">
            <div className="w-full md:w-1/3">
              <div className="border-4 border-blue-400 rounded-3xl bg-gray-200 h-48 md:h-56"></div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="darker-grotesque text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Verified Network Recognition
              </h3>
              <p className="darker-grotesque text-gray-700 text-lg leading-relaxed">
                Become part of India's trusted network of Energy Transition Professionals contributing to a Cleaner Future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RezillionLandingPage;