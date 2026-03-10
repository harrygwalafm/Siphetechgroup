import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Cpu, 
  Wrench, 
  Settings, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  Globe,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    title: "Web Design & Development",
    description: "Custom, responsive websites tailored to your business needs. We build modern digital experiences that convert.",
    icon: Globe,
    color: "bg-blue-500",
    features: ["Responsive Design", "E-commerce Solutions", "SEO Optimization"]
  },
  {
    title: "Hardware Sales",
    description: "High-quality computer hardware and peripherals. We supply the best components for your workstations and servers.",
    icon: Cpu,
    color: "bg-emerald-500",
    features: ["Custom PC Builds", "Server Components", "Laptops & Accessories"]
  },
  {
    title: "Hardware Repairs",
    description: "Expert diagnostics and fixing for all your hardware issues. From screen replacements to motherboard repairs.",
    icon: Wrench,
    color: "bg-orange-500",
    features: ["Laptop Repair", "Data Recovery", "Component Replacement"]
  },
  {
    title: "OS & Software Installation",
    description: "Professional installation and configuration of operating systems and essential business software.",
    icon: Settings,
    color: "bg-purple-500",
    features: ["Windows/Linux Setup", "Software Licensing", "System Optimization"]
  }
];

const stats = [
  { label: "Projects Completed", value: "500+" },
  { label: "Happy Clients", value: "350+" },
  { label: "Years Experience", value: "10+" },
  { label: "Support Tickets", value: "2k+" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-200">
              <Monitor size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Siphetech<span className="text-emerald-600">Group</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Home</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">About</a>
            <a href="#contact" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all">Get Started</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-slate-900">Home</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-slate-900">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-slate-900">About</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-slate-900">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                Your Trusted IT Partner
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
                Empowering Your <span className="text-emerald-600">Digital</span> Future.
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                SiphetechGroup provides comprehensive technology solutions from cutting-edge web design to expert hardware maintenance and system optimization.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-200">
                  Our Services <ArrowRight size={20} />
                </a>
                <a href="#about" className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:border-emerald-600 transition-all">
                  Learn More
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                  alt="IT Professional Working" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Certified Experts</p>
                    <p className="text-xs text-slate-500">Professional IT Support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">What We Do</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Comprehensive IT Solutions for Every Need</h3>
            <p className="text-lg text-slate-600">From individual repairs to enterprise-level web development, we have the expertise to handle it all.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-emerald-100/50 transition-all group"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <Clock className="text-emerald-600 mb-4" size={32} />
                    <h5 className="font-bold text-slate-900 mb-2">Fast Turnaround</h5>
                    <p className="text-sm text-slate-600">We value your time and ensure quick service delivery.</p>
                  </div>
                  <div className="bg-emerald-600 p-6 rounded-2xl text-white">
                    <ShieldCheck className="text-emerald-200 mb-4" size={32} />
                    <h5 className="font-bold mb-2">Guaranteed Quality</h5>
                    <p className="text-sm text-emerald-50/80">All our repairs and builds come with a service guarantee.</p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-slate-900 p-6 rounded-2xl text-white">
                    <Settings className="text-emerald-400 mb-4" size={32} />
                    <h5 className="font-bold mb-2">Expert Support</h5>
                    <p className="text-sm text-slate-400">Our technicians are highly trained and certified.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <Globe className="text-emerald-600 mb-4" size={32} />
                    <h5 className="font-bold text-slate-900 mb-2">Modern Tech</h5>
                    <p className="text-sm text-slate-600">We use the latest tools and technologies in our work.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Why Choose Us</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">We Bridge the Gap Between Technology and Business</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At SiphetechGroup, we don't just fix computers or build websites; we create solutions that help you succeed in a digital-first world. Our holistic approach ensures that your hardware, software, and online presence work in perfect harmony.
              </p>
              <div className="space-y-4">
                {["Dedicated Support Team", "Competitive Pricing", "Customized Solutions"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/10 -skew-x-12 translate-x-1/4"></div>
            <div className="relative z-10 text-center lg:text-left lg:flex items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to upgrade your technology?</h3>
                <p className="text-slate-400 text-lg mb-8 lg:mb-0">Contact us today for a free consultation or a quote for your project.</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20">
                Get a Free Quote <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Contact Us</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8">Let's Talk About Your Project</h3>
              <p className="text-slate-600 mb-12">Have a question or need a service? Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">Email Us</p>
                    <p className="text-slate-600">info@siphetechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">Call Us</p>
                    <p className="text-slate-600">+27 (0) 12 345 6789</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">Visit Us</p>
                    <p className="text-slate-600">123 Tech Avenue, Innovation Hub, Pretoria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white">
                    <option>Web Design</option>
                    <option>Hardware Repair</option>
                    <option>Hardware Purchase</option>
                    <option>OS Installation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all h-32 resize-none" placeholder="Tell us about your needs..."></textarea>
                </div>
                <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-20 pb-10 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                  <Monitor size={24} />
                </div>
                <span className="text-2xl font-bold tracking-tight">Siphetech<span className="text-emerald-600">Group</span></span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                Your one-stop destination for all things technology. We provide expert IT services to help businesses and individuals thrive in the digital age.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                    <Globe size={18} />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-bold mb-6">Quick Links</h5>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#home" className="hover:text-emerald-500 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-emerald-500 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-emerald-500 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6">Services</h5>
              <ul className="space-y-4 text-slate-400">
                <li>Web Design</li>
                <li>Hardware Sales</li>
                <li>Hardware Repairs</li>
                <li>OS Installation</li>
                <li>Network Setup</li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
            <p>© 2026 SiphetechGroup. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
