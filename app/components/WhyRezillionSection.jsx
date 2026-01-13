"use client";

import React, { useEffect, useRef, useState } from "react";

const WhyRezillionSection = () => {
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    let timeouts = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleItems([]);
          const totalItems = 7; // title + 6 cards

          for (let i = 0; i < totalItems; i++) {
            const t = setTimeout(() => {
              setVisibleItems((prev) => [...prev, i]);
            }, i * 120);
            timeouts.push(t);
          }
        } else {
          setVisibleItems([]);
          timeouts.forEach(clearTimeout);
          timeouts = [];
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const isVisible = (i) => visibleItems.includes(i);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#E9EFF3] px-6 md:px-12 lg:px-20 py-20 font-sans"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

        {/* --- LEFT COLUMN --- */}
        <div className="flex flex-col gap-8">

          {/* Main Title */}
          <div
            className={`
              mb-4 lg:mb-12 transition-all duration-500 ease-out
              ${isVisible(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <h2 className="text-5xl font-archivo md:text-7xl font-bold text-black leading-tight tracking-tight">
              Why <br />
              Rezillion?
            </h2>
          </div>

          {/* Card 1 */}
          <div
            className={`
              bg-[linear-gradient(90deg,#728FE4,#162B76)] text-white p-8 rounded-3xl
              shadow-lg shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300
              ${isVisible(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <h3 className="text-2xl font-archivo font-medium mb-4">
              Real-Time Project Tracking
            </h3>
            <p className="text-blue-50 font-archivo text-base leading-relaxed opacity-90">
              Stay Updated With Live Project Status — From Site Visit To Final Handover, Every Milestone Is Trackable In Real-Time.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`
              bg-white text-black p-8 rounded-3xl shadow-sm
              hover:-translate-y-1 transition-all duration-300
              ${isVisible(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <h3 className="text-2xl font-archivo font-medium mb-4">
              Smart Bidding System
            </h3>
            <p className="text-gray-500 font-archivo text-base leading-relaxed">
             Receive multiple verified installer quotations and compare prices, timelines, and credentials — all in one dashboard.


            </p>
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="flex flex-col gap-6 lg:gap-8">

          {/* Card 3 */}
          <div
            className={`
              bg-[linear-gradient(90deg,#728FE4,#162B76)] text-white p-8 rounded-3xl
              shadow-lg shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300
              ${isVisible(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <h3 className="text-2xl font-archivo font-medium mb-4">
              Powerful Installer Scoring
            </h3>
            <p className="text-blue-50 font-archivo text-base leading-relaxed opacity-90">
              Choose Trusted Professionals With Our Rezillion Score, Calculated From Real Project Performance, Customer Feedback, And Reliability.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className={`
              bg-white text-black p-8 rounded-3xl shadow-sm
              hover:-translate-y-1 transition-all duration-300
              ${isVisible(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <h3 className="text-2xl font-archivo font-medium mb-4">
              Engineering Drawing Hub
            </h3>
            <p className="text-gray-500 font-archivo text-base leading-relaxed">
              Access Complete Project Documentation Including Engineering Drawings, Permits, And Technical Specs — All Centralized.
            </p>
          </div>

          {/* Card 5 */}
          <div
            className={`
              bg-[linear-gradient(90deg,#728FE4,#162B76)] text-white p-8 rounded-3xl
              shadow-lg shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300
              ${isVisible(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <h3 className="text-2xl font-archivo font-medium mb-4">
              Verified Digital Contracts
            </h3>
            <p className="text-blue-50 font-archivo text-base leading-relaxed opacity-90">
              Projects On Rezillion Use Verified Digital Agreements Between Customers And Installers, Helping Everyone Stay Aligned From Start To Finish.
            </p>
          </div>

          {/* Card 6 */}
          <div
            className={`
              bg-white text-black p-8 rounded-3xl shadow-sm
              hover:-translate-y-1 transition-all duration-300
              ${isVisible(6) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <h3 className="text-2xl font-archivo font-medium mb-4">
              End To End Management
            </h3>
            <p className="text-gray-500 font-archivo text-base leading-relaxed">
              Manage Your Entire Solar Journey From One Platform — Coordinate Tasks, Track Progress, And Communicate Seamlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Rule */}
      <div className="max-w-7xl mx-auto mt-20 border-t border-gray-300" />
    </section>
  );
};

export default WhyRezillionSection;
