"use client"
import { useState, useEffect } from 'react';
import { 
  Sun, Zap, Shield, CheckCircle, Calculator, FileText, ArrowRight, 
  Menu, X, ChevronDown, Home, Building2, Factory, BarChart3, 
  Lightbulb, Info, Mail, Phone, Leaf, Wind, Globe, Battery, 
  TrendingUp, Award, Users, Target, ArrowUpRight, Search
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
    { number: "01", title: "Assessment", desc: "We evaluate sunlight exposure & roof condition.", icon: <Target className="w-6 h-6" /> },
    { number: "02", title: "Design", desc: "Engineers create a custom efficiency plan.", icon: <Lightbulb className="w-6 h-6" /> },
    { number: "03", title: "Install", desc: "Certified experts handle the entire setup.", icon: <Shield className="w-6 h-6" /> },
    { number: "04", title: "Monitor", desc: "Track production via our mobile app.", icon: <BarChart3 className="w-6 h-6" /> }
  ];

  const stats = [
    { value: "15K+", label: "Projects Done" },
    { value: "50MW", label: "Installed Power" },
    { value: "98%", label: "Happy Clients" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-300 overflow-x-hidden antialiased">
      
      {/* --- Enhanced Grid Background --- */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute right-20 top-40 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute left-20 bottom-40 w-[350px] h-[350px] bg-teal-500/20 rounded-full blur-[100px]"></div>
      </div>

      {/* --- Modern Glassmorphic Navbar --- */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 10 
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 py-3 shadow-lg shadow-black/5' 
          : 'bg-transparent border-b border-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-2.5 cursor-pointer group">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-xl shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Rezillion</span>
            </div>

            {/* Desktop Center Menu */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-800/50 p-1.5 rounded-full border border-slate-700/50 backdrop-blur-xl">
              {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
                <button key={item} className="px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-full transition-all duration-200">
                  {item}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="p-2.5 text-slate-400 hover:text-emerald-400 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <div className="h-6 w-px bg-slate-700 mx-1"></div>
              <button className="text-sm font-semibold text-slate-300 hover:text-white px-3 transition-colors">Log In</button>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5">
                Get Started
              </button>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden p-2 text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 p-6 shadow-2xl lg:hidden flex flex-col gap-4">
            {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
              <a key={item} href="#" className="text-lg font-medium text-slate-200 py-3 px-4 hover:bg-slate-800/50 rounded-xl transition-all">
                {item}
              </a>
            ))}
            <div className="h-px bg-slate-800 my-2" />
            <button className="w-full py-3 font-semibold text-slate-300 hover:text-white transition-colors">Log In</button>
            <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/25">Get Started</button>
          </div>
        )}
      </nav>

      {/* --- Enhanced Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content */}
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <Leaf className="w-3.5 h-3.5" />
                Sustainable Energy Revolution
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="text-white">Power your future with </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">clean energy.</span>
              </h1>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                Rezillion transforms your property with intelligent solar solutions. 
                We combine cutting-edge hardware with smart software to maximize your savings and minimize your carbon footprint.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-1">
                  Calculate Savings
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 bg-slate-800/50 text-slate-200 border border-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-800 hover:border-slate-600 backdrop-blur-sm transition-all">
                  <Phone className="w-5 h-5" />
                  Talk to an Expert
                </button>
              </div>

              <div className="pt-8 flex items-center gap-8 border-t border-slate-800/60 mt-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Hero Visual */}
            <div className="relative z-10 lg:h-[600px] w-full flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[500px]">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 rounded-[2rem] blur-3xl"></div>
                
                {/* Main Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-[2rem] shadow-2xl border border-slate-700/50 backdrop-blur-xl overflow-hidden flex flex-col">
                  
                  {/* Card Header */}
                  <div className="p-6 border-b border-slate-700/50 flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <div className="text-xs font-mono text-slate-500">system_monitor.exe</div>
                  </div>

                  {/* Card Content Grid */}
                  <div className="p-6 flex-1 grid grid-cols-2 gap-4 bg-slate-900/50">
                    {/* Current Output - Large */}
                    <div className="col-span-2 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-2xl border border-slate-700/50 flex items-center justify-between group hover:border-emerald-500/30 transition-all">
                      <div>
                        <div className="text-sm text-slate-400 mb-1 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                          Current Output
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">8.4 kW</div>
                      </div>
                      <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                        <Zap className="w-6 h-6 text-emerald-400" />
                      </div>
                    </div>

                    {/* Battery Status */}
                    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-5 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all">
                      <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                        <Battery className="w-4 h-4" />
                        Battery
                      </div>
                      <div className="flex items-end gap-1 mb-3">
                        <span className="text-3xl font-bold text-white">92</span>
                        <span className="text-sm text-slate-400 mb-1">%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full w-[92%]"></div>
                      </div>
                    </div>

                    {/* Efficiency */}
                    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-5 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all">
                      <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                        <TrendingUp className="w-4 h-4" />
                        Efficiency
                      </div>
                      <div className="flex items-end gap-1 mb-3">
                        <span className="text-3xl font-bold text-white">98</span>
                        <span className="text-sm text-slate-400 mb-1">%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full w-[98%]"></div>
                      </div>
                    </div>

                    {/* Weekly Chart */}
                    <div className="col-span-2 mt-auto">
                       <div className="flex gap-1.5 h-24 items-end justify-between px-2">
                          {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                            <div key={i} className="w-full bg-slate-700/50 rounded-t-lg hover:bg-gradient-to-t hover:from-emerald-500 hover:to-teal-500 transition-all cursor-pointer" style={{ height: `${h}%` }}></div>
                          ))}
                       </div>
                       <div className="text-center text-xs text-slate-500 mt-3 font-mono tracking-wider">WEEKLY GENERATION</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements with Glow */}
                <div className="absolute -right-8 top-20 bg-gradient-to-br from-slate-800 to-slate-900 p-5 rounded-2xl shadow-2xl shadow-amber-500/20 border border-slate-700 backdrop-blur-sm" style={{ animation: 'float 3s ease-in-out infinite' }}>
                  <Sun className="w-8 h-8 text-amber-400" />
                </div>
                <div className="absolute -left-8 bottom-32 bg-gradient-to-br from-slate-800 to-slate-900 p-5 rounded-2xl shadow-2xl shadow-emerald-500/20 border border-slate-700 backdrop-blur-sm" style={{ animation: 'float 4s ease-in-out infinite' }}>
                  <Leaf className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Add floating animation */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>

      {/* --- Modern Bento Grid Section --- */}
      <section className="py-24 bg-slate-950 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-slate-400 text-lg">Comprehensive tools and support to launch your renewable energy journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[180px]">
            {/* Item 1: Large Feature (Span 2x2) */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-8 md:p-10 flex flex-col justify-between">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
              <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/30">
                  <Calculator className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Smart ROI Calculator</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Advanced algorithms analyze your roof's potential, local weather patterns, and utility rates to predict your exact savings.
                </p>
              </div>
              <div className="relative z-10 mt-6">
                <button className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all group">
                  Try it now <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Item 2: Certified Quality */}
            <div className="md:col-span-1 md:row-span-2 relative group rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-8 hover:border-slate-700 transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Certified Quality</h3>
              <p className="text-slate-400 mb-6 flex-1">
                Every installation performed by certified professionals with our 25-year performance guarantee.
              </p>
              <div className="h-32 w-full bg-slate-800/50 rounded-xl overflow-hidden relative border border-slate-700/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-16 h-16 text-slate-700" />
                </div>
              </div>
            </div>

            {/* Item 3: Efficiency Rate */}
            <div className="md:col-span-1 md:row-span-1 relative group rounded-3xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm p-6 flex flex-col justify-between hover:bg-emerald-500/20 transition-all">
              <div className="flex justify-between items-start">
                 <div className="p-2 bg-slate-900 rounded-lg shadow-lg border border-slate-800">
                   <Zap className="w-5 h-5 text-emerald-400" />
                 </div>
                 <ArrowUpRight className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                 <div className="text-3xl font-bold text-white mb-1">98%</div>
                 <div className="text-sm font-medium text-emerald-400">Efficiency Rate</div>
              </div>
            </div>

             {/* Item 4: 24/7 Support */}
            <div className="md:col-span-1 md:row-span-1 relative group rounded-3xl bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm p-6 flex flex-col justify-between hover:bg-orange-500/20 transition-all">
              <div className="flex justify-between items-start">
                 <div className="p-2 bg-slate-900 rounded-lg shadow-lg border border-slate-800">
                   <Users className="w-5 h-5 text-orange-400" />
                 </div>
                 <ArrowUpRight className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                 <div className="text-3xl font-bold text-white mb-1">24/7</div>
                 <div className="text-sm font-medium text-orange-400">Expert Support</div>
              </div>
            </div>

            {/* Item 5: Digital Processing (Span 2) */}
            <div className="md:col-span-2 md:row-span-1 relative group rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-6 flex items-center gap-6 hover:border-slate-700 transition-all">
               <div className="hidden sm:flex h-full w-1/3 bg-slate-800/50 rounded-2xl items-center justify-center overflow-hidden border border-slate-700/50">
                  <FileText className="w-12 h-12 text-slate-600" />
               </div>
               <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 text-purple-400 font-semibold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Zero Paperwork</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Digital Processing</h3>
                  <p className="text-slate-400 text-sm">We handle all permits and documentation digitally. Track progress in real-time via your dashboard.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Enhanced Solutions Tabs --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
        {/* Enhanced Abstract Background */}
        <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-500 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Tailored Solutions</h2>
              <p className="text-slate-400 text-lg">Whether you're powering a small home or a massive industrial complex, we have the engineering expertise to match.</p>
            </div>
            
            {/* Enhanced Tab Switcher */}
            <div className="flex bg-slate-800/50 p-1.5 rounded-full border border-slate-700/50 backdrop-blur-xl">
              {solutionTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === i 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/30'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Dynamic Content Card */}
          <div className="bg-slate-800/30 rounded-3xl p-8 md:p-12 border border-slate-700/50 backdrop-blur-2xl transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className={`inline-flex p-4 rounded-2xl bg-slate-700/30 backdrop-blur-sm border border-slate-600/30`}>
                  <div className={`${solutionTabs[activeTab].accent}`}>
                    {solutionTabs[activeTab].icon}
                  </div>
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  {solutionTabs[activeTab].title} Solar
                </h3>
                <p className="text-xl text-slate-300 font-medium">{solutionTabs[activeTab].description}</p>
                <p className="text-slate-400 leading-relaxed text-lg">{solutionTabs[activeTab].details}</p>
                
                <ul className="space-y-4 pt-4">
                  {solutionTabs[activeTab].benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`aspect-video rounded-2xl bg-gradient-to-br ${solutionTabs[activeTab].image} relative overflow-hidden group border border-slate-700/30`}>
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-all duration-500 backdrop-blur-sm" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                
                {/* Enhanced Savings Card */}
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-slate-700/50 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <TrendingUp className="w-3 h-3" />
                        Estimated Savings
                      </div>
                      <div className="flex justify-between items-end">
                         <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                           $2,400<span className="text-lg font-normal text-slate-500">/yr</span>
                         </div>
                         <ArrowRight className="w-6 h-6 text-emerald-400" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Enhanced Process Section --- */}
      <section className="py-24 bg-slate-950 relative border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">From Sun to Socket</h2>
            <p className="text-slate-400 text-lg">A seamless journey to energy independence in four steps.</p>
          </div>

          <div className="relative">
            {/* Enhanced Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-1 rounded-full bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group">
                  <div className="w-32 h-32 bg-slate-900 rounded-3xl border-4 border-slate-800 shadow-2xl flex items-center justify-center mb-6 relative z-10 group-hover:border-emerald-500/30 group-hover:scale-110 group-hover:shadow-emerald-500/20 transition-all duration-300">
                    <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 w-20 h-20 rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                      {step.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-lg shadow-emerald-500/25">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-400 max-w-[200px] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Enhanced CTA Section --- */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden group">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] animate-pulse"></div>
            </div>
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
               <div className="inline-flex p-4 bg-white/10 backdrop-blur-md rounded-3xl mb-8 border border-white/20">
                 <Sun className="w-12 h-12 text-white" />
               </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Ready to switch to solar?</h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">Join thousands of homeowners saving money and the planet. Get a custom quote in under 24 hours.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="group bg-white text-emerald-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 shadow-2xl hover:shadow-white/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Enhanced Footer --- */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2.5 mb-6 group cursor-pointer">
                 <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-xl shadow-lg shadow-emerald-500/25">
                    <Sun className="w-6 h-6 text-white" />
                 </div>
                 <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Rezillion</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                Leading the renewable revolution with advanced solar technology for homes and businesses across the globe.
              </p>
              <div className="flex gap-3">
                {[Info, Mail, Globe].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 backdrop-blur-sm transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Solutions</h4>
              <ul className="space-y-4 text-slate-400">
                {['Residential Solar', 'Commercial Systems', 'Industrial Grid', 'Battery Storage', 'Maintenance'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group">
                      <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-4 text-slate-400">
                {['About Us', 'Careers', 'Blog', 'Press', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group">
                      <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© 2025 Rezillion Energy. All rights reserved.</p>
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}