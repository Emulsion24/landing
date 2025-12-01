"use client"
import { useState, useEffect } from 'react';
import { 
  Sun, Zap, Shield, CheckCircle, Calculator, FileText, ArrowRight, 
  Menu, X, ChevronDown, Home, Building2, Factory, BarChart3, 
  Lightbulb, Info, Mail, Phone, Leaf, Wind, Globe, Battery, 
  TrendingUp, Award, Users, Target, ArrowUpRight, Search, Code,
  Navigation
} from 'lucide-react';

export default function RezillionLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Configuration for the New Floating Menu ---
  const floatingMenuLinks = [
    { name: "Sample 2", path: "/page2" },
   
    { name: "Sample 3", path: "/page3" },
    { name: "Sample 4", path: "/page4" },
    { name: "Sample 5", path: "/page5" },
    { name: "Sample 6", path: "/page6" },
  ];


  
  // -----------------------------------------------

  const solutionTabs = [
    {
      title: "Residential",
      icon: <Home className="w-5 h-5" />,
      description: "Transform your home into a sustainable powerhouse.",
      details: "Custom solar solutions designed specifically for residential properties, maximizing roof space and aesthetic integration.",
      image: "from-orange-100 to-amber-50",
      accent: "text-amber-600",
      benefits: ["Lower Energy Bills", "Increase Home Value", "Energy Independence"]
    },
    {
      title: "Commercial",
      icon: <Building2 className="w-5 h-5" />,
      description: "Reduce operational costs & meet sustainability goals.",
      details: "Scalable commercial installations that provide meaningful ROI and tax incentives for businesses of all sizes.",
      image: "from-blue-100 to-indigo-50",
      accent: "text-blue-600",
      benefits: ["Tax Incentives", "Brand Reputation", "Cost Reduction"]
    },
    {
      title: "Industrial",
      icon: <Factory className="w-5 h-5" />,
      description: "Power large-scale operations with high-capacity systems.",
      details: "Heavy-duty infrastructure designed for maximum efficiency and peak demand management in industrial sectors.",
      image: "from-emerald-100 to-teal-50",
      accent: "text-emerald-600",
      benefits: ["Peak Management", "Long-term Savings", "Carbon Neutrality"]
    }
  ];

  const processSteps = [
    { 
      number: "01", 
      title: "Assessment", 
      desc: "We evaluate sunlight exposure & roof condition.", 
      icon: <Target className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-500"
    },
    { 
      number: "02", 
      title: "Design", 
      desc: "Engineers create a custom efficiency plan.", 
      icon: <Lightbulb className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      number: "03", 
      title: "Install", 
      desc: "Certified experts handle the entire setup.", 
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-orange-500 to-amber-500"
    },
    { 
      number: "04", 
      title: "Monitor", 
      desc: "Track production via our mobile app.", 
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { value: "15K+", label: "Projects Done" },
    { value: "50MW", label: "Installed Power" },
    { value: "98%", label: "Happy Clients" },
  ];

  return (
    <div className="min-h-screen text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden relative">
      
      {/* --- Global Background with Green Grid, Glow, and Solar Icons --- */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-300/30 rounded-full blur-[150px] opacity-60 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-teal-300/20 rounded-full blur-[150px] opacity-50 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/80 via-transparent to-transparent"></div>
        
        <div className="absolute top-20 left-20 opacity-10 animate-float-slow pointer-events-none">
          <Sun className="w-32 h-32 text-amber-400" />
        </div>
        <div className="absolute bottom-40 right-20 opacity-10 animate-float-slow animation-delay-1000 pointer-events-none">
          <Zap className="w-24 h-24 text-emerald-400" />
        </div>
         <div className="absolute top-1/3 right-1/3 opacity-10 animate-float-slow animation-delay-2000 pointer-events-none">
          <Leaf className="w-20 h-20 text-teal-400" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 opacity-5 animate-rotate-slow pointer-events-none">
          <Sun className="w-48 h-48 text-amber-200" />
        </div>

        <div className="absolute inset-0 bg-grid-emerald"></div>
      </div>

      {/* --- Navbar --- */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrollY > 10 
          ? 'bg-green/80 backdrop-blur-md border-slate-200 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="bg-emerald-600 p-2 rounded-lg shadow-lg shadow-emerald-500/20">
                <Sun className="w-5 h-5 text-white fill-white/20" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Rezillion</span>
            </div>

            <div className="hidden lg:flex items-center gap-1 bg-white/70 p-1 rounded-full border border-slate-200/50 backdrop-blur-sm">
              {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
                <button key={item} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 hover:bg-white rounded-full transition-all duration-200">
                  {item}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <div className="h-6 w-px bg-slate-300 mx-1"></div>
              <button className="text-sm font-semibold text-slate-600 hover:text-slate-900 px-2">Log In</button>
              <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                Get Started
              </button>
            </div>

            <button className="lg:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>

        {mobileMenuOpen && (
          <div 
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 shadow-xl lg:hidden flex flex-col gap-4 overflow-hidden animate-slide-down"
          >
            {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
              <a key={item} href="#" className="text-lg font-medium text-slate-800 py-2 px-4 hover:bg-slate-50 rounded-lg">
                {item}
              </a>
            ))}
            <div className="h-px bg-slate-100 my-2" />
            <button className="w-full py-3 font-semibold text-slate-600">Log In</button>
            <button className="w-full py-3 bg-emerald-600 text-white rounded-xl font-semibold">Get Started</button>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Leaf className="w-3 h-3" />
                Sustainable Energy
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Power your future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">clean energy.</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Rezillion transforms your property with intelligent solar solutions. 
                We combine cutting-edge hardware with smart software to maximize your savings.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/20 transition-all transform hover:-translate-y-1">
                  Calculate Savings
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 bg-white/50 backdrop-blur-sm text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:border-slate-300 transition-all">
                  <Phone className="w-5 h-5" />
                  Talk to an Expert
                </button>
              </div>

              <div className="pt-8 flex items-center gap-8 border-t border-slate-200/50 mt-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual (Glass Card Light) */}
            <div className="relative z-10 lg:h-[600px] w-full flex items-center justify-center animate-fade-in-right">
              <div className="relative w-full aspect-square max-w-[500px]">
                {/* Abstract shape behind card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200 to-teal-200 rounded-[2rem] transform rotate-3 scale-95 blur-2xl opacity-60"></div>
                
                {/* Main Glass Card */}
                <div className="absolute inset-0 bg-white/80 border border-white/60 rounded-[2rem] backdrop-blur-xl overflow-hidden flex flex-col shadow-2xl shadow-emerald-900/5">
                  
                  {/* Card Header */}
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    </div>
                    <div className="text-xs font-mono text-slate-400">system_monitor.exe</div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 grid grid-cols-2 gap-4">
                    {/* Stat Box 1 */}
                    <div className="col-span-2 bg-white p-5 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm hover:shadow-md transition-all">
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Current Output</div>
                        <div className="text-3xl font-bold text-emerald-600">8.4 kW</div>
                      </div>
                      <div className="h-10 w-10 bg-emerald-50 rounded-full flex items-center justify-center">
                        <Zap className="w-5 h-5 text-emerald-600" />
                      </div>
                    </div>

                    {/* Stat Box 2 */}
                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                      <div className="text-sm text-slate-500 mb-2">Battery</div>
                      <div className="flex items-end gap-1">
                        <span className="text-2xl font-bold text-slate-900">92</span>
                        <span className="text-sm text-slate-500 mb-1">%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full w-[92%] shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
                      </div>
                    </div>

                    {/* Stat Box 3 */}
                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                      <div className="text-sm text-slate-500 mb-2">Efficiency</div>
                      <div className="flex items-end gap-1">
                        <span className="text-2xl font-bold text-slate-900">98</span>
                        <span className="text-sm text-slate-500 mb-1">%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full w-[98%] shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="col-span-2 mt-auto">
                       <div className="flex gap-1 h-24 items-end justify-between px-2">
                          {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                            <div 
                              key={i} 
                              className="w-full bg-emerald-100 rounded-t-sm hover:bg-emerald-200 transition-colors mx-1 animate-grow-up" 
                              style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                            ></div>
                          ))}
                       </div>
                       <div className="text-center text-xs text-slate-400 mt-2 font-mono">WEEKLY GENERATION</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div 
                  className="absolute -right-8 top-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce-slow"
                >
                  <Sun className="w-8 h-8 text-amber-500" />
                </div>
                <div 
                  className="absolute -left-8 bottom-32 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce-slow"
                  style={{ animationDelay: '1s' }}
                >
                  <Leaf className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Bento Grid Section --- */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need</h2>
            <p className="text-slate-600 text-lg">Comprehensive tools and support to launch your renewable energy journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[180px]">
            <div 
              className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between animate-fade-in-up"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-slate-900 opacity-90 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute -right-12 -top-12 w-64 h-64 bg-emerald-500 rounded-full blur-[80px] opacity-40"></div>
              
              <div className="relative z-10">
                <div className="bg-emerald-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-emerald-500/30">
                  <Calculator className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Smart ROI Calculator</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Advanced algorithms that analyze your roof's potential, local weather patterns, and utility rates to predict your exact savings.
                </p>
              </div>
              <div className="relative z-10 mt-6">
                <button className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors">
                  Try it now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div 
              className="md:col-span-1 md:row-span-2 relative group rounded-3xl border border-slate-200 bg-white/80 p-8 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col animate-fade-in-up backdrop-blur-sm"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Certified Quality</h3>
              <p className="text-slate-500 mb-6 flex-1">
                Every installation is performed by certified professionals and backed by our 25-year performance guarantee.
              </p>
              <div className="h-32 w-full bg-slate-50 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-700"></div>
              </div>
            </div>

            <div 
              className="md:col-span-1 md:row-span-1 relative group rounded-3xl bg-emerald-50/80 border border-emerald-100 p-6 flex flex-col justify-between hover:bg-emerald-100 transition-colors animate-fade-in-up backdrop-blur-sm"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex justify-between items-start">
                 <div className="p-2 bg-white rounded-lg shadow-sm">
                   <Zap className="w-5 h-5 text-emerald-600" />
                 </div>
                 <ArrowUpRight className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                 <div className="text-3xl font-bold text-emerald-900 mb-1">98%</div>
                 <div className="text-sm font-medium text-emerald-700">Efficiency Rate</div>
              </div>
            </div>
            {/* Diagram Trigger: Photovoltaic Effect */}
            

[Image of solar panel photovoltaic effect diagram]


            <div 
              className="md:col-span-1 md:row-span-1 relative group rounded-3xl bg-orange-50/80 border border-orange-100 p-6 flex flex-col justify-between hover:bg-orange-100 transition-colors animate-fade-in-up backdrop-blur-sm"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex justify-between items-start">
                 <div className="p-2 bg-white rounded-lg shadow-sm">
                   <Users className="w-5 h-5 text-orange-600" />
                 </div>
                 <ArrowUpRight className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                 <div className="text-3xl font-bold text-orange-900 mb-1">24/7</div>
                 <div className="text-sm font-medium text-orange-700">Expert Support</div>
              </div>
            </div>

            <div 
              className="md:col-span-2 md:row-span-1 relative group rounded-3xl border border-slate-200 bg-white/80 p-6 flex items-center gap-6 hover:shadow-lg transition-all animate-fade-in-up backdrop-blur-sm"
              style={{ animationDelay: '0.4s' }}
            >
               <div className="hidden sm:flex h-full w-1/3 bg-slate-100 rounded-2xl items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
               </div>
               <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 text-purple-600 font-semibold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Zero Paperwork</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Processing</h3>
                  <p className="text-slate-500 text-sm">We handle all permits and documentation digitally. Track progress in real-time via your dashboard.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full text-slate-900 mb-6 border border-slate-200">
               <Code className="w-4 h-4 text-emerald-600" />
               <span className="text-sm font-semibold tracking-wider">HOW IT WORKS</span>
             </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              From Sun to Socket
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A seamless journey to energy independence in four simple steps.
            </p>
          </div>

          <div className="relative">
             {/* Animated Flow Line */}
             <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 -mt-16 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 via-teal-200 to-blue-200 rounded-full opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 via-teal-300 to-blue-300 rounded-full opacity-50 animate-pulse"></div>
             </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="group relative animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="relative bg-white border border-slate-100 rounded-2xl p-8 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col items-center text-center">
                    
                    {/* Number Badge */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {step.number}
                    </div>

                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto`}>
                        {step.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>

                     {/* Check mark */}
                    <div className="mt-auto pt-6 flex justify-center w-full">
                      <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Diagram Trigger: Grid Integration */}
            

[Image of grid-tied solar system diagram]

          </div>
        </div>
      </section>

      {/* --- Solutions Tabs --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-fade-in-up">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Tailored Solutions</h2>
              <p className="text-slate-600 text-lg">Whether you're powering a small home or a massive industrial complex, we have the engineering expertise to match.</p>
            </div>
            
            <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200">
              {solutionTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === i ? 'bg-white text-emerald-700 shadow-md' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-50/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-200 transition-all duration-500 ease-in-out">
            <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
                <div className="space-y-6">
                  <div className={`inline-flex p-3 rounded-xl bg-white shadow-sm ${solutionTabs[activeTab].accent.replace('text-', 'text-opacity-100 text-')}`}>
                    {solutionTabs[activeTab].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">{solutionTabs[activeTab].title} Solar</h3>
                  <p className="text-xl text-slate-700">{solutionTabs[activeTab].description}</p>
                  <p className="text-slate-500 leading-relaxed">{solutionTabs[activeTab].details}</p>
                  
                  <ul className="space-y-3 pt-4">
                    {solutionTabs[activeTab].benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`aspect-video rounded-2xl bg-gradient-to-br ${solutionTabs[activeTab].image} relative overflow-hidden group shadow-lg`}>
                  <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="absolute bottom-6 left-6 right-6">
                     <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Estimated Savings</div>
                        <div className="flex justify-between items-end">
                           <div className="text-2xl font-bold text-slate-900">$2,400<span className="text-sm font-normal text-slate-500">/yr</span></div>
                           <ArrowRight className="w-5 h-5 text-emerald-600" />
                        </div>
                     </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden group animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 group-hover:scale-105 transition-transform duration-700" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
               <div className="inline-block p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-8">
                 <Sun className="w-10 h-10 text-emerald-400" />
               </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Ready to switch to solar?</h2>
              <p className="text-xl text-slate-300 mb-10">Join thousands of homeowners saving money and the planet. Get a custom quote in under 24 hours.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all">
                  Get Free Quote
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- New Floating Bottom Menu --- */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-2xl">
        <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-2 rounded-full shadow-2xl shadow-emerald-900/10 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
          {floatingMenuLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.path)}
              className="flex-1 whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      {/* --- Footer --- */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-slate-200 pt-16 pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                 <div className="bg-emerald-500 p-1.5 rounded-lg">
                    <Sun className="w-5 h-5 text-white" />
                 </div>
                 <span className="text-xl font-bold text-slate-900">Rezillion</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6">
                Leading the renewable revolution with advanced solar technology for homes and businesses across the globe.
              </p>
              <div className="flex gap-4">
                {[Info, Mail, Globe].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Solutions</h4>
              <ul className="space-y-4 text-slate-500">
                {['Residential Solar', 'Commercial Systems', 'Industrial Grid', 'Battery Storage', 'Maintenance'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-emerald-600 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Company</h4>
              <ul className="space-y-4 text-slate-500">
                {['About Us', 'Careers', 'Blog', 'Press', 'Contact'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-emerald-600 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© 2025 Rezillion Energy. All rights reserved.</p>
            <div className="flex gap-8 text-sm text-slate-400">
              <a href="#" className="hover:text-slate-600">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Global CSS for the Grid Pattern and Animations */}
      <style>{`
        .bg-grid-emerald {
          background-image: 
            linear-gradient(to right, rgba(16, 185, 129, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.25) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes growUp {
          from { transform: scaleY(0); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* New Animations for Background Icons */
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -15px) rotate(5deg); }
          50% { transform: translate(-5px, 10px) rotate(-5deg); }
          75% { transform: translate(-10px, -5px) rotate(2deg); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-pulse-slow {
          animation: pulseSlow 8s infinite ease-in-out;
        }
        .animate-float-slow {
          animation: floatSlow 12s infinite ease-in-out;
        }
        .animate-rotate-slow {
          animation: rotateSlow 20s linear infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }

        .animate-grow-up {
          animation: growUp 1s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s infinite ease-in-out;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>

    </div>
  );
}