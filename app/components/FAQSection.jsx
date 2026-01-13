"use client";

import React, { useState } from "react";
import { ArrowDown, MoreHorizontal } from "lucide-react";

const faqData = [
  {
    question: "What is Rezillion?",
    answer: "Rezillion is a renewable energy platform that connects customers with verified local solar installers, enabling transparent and reliable adoption of clean energy.",
  },
  {
    question: "How does Rezillion help me choose the right installer?",
    answer: "Rezillion uses an installer scoring system to help customers make informed decisions based on verified quality indicators, experience, and performance.",
  },
  {
    question: "What factors are used in installer scoring?",
    answerType: "list",
    answer: [
      "Customer reviews and ratings",
      "Rezillion’s internal project and quality reviews",
      "Completeness and accuracy of the installer’s profile",
      "Number of successfully completed projects",
      "Installer experience in the solar sector",
    ],
  },
  {
    question: "Does a higher score mean Rezillion guarantees the installer?",
    answer: "No. The score is an informational indicator, not a guarantee. Customers should independently evaluate proposals and terms.",
  },
  {
    question: "Can I see installer reviews?",
    answer: "Yes. Customers can view verified customer feedback and publicly available installer profile information.",
  },
  {
    question: "Does Rezillion influence pricing based on scores?",
    answer: "No. Installer scores do not affect pricing. Commercial terms are decided directly between customers and installers.",
  },
  {
    question: "What is the post-installation checklist?",
    answer: "It records system details, safety features, site conditions, and photographs to improve long-term transparency.",
  },
  {
    question: "Is Rezillion responsible for installer performance?",
    answer: "No. Rezillion facilitates the process but is not responsible for installation execution or performance.",
  },
];

const FAQSection = () => {
  const [faqOpen, setFaqOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[linear-gradient(180deg,#728FE4,#162B76)] px-4 py-12 font-sans overflow-hidden transition-all duration-500">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* COMPACT HEADER */}
        <h2 className="text-3xl font-archivo font-bold text-black tracking-tight">
          Frequently Asked Questions
        </h2>

        {/* TOGGLE BUTTON - Smaller and tighter */}
        <div
          onClick={() => setFaqOpen(!faqOpen)}
          className="mt-4 flex justify-center cursor-pointer"
        >
          <div className={`w-10 h-10 rounded-full border border-white/40 bg-white/10 backdrop-blur flex items-center justify-center transition-transform duration-300 ${faqOpen ? "rotate-180" : ""}`}>
            <ArrowDown className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* FAQ LIST - Compressed Grid */}
        <div
          className={`
            transition-all duration-500 ease-in-out
            ${faqOpen ? "mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
          `}
          style={{ display: faqOpen ? 'grid' : 'none' }} // This prevents extra height when closed
        >
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggleQuestion(index)}
                className={`
                  relative cursor-pointer rounded-xl bg-white/20 backdrop-blur-sm px-4 py-3
                  transition-all duration-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]
                  ${isOpen ? "shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-white/30" : "hover:bg-white/25"}
                `}
              >
                <div className="absolute top-2 right-3 opacity-40">
                  <MoreHorizontal className="w-4 h-4 text-white" />
                </div>

                {/* QUESTION - Smaller font */}
                <div className="flex items-center justify-between gap-3 pr-6">
                  <h3 className="text-sm md:text-base font-archivo font-semibold text-black text-left leading-tight">
                    {item.question}
                  </h3>
                  <div className={`w-7 h-7 rounded-full border border-white/50 bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ArrowDown className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* ANSWER - Tightened line height */}
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="text-white/90 text-xs md:text-sm font-archivo text-left leading-snug border-t border-white/10 pt-2">
                    {item.answerType === "list" ? (
                      <ul className="list-disc pl-4 space-y-1">
                        {item.answer.map((point, i) => <li key={i}>{point}</li>)}
                      </ul>
                    ) : (
                      <p>{item.answer}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;