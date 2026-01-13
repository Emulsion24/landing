"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection2 = () => {
  // REMOVED <number | null> here
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is the property buying process?",
      answer: "Understand the entire process, including legal, financial, and documentation requirements for property purchases."
    },
    {
      question: "How do I finance my property?",
      answer: "You can finance your property through various means including bank loans, mortgage lenders, or personal savings. It is best to consult with a financial advisor."
    },
    {
      question: "What are closing costs in real estate?",
      answer: "Closing costs are fees associated with the finalization of your real estate transaction, typically ranging from 2% to 5% of the loan amount."
    },
    {
      question: "What should I consider before investing?",
      answer: "Consider location, market trends, property condition, and your long-term financial goals before making an investment."
    },
    {
      question: "What are property taxes in my area?",
      answer: "Property taxes vary by location. You should check with your local municipal office or county assessor for specific rates."
    },
    {
      question: "How do I find the right agent?",
      answer: "Look for an agent with local expertise, good reviews, and a track record of successful transactions in your price range."
    }
  ];

  // REMOVED : number here
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* LEFT COLUMN: Header & Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl font-bold text-black mb-4">FAQs</h2>
            <p className="text-gray-500 text-lg">
              Answers to your real estate questions and concerns.
            </p>
          </div>

          <div className="mt-12 md:mt-0">
            <h3 className="text-xl font-bold text-black mb-2">Still have a question?</h3>
            <p className="text-gray-500 mb-6">
              dont worry we re free for consultation, just click button below.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition">
              Contact us
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Accordion List */}
        <div className="w-full md:w-2/3">
          <div className="border-t border-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                >
                  <span className="text-lg font-medium text-black group-hover:text-gray-700">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-black" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-black" />
                  )}
                </button>
                
                {/* Expandable Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection2;