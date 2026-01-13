"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ClipboardCheck,
  Calculator,
  Scale,
  Workflow,
  DraftingCompass,
  ClipboardList,
} from "lucide-react";

const featuresData = [
  {
    title: "Pre-Installation Checklist",
    icon: ClipboardCheck,
    points: [
      "Site, structure, and electrical readiness assessment",
      "Safety, access, and regulatory checks for renewable energy installation",
      "Baseline system data captured before execution",
    ],
  },
  {
    title: "Rezillion Solar Energy Calculator",
    icon: Calculator,
    points: [
      "Estimates PV system size, generation, and savings",
      "Shows the climate impact based on the system size and geo-location",
      "Solar add-on needed for offsetting future electricity needs (EV, etc.)",
    ],
  },
  {
    title: "Competitive Bidding",
    icon: Scale,
    points: [
      "Transparent comparison of installer proposals",
      "Encourages fair price discovery and quality solutions",
      "Empowers informed customer selection",
    ],
  },
  {
    title: "Intelligent Project Management",
    icon: Workflow,
    points: [
      "Tracks project progress and milestones",
      "Centralized communication and documentation",
      "Reduces delays and execution gaps",
    ],
  },
  {
    title: "Engineering Drawing Hub",
    icon: DraftingCompass,
    points: [
      "Stores engineering drawings, designs, and documents",
      "Preserves a permanent technical record of the PV system",
      "Supports future maintenance, upgrades, and modifications",
    ],
  },
  {
    title: "Post Installation Checklist",
    icon: ClipboardList,
    points: [
      "Verifies safety and electrical components",
      "Records as-built system and site details",
      "Creates a long-term digital system record",
    ],
  },
];

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    let timeouts = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleItems([]);
          featuresData.forEach((_, i) => {
            const timeout = setTimeout(() => {
              setVisibleItems((prev) => [...prev, i]);
            }, i * 120);
            timeouts.push(timeout);
          });
        } else {
          setVisibleItems([]);
          timeouts.forEach(clearTimeout);
          timeouts = [];
        }
      },
      { threshold: 0.3 }
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
      className="w-full bg-[#E9EFF3] py-20 px-6 md:px-12 lg:px-20 font-sans"
    >
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-archivo font-bold tracking-tight">
          Rezillion Platform Features
        </h2>
      </div>

      {/* Features List */}
      <div className="max-w-full mx-auto flex flex-col gap-5">
        {featuresData.map((feature, index) => {
          const isActive = activeIndex === index;
          const isVisible = visibleItems.includes(index);

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                group cursor-pointer w-full rounded-2xl p-6 md:p-8
                flex flex-col md:flex-row items-start md:items-center
                gap-6 md:gap-12
                transition-all duration-500 ease-out transform
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                ${
                  isActive
                    ? "bg-[#5E7CE2] text-white shadow-lg shadow-blue-900/10"
                    : "bg-[#EFF4F6] text-black hover:bg-[#5E7CE2] hover:text-white"
                }
              `}
            >
              {/* Icon Group */}
              <div className="flex-shrink-0 flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <feature.icon
                    className={`w-7 h-7 ${
                      isActive
                        ? "text-[#5E7CE2]"
                        : "text-black group-hover:text-[#5E7CE2]"
                    }`}
                    strokeWidth={1.5}
                  />
                </div>

                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center border
                    ${
                      isActive
                        ? "border-white/30 bg-white/10"
                        : "border-gray-300 bg-transparent group-hover:border-white/30"
                    }
                  `}
                >
                  <ArrowDownRight className="w-5 h-5" />
                </div>
              </div>

              {/* ✅ FIXED CONTENT (1376px breakpoint) */}
              <div className="flex-grow flex flex-col min-[1376px]:flex-row min-[1376px]:items-center w-full">
                
                {/* Title */}
                <h3
                  className="
                    text-2xl font-archivo md:text-3xl font-medium tracking-tight
                    whitespace-nowrap
                    min-[1376px]:max-w-[35%]
                  "
                >
                  {feature.title}
                </h3>

                {/* Spacer */}
                <div className="hidden min-[1376px]:block flex-1" />

                {/* Points */}
                <ul className="min-[1376px]:max-w-[55%] w-full space-y-1 mr-6">
                  {feature.points.map((point, idx) => (
                    <li
                      key={idx}
                      className={`text-sm md:text-base flex items-start leading-snug ${
                        isActive
                          ? "text-blue-50"
                          : "text-gray-500 group-hover:text-blue-50"
                      }`}
                    >
                      <span className="mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
