"use client"; // This directive is crucial for interactivity

import { useRouter } from 'next/navigation';

export default function FloatingMenu() {
  const router = useRouter();

  const floatingMenuLinks = [
         { name: "Sample 1", path: "/" },
    { name: "Sample 2", path: "/page2" },

    { name: "Sample 3", path: "/page3" },
    { name: "Sample 4", path: "/page5" },
    { name: "Sample 5", path: "/page4" },
    { name: "Sample 6", path: "/page6" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-2xl">
      <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-2 rounded-full shadow-2xl shadow-emerald-900/10 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
        {floatingMenuLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => router.push(link.path)}
            className="flex-1 whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            {link.name}
          </button>
        ))}
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}