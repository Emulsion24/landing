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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      
      {/* --- Grid Background --- */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
        {/* Soft Radial Highlight for depth */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-400 opacity-20 blur-[100px]"></div>
      </div>

      {/* --- New SaaS Style Navbar --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrollY > 10 
          ? 'bg-white/80 backdrop-blur-md border-slate-200 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Sun className="w-5 h-5 text-white fill-white/20" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Rezillion</span>
            </div>

            {/* Desktop Center Menu */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50 backdrop-blur-sm">
              {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
                <button key={item} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 hover:bg-white rounded-full transition-all duration-200">
                  {item}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <div className="h-6 w-px bg-slate-200 mx-1"></div>
              <button className="text-sm font-semibold text-slate-600 hover:text-slate-900 px-2">Log In</button>
              <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                Get Started
              </button>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 shadow-xl lg:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
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
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content */}
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
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
                <button className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/20 transition-all transform hover:-translate-y-1">
                  Calculate Savings
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all">
                  <Phone className="w-5 h-5" />
                  Talk to an Expert
                </button>
              </div>

              <div className="pt-8 flex items-center gap-8 border-t border-slate-200/60 mt-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative z-10 lg:h-[600px] w-full flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[500px]">
                {/* Main Abstract Shape */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-[2rem] transform rotate-3 scale-95 opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-white to-slate-50 rounded-[2rem] shadow-2xl shadow-emerald-900/5 border border-white/50 backdrop-blur-sm overflow-hidden flex flex-col">
                  
                  {/* Decorative Header within Card */}
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                    </div>
                    <div className="text-xs font-mono text-slate-400">system_monitor.exe</div>
                  </div>

                  {/* Grid Layout inside Card */}
                  <div className="p-6 flex-1 grid grid-cols-2 gap-4 bg-slate-50/50">
                    <div className="col-span-2 bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Current Output</div>
                        <div className="text-3xl font-bold text-emerald-600">8.4 kW</div>
                      </div>
                      <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Zap className="w-5 h-5 text-emerald-600" />
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                      <div className="text-sm text-slate-500 mb-2">Battery</div>
                      <div className="flex items-end gap-1">
                        <span className="text-2xl font-bold text-slate-800">92</span>
                        <span className="text-sm text-slate-500 mb-1">%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full w-[92%]"></div>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                      <div className="text-sm text-slate-500 mb-2">Efficiency</div>
                      <div className="flex items-end gap-1">
                        <span className="text-2xl font-bold text-slate-800">98</span>
                        <span className="text-sm text-slate-500 mb-1">%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full w-[98%]"></div>
                      </div>
                    </div>

                    <div className="col-span-2 mt-auto">
                       <div className="flex gap-1 h-24 items-end justify-between px-2">
                          {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                            <div key={i} className="w-full bg-emerald-200/50 rounded-t-sm hover:bg-emerald-400 transition-colors mx-1" style={{ height: `${h}%` }}></div>
                          ))}
                       </div>
                       <div className="text-center text-xs text-slate-400 mt-2 font-mono">WEEKLY GENERATION</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -right-8 top-20 bg-white p-4 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
                  <Sun className="w-8 h-8 text-amber-500" />
                </div>
                <div className="absolute -left-8 bottom-32 bg-white p-4 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-bounce" style={{ animationDuration: '4s' }}>
                  <Leaf className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Bento Grid Section (Reference Style) --- */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need</h2>
            <p className="text-slate-600 text-lg">Comprehensive tools and support to launch your renewable energy journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[180px]">
            {/* Item 1: Large Feature (Span 2x2) */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between">
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

            {/* Item 2: Standard Feature */}
            <div className="md:col-span-1 md:row-span-2 relative group rounded-3xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col">
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

            {/* Item 3: Wide Feature */}
            <div className="md:col-span-1 md:row-span-1 relative group rounded-3xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col justify-between hover:bg-emerald-100 transition-colors">
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

             {/* Item 4: Wide Feature */}
            <div className="md:col-span-1 md:row-span-1 relative group rounded-3xl bg-orange-50 border border-orange-100 p-6 flex flex-col justify-between hover:bg-orange-100 transition-colors">
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

            {/* Item 5: Wide Feature (Span 2) */}
            <div className="md:col-span-2 md:row-span-1 relative group rounded-3xl border border-slate-200 bg-white p-6 flex items-center gap-6 hover:shadow-lg transition-all">
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

      {/* --- Solutions Tabs --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background for dark section */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-500 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Solutions</h2>
              <p className="text-slate-400 text-lg">Whether you're powering a small home or a massive industrial complex, we have the engineering expertise to match.</p>
            </div>
            
            {/* Custom Tab Switcher */}
            <div className="flex bg-slate-800/50 p-1 rounded-full border border-slate-700/50 backdrop-blur-sm">
              {solutionTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === i ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content Card */}
          <div className="bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-700/50 backdrop-blur-md transition-all duration-500 ease-in-out">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className={`inline-flex p-3 rounded-xl bg-slate-700/50 ${solutionTabs[activeTab].accent.replace('text-', 'text-opacity-100 text-')}`}>
                  {solutionTabs[activeTab].icon}
                </div>
                <h3 className="text-3xl font-bold">{solutionTabs[activeTab].title} Solar</h3>
                <p className="text-xl text-slate-300">{solutionTabs[activeTab].description}</p>
                <p className="text-slate-400 leading-relaxed">{solutionTabs[activeTab].details}</p>
                
                <ul className="space-y-3 pt-4">
                  {solutionTabs[activeTab].benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`aspect-video rounded-2xl bg-gradient-to-br ${solutionTabs[activeTab].image} relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                {/* Decorative Pattern inside the image card */}
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

      {/* --- Process Section --- */}
      <section className="py-24 bg-[#FAFAFA] relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">From Sun to Socket</h2>
            <p className="text-slate-600">A seamless journey to energy independence in four steps.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-emerald-100 via-emerald-300 to-emerald-100"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-xl flex items-center justify-center mb-6 relative z-10 group-hover:border-emerald-100 group-hover:scale-110 transition-all duration-300">
                    <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center text-emerald-600">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 max-w-[200px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden group">
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

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
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

    </div>
  );
}