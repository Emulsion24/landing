"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    category: "Food Safety",
    title: "PVC film for food wrap",
    description: "Ensure safety by using plastics that are safe for human consumption. Prevent water evaporation for vegetables, fruits, and maintain freshness longer.",
    image: "https://images.unsplash.com/photo-1623366302587-bca262580798?q=80&w=1000&auto=format&fit=crop",
    bg: "bg-[#e5f0db]",
    accent: "bg-[#d4e4c3]"
  },
  {
    id: 2,
    category: "Industrial",
    title: "PVC film for Industrial used",
    description: "High-grade industrial wrapping solutions designed for durability, heat resistance, and heavy-duty protection in manufacturing logistics.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    bg: "bg-[#e5f0db]",
    accent: "bg-[#d4e4c3]"
  },
  {
    id: 3,
    category: "Electronics",
    title: "Capacitor film (electric)",
    description: "Precision-engineered dielectric films for capacitors, ensuring high insulation resistance and stability in electronic components.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1000&auto=format&fit=crop",
    bg: "bg-[#e5f0db]",
    accent: "bg-[#d4e4c3]"
  },
  {
    id: 4,
    category: "Sustainability",
    title: "Biodegradable Eco-Film",
    description: "Next-generation plant-based wrapping solutions that decompose naturally, offering premium protection with zero environmental footprint.",
    image: "https://images.unsplash.com/photo-1530607376647-cdb0484e9a93?q=80&w=1000&auto=format&fit=crop",
    bg: "bg-[#e5f0db]",
    accent: "bg-[#d4e4c3]"
  }
];

export default function ProductShowcase() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="min-h-screen bg-tr p-4 md:p-10 flex flex-col justify-center font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto w-full mb-8 flex flex-col md:flex-row justify-between items-end gap-4">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h4 className="text-gray-500 font-bold tracking-widest text-xs uppercase mb-2">Our Product</h4>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[0.9]">
            GOOD PRODUCT <br />
            FOR <span className="text-green-600">THE BLUE PLANET</span>
          </h1>
        </motion.div>
        
        <button className="hidden md:flex items-center gap-2 border-b-2 border-gray-900 pb-1 hover:text-green-600 hover:border-green-600 transition-colors group">
          <span className="font-bold text-sm">READ MORE</span>
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto w-full h-[600px] md:h-[500px] flex flex-col md:flex-row gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            active={activeId === product.id}
            onHover={() => setActiveId(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ product, active, onHover }) {
  return (
    <motion.div
      layout
      onMouseEnter={onHover}
      onClick={onHover}
      className={`relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden cursor-pointer ${product.bg} flex-shrink-0 md:flex-shrink`}
      animate={{ flex: active ? 4 : 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      <div className="h-full p-6 md:p-10 flex flex-col relative z-10">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
          <div className="flex-1">
            <motion.h3 layout="position" className={`font-bold text-xl md:text-3xl text-gray-900 leading-tight mb-4 transition-all duration-300 ${!active ? "opacity-70 line-clamp-1 md:line-clamp-2" : "opacity-100"}`}>
              {product.title}
            </motion.h3>
            <AnimatePresence>
              {active && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.2 }}>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm">{product.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {active && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="hidden lg:block w-48 h-48 xl:w-56 xl:h-56 shrink-0 rounded-[2rem] overflow-hidden shadow-xl">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="mt-auto flex justify-between items-end">
          <span className={`font-bold text-lg ${active ? "text-gray-900" : "text-gray-400"}`}>0{product.id}</span>
          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-md transition-transform duration-500 ${active ? 'rotate-0' : '-rotate-45 opacity-50'}`}>
            <ArrowRight size={24} className="text-gray-800" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}