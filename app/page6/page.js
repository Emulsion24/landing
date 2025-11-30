"use client"
import { useState, useEffect } from 'react';
import { 
  Sun, Zap, Shield, CheckCircle, Calculator, FileText, ArrowRight, 
  Menu, X, ChevronDown, Home, Building2, Factory, BarChart3, 
  Lightbulb, Info, Mail, Phone, Leaf, Wind, Globe, Battery, 
  TrendingUp, Award, Users, Target, ArrowUpRight, Search, Code, Smartphone,
  Gavel, ClipboardCheck, MapPin, LayoutDashboard, IndianRupee, Heart
} from 'lucide-react';

export default function RezillionLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      title: "Residential",
      icon: <Home className="w-8 h-8" />,
      subtitle: "For Homeowners",
      desc: "Turn your roof into a power plant. Zero bills, maximum comfort.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      gradient: "from-amber-500/20 to-orange-500/5",
      border: "group-hover:border-amber-500/50"
    },
    {
      title: "Commercial",
      icon: <Building2 className="w-8 h-8" />,
      subtitle: "For Businesses",
      desc: "Tax incentives and reduced opex for sustainable growth.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      gradient: "from-blue-500/20 to-indigo-500/5",
      border: "group-hover:border-blue-500/50"
    },
    {
      title: "Industrial",
      icon: <Factory className="w-8 h-8" />,
      subtitle: "For Enterprise",
      desc: "Heavy-duty infrastructure for peak load management.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      gradient: "from-emerald-500/20 to-teal-500/5",
      border: "group-hover:border-emerald-500/50"
    }
  ];

  const actionCards = [
    { 
      title: "Evaluate Site Readiness", 
      desc: "Our guided checklist verifies sunlight availability, roof structural integrity, and shading analysis before you spend a dime.",
      icon: <ClipboardCheck className="w-6 h-6 text-emerald-400" />,
      visual: (
        <div className="bg-slate-900 border border-white/10 rounded-xl p-6 w-full">
          <div className="space-y-4">
            {['Sunlight Exposure', 'Roof Condition', 'Shadow Analysis'].map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm text-slate-300">
                <span className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-500" /> {item}</span>
                <span className="text-emerald-500 text-xs font-mono bg-emerald-500/10 px-2 py-1 rounded">VERIFIED</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    { 
      title: "Smart ROI Calculator", 
      desc: "Get realistic savings estimates based on Indian tariff structures, net metering policies, and your specific location data.", 
      icon: <Calculator className="w-6 h-6 text-blue-400" />,
      visual: (
        <div className="bg-slate-900 border border-white/10 rounded-xl p-6 w-full relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20"><IndianRupee className="w-24 h-24 text-blue-500" /></div>
          <div className="relative z-10">
            <div className="text-slate-400 text-xs uppercase font-bold mb-1">Projected Savings</div>
            <div className="text-3xl font-bold text-white mb-4">₹12.5 Lakhs</div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full w-[75%] rounded-full animate-pulse"></div>
            </div>
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>Year 1</span>
              <span>Year 5</span>
              <span>Year 10</span>
            </div>
          </div>
        </div>
      )
    },
    { 
      title: "Installer-Ready Specs", 
      desc: "We auto-generate a technical project file with all necessary electrical and structural details, so installers can quote instantly.", 
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      visual: (
        <div className="bg-slate-900 border border-white/10 rounded-xl p-6 w-full flex items-center gap-4">
          <div className="bg-purple-500/20 p-3 rounded-xl"><Code className="w-6 h-6 text-purple-400" /></div>
          <div>
            <div className="font-bold text-white text-sm">Technical_Report_v2.pdf</div>
            <div className="text-slate-500 text-xs mt-1">Generated: Just now</div>
          </div>
          <div className="ml-auto bg-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg">Ready</div>
        </div>
      )
    },
    { 
      title: "Competitive Bidding", 
      desc: "Receive blind bids from top-rated, verified installers. Compare technical proposals and prices side-by-side.", 
      icon: <Gavel className="w-6 h-6 text-amber-400" />,
      visual: (
        <div className="bg-slate-900 border border-white/10 rounded-xl p-6 w-full">
          <div className="flex -space-x-4 mb-4">
            {[1,2,3].map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-amber-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-slate-900 shadow-lg">+5</div>
          </div>
          <div className="text-center text-sm text-slate-300"><span className="text-amber-400 font-bold">8 Bids</span> Received Today</div>
        </div>
      )
    }
  ];

  const stats = [
    { value: "15K+", label: "Verified Installers", icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { value: "50MW+", label: "Power Installed", icon: <Zap className="w-6 h-6 text-amber-400" /> },
    { value: "100%", label: "Satisfaction", icon: <Heart className="w-6 h-6 text-rose-400" /> },
  ];

  // Success Projects Data
  const projects = [
    { name: "Apex Tech Park", loc: "Hyderabad", capacity: "500 kW", saved: "120 Tons CO₂", type: "Industrial" },
    { name: "Green Valley Villa", loc: "Pune", capacity: "10 kW", saved: "2.4 Tons CO₂", type: "Residential" },
    { name: "Global School", loc: "Bangalore", capacity: "50 kW", saved: "12 Tons CO₂", type: "Commercial" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      
      {/* --- Pure Glassmorphic Navbar (Dark Mode) --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out ${scrollY > 20 ? 'pt-4' : 'pt-6'}`}>
        <div className={`
          flex items-center justify-between px-6 py-3 rounded-full 
          backdrop-blur-xl border shadow-2xl shadow-emerald-900/20
          transition-all duration-500 ease-in-out
          ${scrollY > 20 
            ? 'w-[85%] bg-slate-900/60 border-white/10' 
            : 'w-[95%] bg-slate-900/30 border-white/5'
          }
        `}>
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-2 rounded-full shadow-lg shadow-emerald-500/20">
              <Sun className="w-5 h-5 fill-white/20" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">Rezillion</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">
            {['Calculator', 'Process', 'Success Stories'].map((item) => (
              <a key={item} href="#" className="hover:text-emerald-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 w-0 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Login</button>
            <button className="bg-emerald-500 text-slate-950 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105 active:scale-95">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl pt-24 px-6 md:hidden animate-slide-down">
          <div className="flex flex-col gap-6 text-xl font-medium text-slate-200">
            {['Calculator', 'Process', 'Success Stories'].map((item) => (
              <a key={item} href="#" className="border-b border-slate-800 pb-4">{item}</a>
            ))}
            <button className="bg-emerald-500 text-slate-900 w-full py-4 rounded-xl font-bold mt-4 shadow-lg shadow-emerald-500/30">Start Project</button>
          </div>
        </div>
      )}

      {/* --- Centered Hero Section --- */}
      <section className="relative pt-40 pb-20 md:pb-32 px-6 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
        
        <div className="container mx-auto max-w-7xl text-center relative z-10">
          
          {/* Hero Copy */}
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Leaf className="w-3 h-3" />
              India's #1 Solar Marketplace
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Your Solar Journey, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Simplified & Secured.</span>
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              We've built the complete ecosystem for going solar. Assess feasibility, design your system, and get verified bids—without the sales calls.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 bg-emerald-500 text-slate-950 px-10 py-4 rounded-full font-bold hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all">
                Start Assessment <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 bg-white/5 text-white px-10 py-4 rounded-full font-bold border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm">
                <LayoutDashboard className="w-5 h-5" /> View Demo
              </button>
            </div>
          </div>

          {/* Hero Visual - Dashboard (Centered & Large) */}
          <div className="mt-20 relative animate-fade-in-up animation-delay-2000">
            {/* Dashboard Container - Removed margin-bottom since stats bar is now separate */}
            <div className="relative mx-auto max-w-5xl bg-slate-900/60 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-emerald-900/20 border border-white/10 p-6 md:p-10 overflow-hidden">
              
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-500/20 p-3 rounded-2xl">
                    <Globe className="w-6 h-6 text-emerald-400 animate-spin-slow" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-xl">Impact Dashboard</div>
                    <div className="text-slate-400 text-sm">Real-time Network Statistics</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/20"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/20"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Metric 1 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-emerald-500/30 transition-colors group">
                  <div className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wide">Total Capacity</div>
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">50+ MW</div>
                  <div className="text-emerald-500 text-xs flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> +12% this month</div>
                </div>
                
                {/* Metric 2 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <div className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wide">Installations</div>
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">15,420</div>
                  <div className="text-blue-500 text-xs flex items-center gap-1"><Users className="w-3 h-3" /> Across 12 Cities</div>
                </div>

                {/* Metric 3 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-amber-500/30 transition-colors group">
                  <div className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wide">CO₂ Offset</div>
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">1.2M Tons</div>
                  <div className="text-amber-500 text-xs flex items-center gap-1"><Leaf className="w-3 h-3" /> Equivalent to 50k trees</div>
                </div>
              </div>

              {/* Project List */}
              <div className="mt-8 bg-slate-950/50 rounded-2xl border border-white/5 overflow-hidden">
                <div className="px-6 py-3 bg-white/5 border-b border-white/5 text-left text-xs font-bold text-slate-400 uppercase">Recent Success Stories</div>
                <div className="divide-y divide-white/5">
                  {projects.map((proj, i) => (
                    <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${i === 0 ? 'bg-indigo-500/20 text-indigo-400' : i === 1 ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'}`}>
                          {i === 0 ? <Factory className="w-4 h-4" /> : i === 1 ? <Home className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
                        </div>
                        <div className="text-left">
                          <div className="text-white font-medium text-sm">{proj.name}</div>
                          <div className="text-slate-500 text-xs">{proj.loc}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-sm">{proj.capacity}</div>
                        <div className="text-emerald-500 text-xs">{proj.saved}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            
            {/* FIXED Floating Stats Bar - Moved below dashboard with relative positioning */}
            <div className="relative mt-12 mx-auto w-full md:w-[80%] bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/50 border border-white/10 p-6 flex flex-col md:flex-row gap-6 md:gap-0 justify-around items-center z-20 hover:scale-[1.01] transition-transform duration-300">
               {stats.map((stat, i) => (
                  <div key={i} className="text-center flex flex-col items-center gap-2 group w-full md:w-auto border-b md:border-b-0 border-white/5 pb-4 md:pb-0 last:border-0 last:pb-0">
                    <div className="p-3 rounded-full bg-white/5 border border-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-300">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{stat.value}</div>
                      <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                    </div>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- What You Can Do (Zig-Zag Storytelling) --- */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Power in Your Hands</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit designed to navigate every step of your solar journey.
            </p>
          </div>

          <div className="space-y-24">
            {actionCards.map((card, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Visual Side */}
                <div className="w-full md:w-1/2">
                  <div className="group relative bg-slate-800/50 border border-white/5 rounded-[2rem] p-8 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      {card.visual}
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center shadow-lg">
                      {card.icon}
                    </div>
                    <span className="text-5xl font-bold text-slate-800">0{i + 1}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{card.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{card.desc}</p>
                  <button className="text-emerald-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Choose Your Path (Solutions Grid) --- */}
      <section className="py-24 bg-slate-950 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Path</h2>
            <p className="text-slate-400 mt-2 text-lg">Tailored solar solutions designed for your specific property needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <div 
                key={i} 
                className={`group relative p-8 rounded-[2rem] bg-slate-900 border border-white/5 hover:border-transparent transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sol.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-slate-950 border border-white/10 ${sol.color} group-hover:scale-110 transition-transform duration-500`}>
                      {sol.icon}
                    </div>
                    <div className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950 border border-white/10 ${sol.color}`}>
                      {sol.subtitle}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">{sol.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8 group-hover:text-slate-300">{sol.desc}</p>
                  
                  <div className="flex items-center gap-2 font-bold text-sm text-white group-hover:gap-4 transition-all">
                    Explore Solutions <ArrowRight className={`w-4 h-4 ${sol.color}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Feature Grid (Bento) --- */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
            
            {/* Big Feature 1: Indian Tariff Optimized */}
            <div className="md:col-span-2 row-span-2 bg-slate-800/50 p-8 md:p-12 rounded-[2.5rem] border border-white/5 flex flex-col justify-between overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/20 transition-colors"></div>
              <div>
                <div className="bg-slate-900 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 border border-white/10">
                  <IndianRupee className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Indian Tariff Optimized</h3>
                <p className="text-slate-400 text-lg max-w-md">Our smart calculator specifically analyzes local state tariffs, electricity bills, and net metering policies to give you a realistic payback period.</p>
              </div>
              
              {/* Enhanced Visual: Bill Comparison Chart */}
              <div className="mt-8 bg-slate-900/50 rounded-2xl p-6 border border-white/5 relative">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase mb-1">Monthly Bill Analysis</div>
                    <div className="text-emerald-400 font-bold text-2xl">95% Savings</div>
                  </div>
                </div>
                
                <div className="flex items-end gap-4 h-32 w-full">
                  {/* Before Bar */}
                  <div className="flex-1 flex flex-col justify-end group/bar">
                    <div className="text-center text-xs text-slate-400 mb-2 opacity-0 group-hover/bar:opacity-100 transition-opacity">₹8,500</div>
                    <div className="w-full bg-slate-700 rounded-t-xl h-[90%] relative overflow-hidden group-hover/bar:bg-slate-600 transition-colors">
                      <div className="absolute inset-0 bg-white/5"></div>
                    </div>
                    <div className="text-center text-xs font-bold text-slate-500 mt-2">Before</div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="pb-8 text-slate-600">
                    <ArrowRight className="w-6 h-6" />
                  </div>

                  {/* After Bar */}
                  <div className="flex-1 flex flex-col justify-end group/bar">
                    <div className="text-center text-xs text-emerald-400 font-bold mb-2 opacity-0 group-hover/bar:opacity-100 transition-opacity">₹400</div>
                    <div className="w-full bg-emerald-500 rounded-t-xl h-[10%] relative overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover/bar:h-[12%] transition-all">
                      <div className="absolute inset-0 bg-white/20"></div>
                    </div>
                    <div className="text-center text-xs font-bold text-emerald-400 mt-2">After Solar</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/50 p-8 rounded-[2.5rem] border border-white/5 flex flex-col justify-center items-center text-center hover:bg-slate-800 transition-colors duration-300 group">
              <FileText className="w-10 h-10 mb-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              <h4 className="font-bold text-xl mb-2 text-white">Installer-Ready</h4>
              <p className="text-sm text-slate-400">Submit standard technical details for instant, accurate quotes.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-emerald-600 p-8 rounded-[2.5rem] shadow-lg shadow-emerald-900/50 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <Shield className="w-6 h-6" />
                <span className="font-bold">Verified</span>
              </div>
              <div className="text-3xl font-bold mb-1 relative z-10">100% Secure</div>
              <div className="text-emerald-100 text-sm relative z-10">Vetted installers only</div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-emerald-500 p-2 rounded-lg">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Rezillion</span>
              </div>
              <p className="text-slate-400 max-w-xs">Connecting homeowners with India's best solar installers for a cleaner, greener future.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div>
                <h4 className="font-bold text-white mb-4">Platform</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Browse Installers</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Post a Project</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Solar Calculator</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">For Installers</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center text-sm text-slate-500">
            <p>© 2025 Rezillion Inc.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Animations --- */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.1); }
        }
        .animate-slide-down { animation: slideDown 0.3s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }
        .animate-float-slow { animation: floatSlow 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 12s linear infinite; }
        .animate-pulse-slow { animation: pulseSlow 4s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}