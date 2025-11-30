"use client"
import { useState, useEffect } from 'react';
import { 
  Sun, Zap, Shield, CheckCircle, Calculator, FileText, ArrowRight, 
  Menu, X, ChevronDown, Home, Building2, Factory, BarChart3, 
  Lightbulb, Info, Mail, Phone, Leaf, Wind, Globe, Battery, 
  TrendingUp, Award, Users, Target, ArrowUpRight, Search, Code, Smartphone,
  Gavel, ClipboardCheck, MapPin, LayoutDashboard
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
      color: "text-amber-600",
      bg: "bg-amber-50",
      gradient: "from-amber-500/10 to-orange-500/10",
      border: "group-hover:border-amber-500/50"
    },
    {
      title: "Commercial",
      icon: <Building2 className="w-8 h-8" />,
      subtitle: "For Businesses",
      desc: "Tax incentives and reduced opex for sustainable growth.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      gradient: "from-blue-500/10 to-indigo-500/10",
      border: "group-hover:border-blue-500/50"
    },
    {
      title: "Industrial",
      icon: <Factory className="w-8 h-8" />,
      subtitle: "For Enterprise",
      desc: "Heavy-duty infrastructure for peak load management.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      gradient: "from-emerald-500/10 to-teal-500/10",
      border: "group-hover:border-emerald-500/50"
    }
  ];

  const actionCards = [
    { 
      title: "Evaluate Site Readiness", 
      desc: "Our guided checklist verifies sunlight availability, roof structural integrity, and shading analysis before you spend a dime.",
      icon: <ClipboardCheck className="w-8 h-8 text-emerald-400" />,
      visual: (
        <div className="space-y-2 mt-4">
          {['Sunlight Exposure', 'Roof Condition', 'Shadow Analysis'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-400 bg-slate-800/50 p-2 rounded-lg">
              <CheckCircle className="w-4 h-4 text-emerald-500" /> {item}
            </div>
          ))}
        </div>
      )
    },
    { 
      title: "Smart ROI Calculator", 
      desc: "Get realistic savings estimates based on Indian tariff structures, net metering policies, and your specific location data.", 
      icon: <Calculator className="w-8 h-8 text-blue-400" />,
      visual: (
        <div className="mt-4 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">Payback Period</span>
            <span className="text-blue-400 font-bold">3.2 Years</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full w-[70%] bg-blue-500 rounded-full"></div>
          </div>
        </div>
      )
    },
    { 
      title: "Installer-Ready Specs", 
      desc: "We auto-generate a technical project file with all necessary electrical and structural details, so installers can quote instantly.", 
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      visual: (
        <div className="mt-4 flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
          <div className="bg-purple-500/20 p-2 rounded-lg"><Code className="w-4 h-4 text-purple-400" /></div>
          <div className="text-xs text-slate-300">
            <div className="font-bold">Project_Specs.pdf</div>
            <div className="text-slate-500">Auto-generated</div>
          </div>
        </div>
      )
    },
    { 
      title: "Competitive Bidding", 
      desc: "Receive blind bids from top-rated, verified installers. Compare technical proposals and prices side-by-side.", 
      icon: <Gavel className="w-8 h-8 text-amber-400" />,
      visual: (
        <div className="mt-4 flex -space-x-3">
          {[1,2,3].map((_, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-xs font-bold text-white">
              {String.fromCharCode(65 + i)}
            </div>
          ))}
          <div className="w-8 h-8 rounded-full bg-amber-500/20 border-2 border-slate-800 flex items-center justify-center text-xs font-bold text-amber-400">+5</div>
        </div>
      )
    }
  ];

  const stats = [
    { value: "15K+", label: "Verified Installers" },
    { value: "50MW+", label: "Power Installed" },
    { value: "100%", label: "Satisfaction" },
  ];

  // Success Projects Data
  const projects = [
    { name: "Apex Tech Park", loc: "Hyderabad", capacity: "500 kW", saved: "120 Tons CO₂", type: "Industrial" },
    { name: "Green Valley Villa", loc: "Pune", capacity: "10 kW", saved: "2.4 Tons CO₂", type: "Residential" },
    { name: "Global School", loc: "Bangalore", capacity: "50 kW", saved: "12 Tons CO₂", type: "Commercial" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      
      {/* --- Glass Navbar --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrollY > 20 ? 'pt-4' : 'pt-6'}`}>
        <div className={`
          flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-2xl border border-white/50 shadow-lg shadow-emerald-900/5 transition-all duration-300
          ${scrollY > 20 ? 'w-[90%] md:w-[80%] bg-white/70' : 'w-[95%] bg-white/40'}
        `}>
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-2 rounded-full shadow-lg shadow-emerald-500/20">
              <Sun className="w-5 h-5 fill-white/20" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800">Rezillion</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
            {['Calculator', 'Process', 'Success Stories'].map((item) => (
              <a key={item} href="#" className="hover:text-emerald-600 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-semibold text-slate-600 hover:text-slate-900">Login</button>
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 hover:shadow-lg transition-all transform hover:scale-105 active:scale-95">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 md:hidden animate-slide-down">
          <div className="flex flex-col gap-6 text-xl font-medium text-slate-800">
            {['Calculator', 'Process', 'Success Stories'].map((item) => (
              <a key={item} href="#" className="border-b border-slate-100 pb-4">{item}</a>
            ))}
            <button className="bg-emerald-500 text-white w-full py-4 rounded-xl font-bold mt-4">Start Project</button>
          </div>
        </div>
      )}

      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Copy */}
            <div className="lg:col-span-5 space-y-8 relative z-10 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                <Leaf className="w-3 h-3" />
                India's #1 Solar Marketplace
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Your Solar Journey, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Simplified.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                We've built the complete ecosystem for going solar. Assess feasibility, design your system, and get verified bids—without the sales calls.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30 transition-all">
                  Start Assessment <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex items-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-2xl font-bold border border-slate-200 hover:border-slate-300 transition-all">
                  <LayoutDashboard className="w-5 h-5" /> View Demo
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-medium uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual - Success Stories Dashboard (Non-Confidential) */}
            <div className="lg:col-span-7 relative animate-fade-in-right">
              {/* Background Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-100/50 via-blue-100/30 to-amber-100/40 rounded-full blur-3xl -z-10"></div>
              
              {/* Main Dashboard Card */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-white/60 p-6 md:p-8 overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="text-sm text-slate-400 font-bold uppercase tracking-wide mb-1">Live Impact Tracker</div>
                    <div className="flex items-center gap-2 text-slate-800 font-bold text-xl">
                      <Globe className="w-5 h-5 text-emerald-500" />
                      Rezillion Network
                    </div>
                  </div>
                  <div className="bg-emerald-50 p-2 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>

                {/* Total Impact Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
                    <div className="text-emerald-600 font-bold text-3xl mb-1">50+ MW</div>
                    <div className="text-slate-600 text-xs font-medium uppercase">Clean Energy Installed</div>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                    <div className="text-blue-600 font-bold text-3xl mb-1">15K+</div>
                    <div className="text-slate-600 text-xs font-medium uppercase">Happy Homeowners</div>
                  </div>
                </div>

                {/* Recent Successful Projects List */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
                    <h4 className="font-bold text-slate-800 text-sm">Recent Success Stories</h4>
                    <span className="text-xs text-emerald-600 font-semibold bg-emerald-100 px-2 py-1 rounded-full">Live Updates</span>
                  </div>
                  <div className="divide-y divide-slate-50">
                    {projects.map((proj, i) => (
                      <div key={i} className="px-6 py-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i === 0 ? 'bg-indigo-100 text-indigo-600' : i === 1 ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
                            {i === 0 ? <Factory className="w-5 h-5" /> : i === 1 ? <Home className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                          </div>
                          <div>
                            <div className="font-bold text-slate-800 text-sm">{proj.name}</div>
                            <div className="text-xs text-slate-400 flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> {proj.loc} • {proj.type}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-slate-900 text-sm">{proj.capacity}</div>
                          <div className="text-xs text-emerald-600 font-medium">{proj.saved}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Choose Your Path (Solutions Grid) --- */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose Your Path</h2>
            <p className="text-slate-500 mt-2 text-lg">Tailored solar solutions designed for your specific property needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <div 
                key={i} 
                className={`group relative p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sol.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${sol.bg} ${sol.color} group-hover:scale-110 transition-transform duration-500`}>
                      {sol.icon}
                    </div>
                    <div className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-slate-100 ${sol.color}`}>
                      {sol.subtitle}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-900 transition-colors">{sol.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8 group-hover:text-slate-600">{sol.desc}</p>
                  
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900 group-hover:gap-4 transition-all">
                    Explore Solutions <ArrowRight className={`w-4 h-4 ${sol.color}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- What You Can Do (Grid Layout) --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="text-emerald-400 font-bold tracking-wider text-sm mb-3">POWERFUL TOOLS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What you can do here.</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We've consolidated the fragmented solar installation process into a single, intelligent workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {actionCards.map((card, i) => (
              <div key={i} className="group relative bg-slate-800/40 backdrop-blur-sm border border-white/5 p-8 rounded-[2rem] hover:bg-slate-800/60 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-slate-900 rounded-2xl border border-slate-700 group-hover:border-emerald-500/50 transition-colors">
                        {card.icon}
                      </div>
                      <span className="text-4xl font-bold text-white/5 group-hover:text-emerald-500/10 transition-colors">0{i + 1}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm mb-6">
                      {card.desc}
                    </p>
                  </div>
                  
                  {/* Embedded Visual Interaction */}
                  <div className="pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
                    {card.visual}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Feature Grid (Bento) --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
            
            {/* Big Feature 1 */}
            <div className="md:col-span-2 row-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm flex flex-col justify-between overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10 group-hover:bg-emerald-100 transition-colors"></div>
              <div>
                <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                  <Calculator className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Indian Tariff Optimized</h3>
                <p className="text-slate-500 text-lg max-w-md">Our smart calculator specifically analyzes local state tariffs, electricity bills, and net metering policies to give you a realistic payback period.</p>
              </div>
              <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-slate-500 text-sm">Estimated Payback Period</span>
                  <span className="text-emerald-600 font-bold text-2xl">3.5 Years</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 w-[45%] h-full rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm flex flex-col justify-center items-center text-center hover:bg-slate-900 hover:text-white transition-colors duration-300 group">
              <FileText className="w-10 h-10 mb-4 text-slate-900 group-hover:text-emerald-400 transition-colors" />
              <h4 className="font-bold text-xl mb-2">Installer-Ready</h4>
              <p className="text-sm opacity-70">Submit standard technical details for instant, accurate quotes.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-emerald-500 p-8 rounded-[2.5rem] shadow-sm text-white flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-6 h-6" />
                <span className="font-bold">Verified</span>
              </div>
              <div className="text-3xl font-bold mb-1">100% Secure</div>
              <div className="text-emerald-100 text-sm">Vetted installers only</div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-emerald-500 p-2 rounded-lg">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">Rezillion</span>
              </div>
              <p className="text-slate-500 max-w-xs">Connecting homeowners with India's best solar installers for a cleaner, greener future.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Platform</h4>
                <ul className="space-y-2 text-slate-500 text-sm">
                  <li><a href="#" className="hover:text-emerald-600">Browse Installers</a></li>
                  <li><a href="#" className="hover:text-emerald-600">Post a Project</a></li>
                  <li><a href="#" className="hover:text-emerald-600">Solar Calculator</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Company</h4>
                <ul className="space-y-2 text-slate-500 text-sm">
                  <li><a href="#" className="hover:text-emerald-600">About Us</a></li>
                  <li><a href="#" className="hover:text-emerald-600">For Installers</a></li>
                  <li><a href="#" className="hover:text-emerald-600">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center text-sm text-slate-400">
            <p>© 2025 Rezillion Inc.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900">Terms of Use</a>
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
        .animate-slide-down { animation: slideDown 0.3s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; }
        .animate-float-slow { animation: floatSlow 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 12s linear infinite; }
      `}</style>
    </div>
  );
}