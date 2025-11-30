"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Sun,
  Home,
  Building2,
  Factory,
  BarChart3,
  Lightbulb,
  Shield,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  Calculator,
  ChevronDown,
  Zap,
  Leaf,
  FileText,
  Users,
  ClipboardCheck,
  Download,
  Star,
  TrendingUp,
  Clock,
  Award
} from "lucide-react";

/**
 * ANIMATION WRAPPER
 */
const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * NUMBER COUNTER ANIMATION
 */
const CountUp = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const countRef = useRef(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let startTime;
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const percentage = Math.min(progress / duration, 1);
          
          setCount(Math.floor(end * percentage));
          
          if (progress < duration) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

export default function RezillionLandingV6() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [billAmount, setBillAmount] = useState(200);
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (!mounted) return null;

  // --- DATA ---
  const workflowSteps = [
    { 
      id: "01", 
      title: "Evaluate Site Readiness", 
      desc: "Our guided checklist verifies sunlight availability, roof structural integrity, and shading analysis before you spend a dime.", 
      icon: <ClipboardCheck className="w-5 h-5" />,
      type: "checklist",
      items: ["Sunlight Exposure", "Roof Condition", "Shadow Analysis"]
    },
    { 
      id: "02", 
      title: "Smart ROI Calculator", 
      desc: "Get realistic savings estimates based on Indian tariff structures, net metering policies, and your specific location data.", 
      icon: <Calculator className="w-5 h-5" />,
      type: "stat",
      label: "Payback Period",
      value: "3.2 Years"
    },
    { 
      id: "03", 
      title: "Installer-Ready Specs", 
      desc: "We auto-generate a technical project file with all necessary electrical and structural details, so installers can quote instantly.", 
      icon: <FileText className="w-5 h-5" />,
      type: "file",
      filename: "Project_Specs.pdf",
      tag: "Auto-generated"
    },
    { 
      id: "04", 
      title: "Competitive Bidding", 
      desc: "Receive blind bids from top-rated, verified installers. Compare technical proposals and prices side-by-side.", 
      icon: <Users className="w-5 h-5" />,
      type: "bids",
      activeBidder: "ABC Solar",
      count: "+5 Bids"
    }
  ];

  const stats = [
    { label: "Active Installations", value: 1250, suffix: "+" },
    { label: "Megawatts Installed", value: 45, suffix: "MW" },
    { label: "User Savings", value: 12, suffix: "M" },
    { label: "Carbon Offset", value: 8500, suffix: " Tons" },
  ];

  const testimonials = [
    { name: "Sarah Jenkins", role: "Homeowner", quote: "The blind bidding process saved me $4,000 compared to the direct quotes I got. The transparency is a game changer.", stars: 5 },
    { name: "Marcus Chen", role: "Small Business Owner", quote: "I didn't have time to learn about inverters and panels. Rezillion generated the specs and I just picked the best price.", stars: 5 },
    { name: "Elena Rodriguez", role: "Industrial Manager", quote: "The ROI calculator was dead accurate. We hit our payback period exactly when predicted.", stars: 5 },
  ];

  const faqs = [
    { q: "How does the blind bidding process work?", a: "Installers see your technical specs but not your contact info initially. They submit their best price to win your business, ensuring you get the true market rate." },
    { q: "Is the site evaluation done physically?", a: "We start with a satellite-based analysis. If the data looks promising, we coordinate a physical verification with a local certified partner." },
    { q: "Do you cover commercial projects?", a: "Yes. Our platform handles everything from residential rooftops to multi-megawatt industrial installations." },
  ];

  // Calculator Logic
  const yearlySavings = Math.round(billAmount * 12 * 0.35); 
  const lifetimeSavings = Math.round(billAmount * 12 * 25 * 0.8); 

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-sky-200">
      
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="container mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative flex items-center justify-center w-10 h-10 bg-slate-900 rounded-xl text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <Sun className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Rezillion</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            {["Workflow", "Impact", "Reviews", "Calculator"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-sky-600 transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-600 text-white text-sm font-bold hover:bg-sky-500 transition-colors shadow-lg shadow-sky-600/20">
              Get Proposal <ArrowRight className="w-4 h-4" />
            </button>
            <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-white border-b border-slate-100 transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-4 py-6 flex flex-col gap-4 text-center">
            {["Workflow", "Impact", "Reviews", "Calculator"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="text-lg font-medium text-slate-700">
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-24 pb-36 overflow-hidden bg-slate-900">
          
          {/* Hero Background Image - Increased Opacity */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop" 
               alt="Solar Roof" 
               className="w-full h-full object-cover opacity-60"
             />
             {/* Gradient overlay to ensure text readability */}
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          </div>

          <div className="container mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
            <RevealOnScroll className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Active in 12 States
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1]">
                Consolidated <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 animate-gradient-x">
                  Solar Workflow.
                </span>
              </h1>
              
              <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
                We've consolidated the fragmented solar installation process into a single, intelligent workflow. From analysis to bidding.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button className="group relative px-8 py-4 bg-sky-600 text-white rounded-full font-bold overflow-hidden shadow-xl shadow-sky-900/50 hover:bg-sky-500 transition-all">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  <span className="flex items-center gap-2">
                    Start Evaluation <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-colors">
                  Watch Demo
                </button>
              </div>
            </RevealOnScroll>

            {/* Right Side Visuals */}
            <RevealOnScroll delay={200} className="relative hidden lg:block">
               <div className="relative z-10">
                  {/* Glass Card 1 */}
                  <div className="absolute top-0 right-12 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl w-64 animate-float-slow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><TrendingUp size={20}/></div>
                      <div className="text-white font-bold">ROI Optimized</div>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-green-500"></div>
                    </div>
                    <div className="text-xs text-slate-400 mt-2 text-right">Target reached</div>
                  </div>

                  {/* Glass Card 2 */}
                  <div className="absolute top-40 right-0 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl w-72 animate-float-delayed shadow-2xl">
                     <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-bold uppercase text-slate-400">Status</span>
                        <span className="px-2 py-1 bg-sky-500/20 text-sky-400 text-xs font-bold rounded-full border border-sky-500/30">Ready for Bids</span>
                    </div>
                    <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold">85%</div>
                         <div className="text-sm text-slate-300">Project specifications generated successfully.</div>
                    </div>
                  </div>
               </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* --- PARTNERS SECTION (New) --- */}
        <div className="border-b border-slate-100 bg-white">
          <div className="container mx-auto max-w-7xl px-4 py-8">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Trusted by leading energy partners</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos */}
               {['Enphase', 'Tesla', 'SunPower', 'LG Energy', 'Canadian Solar'].map(brand => (
                 <span key={brand} className="text-xl font-bold text-slate-700">{brand}</span>
               ))}
            </div>
          </div>
        </div>

        {/* --- WORKFLOW SECTION --- */}
        <section id="workflow" className="py-24 bg-slate-50 relative">
          <div className="container mx-auto max-w-6xl px-4 grid lg:grid-cols-12 gap-16">
            
            {/* Sticky Left Content */}
            <div className="lg:col-span-5 sticky top-32 h-fit">
              <div className="inline-flex items-center gap-2 mb-4 text-sky-600 font-bold">
                 <div className="h-px w-8 bg-sky-600"></div>
                 THE PROCESS
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">What you can <br/> do here.</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Stop guessing. Use our intelligent workflow to generate verified project data that installers trust.
              </p>
              
              <div className="hidden lg:block bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                 <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-amber-500 fill-current" />
                    <span className="font-bold text-slate-900">Why this matters</span>
                 </div>
                 <p className="text-sm text-slate-600">Traditional quotes vary by 30-40%. Our standardized specs force installers to bid apples-to-apples.</p>
              </div>
            </div>

            {/* Right Side - Detailed Workflow Steps */}
            <div className="lg:col-span-7 space-y-8 relative">
              <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-slate-200 -z-10" />
              
              {workflowSteps.map((step, idx) => (
                <RevealOnScroll key={step.id} delay={idx * 100} className="group flex gap-6">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full bg-white border-4 border-slate-100 shadow-lg flex items-center justify-center text-slate-400 font-bold group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-200 transition-all duration-300">
                      {step.id}
                    </div>
                  </div>
                  
                  <div className="flex-1 pt-2">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-100 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-sky-50 text-sky-700 rounded-lg">
                          {step.icon}
                        </div>
                        <h3 className="font-bold text-xl text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-6">{step.desc}</p>

                      {/* --- CUSTOM CARD INTERNALS --- */}
                      {step.type === 'checklist' && (
                        <div className="flex flex-wrap gap-2">
                            {step.items.map(item => (
                                <div key={item} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-700 font-medium">
                                    <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                                    {item}
                                </div>
                            ))}
                        </div>
                      )}
                      {step.type === 'stat' && (
                        <div className="inline-flex items-center gap-4 p-4 bg-slate-900 text-white rounded-xl shadow-lg">
                            <div className="text-xs font-bold opacity-70 uppercase tracking-wider">{step.label}</div>
                            <div className="h-8 w-px bg-white/20"></div>
                            <div className="text-2xl font-bold text-sky-400">{step.value}</div>
                        </div>
                      )}
                      {step.type === 'file' && (
                        <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl max-w-xs cursor-pointer hover:bg-sky-50 hover:border-sky-200 transition-colors">
                            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center shrink-0">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <div className="text-sm font-bold truncate text-slate-800">{step.filename}</div>
                                <div className="text-xs text-slate-500 font-medium">{step.tag}</div>
                            </div>
                            <Download className="w-4 h-4 text-slate-400" />
                        </div>
                      )}
                      {step.type === 'bids' && (
                        <div className="flex items-center gap-4">
                           <div className="flex -space-x-3">
                              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">A</div>
                              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-600">B</div>
                              <div className="w-10 h-10 rounded-full border-2 border-white bg-sky-100 flex items-center justify-center text-xs font-bold text-sky-700">+3</div>
                          </div>
                          <div className="text-sm font-bold text-slate-700">Lowest Bid: <span className="text-green-600">$18,400</span></div>
                        </div>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* --- IMPACT DASHBOARD (New) --- */}
        <section id="impact" className="py-20 bg-slate-900 text-white">
           <div className="container mx-auto max-w-7xl px-4">
              <RevealOnScroll className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                 {stats.map((stat, i) => (
                    <div key={i} className="p-4">
                       <div className="text-4xl md:text-5xl font-bold text-sky-400 mb-2 font-mono">
                          <CountUp end={stat.value} suffix={stat.suffix} />
                       </div>
                       <div className="text-sm text-slate-400 font-medium uppercase tracking-widest">{stat.label}</div>
                    </div>
                 ))}
              </RevealOnScroll>
           </div>
        </section>

        {/* --- COMPARISON BENTO GRID (New) --- */}
        <section className="py-24 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <RevealOnScroll className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Rezillion?</h2>
               <p className="text-slate-600 text-lg">The old way of buying solar is broken. We fixed it.</p>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
               <RevealOnScroll delay={0} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6"><Award className="w-6 h-6"/></div>
                  <h3 className="text-xl font-bold mb-3">Price Match Guarantee</h3>
                  <p className="text-slate-600">If you find a lower price for the exact same equipment specs, we'll refund the difference plus $500.</p>
               </RevealOnScroll>
               <RevealOnScroll delay={100} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6"><Clock className="w-6 h-6"/></div>
                  <h3 className="text-xl font-bold mb-3">2x Faster Installation</h3>
                  <p className="text-slate-600">By generating permits and engineering plans automatically, we cut the average project timeline from 90 days to 45.</p>
               </RevealOnScroll>
               <RevealOnScroll delay={200} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6"><Shield className="w-6 h-6"/></div>
                  <h3 className="text-xl font-bold mb-3">Escrow Payment Protection</h3>
                  <p className="text-slate-600">Your money is held in a secure third-party escrow and only released to the installer when milestones are met.</p>
               </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS (New) --- */}
        <section id="reviews" className="py-24 bg-slate-50 overflow-hidden">
           <div className="container mx-auto max-w-7xl px-4">
              <h2 className="text-3xl font-bold text-center mb-16">Real stories from real rooftops.</h2>
              <div className="grid md:grid-cols-3 gap-6">
                 {testimonials.map((t, i) => (
                    <RevealOnScroll key={i} delay={i * 100} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                       <div className="flex gap-1 mb-4">
                          {[...Array(t.stars)].map((_, si) => <Star key={si} className="w-4 h-4 text-amber-400 fill-current"/>)}
                       </div>
                       <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">{t.name[0]}</div>
                          <div>
                             <div className="text-sm font-bold text-slate-900">{t.name}</div>
                             <div className="text-xs text-slate-500">{t.role}</div>
                          </div>
                       </div>
                    </RevealOnScroll>
                 ))}
              </div>
           </div>
        </section>

        {/* --- CALCULATOR --- */}
        <section id="calculator" className="py-24 bg-white">
          <div className="container mx-auto max-w-5xl px-4">
            <RevealOnScroll className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"/>
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Calculator className="text-sky-400" />
                            <span className="font-bold tracking-widest uppercase text-sm text-slate-400">Savings Estimator</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Calculate your <br/><span className="text-sky-400">potential.</span></h2>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                             <div className="flex justify-between mb-4">
                                <span className="text-sm font-medium">Monthly Bill</span>
                                <span className="text-2xl font-bold text-sky-400">${billAmount}</span>
                             </div>
                             <input 
                                type="range" 
                                min="100" 
                                max="800" 
                                step="10" 
                                value={billAmount} 
                                onChange={(e) => setBillAmount(Number(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
                             />
                        </div>
                    </div>
                    <div className="space-y-4">
                         <div className="bg-white text-slate-900 p-6 rounded-2xl flex items-center justify-between">
                            <div>
                                <div className="text-sm text-slate-500 font-medium uppercase">Estimated Annual Savings</div>
                                <div className="text-3xl font-bold">${yearlySavings.toLocaleString()}</div>
                            </div>
                            <div className="p-3 bg-green-100 text-green-700 rounded-full"><CheckCircle size={20}/></div>
                         </div>
                         <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between">
                            <div>
                                <div className="text-sm text-slate-400 font-medium uppercase">25-Year Lifetime Savings</div>
                                <div className="text-3xl font-bold text-white">${lifetimeSavings.toLocaleString()}</div>
                            </div>
                            <div className="p-3 bg-sky-500/20 text-sky-400 rounded-full"><BarChart3 size={20}/></div>
                         </div>
                         <button className="w-full py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-colors">Get Full Report</button>
                    </div>
                </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section id="faq" className="py-24 bg-slate-50">
            <div className="container mx-auto max-w-3xl px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <RevealOnScroll key={idx} delay={idx * 50}>
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                <button 
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                                >
                                    {faq.q}
                                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white"><Sun className="w-5 h-5"/></div>
                            <span className="text-2xl font-bold text-white">Rezillion</span>
                        </div>
                        <p className="max-w-sm mb-6">The modern operating system for solar installation. We connect homeowners with verified installers through a transparent, data-driven platform.</p>
                        <div className="flex gap-4">
                          {/* Social placeholders */}
                          <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-sky-600 transition-colors cursor-pointer"></div>
                          <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-sky-600 transition-colors cursor-pointer"></div>
                          <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-sky-600 transition-colors cursor-pointer"></div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">Platform</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-sky-400">How it Works</a></li>
                            <li><a href="#" className="hover:text-sky-400">Pricing</a></li>
                            <li><a href="#" className="hover:text-sky-400">Installers</a></li>
                            <li><a href="#" className="hover:text-sky-400">Success Stories</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-sky-400">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-sky-400">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-sky-400">Escrow Agreement</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 text-center text-sm text-slate-500">
                    &copy; 2025 Rezillion Energy. All rights reserved.
                </div>
            </div>
        </footer>
      </main>

      {/* --- CUSTOM ANIMATIONS --- */}
      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
      `}</style>
    </div>
  );
}