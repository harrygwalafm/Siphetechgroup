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
  Clock,
  ArrowLeft,
  MessageSquare,
  Search,
  Zap,
  Users,
  HelpCircle,
  ChevronDown,
  Star,
  Quote,
  ArrowUp,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';

const services = [
  {
    slug: "web-design",
    title: "Web Design & Development",
    description: "Custom, responsive websites tailored to your business needs. We build modern digital experiences that convert.",
    longDescription: "Our web design and development services are focused on creating high-performance, visually stunning, and user-friendly websites. We use the latest technologies to ensure your site is fast, secure, and optimized for search engines. Whether you need a simple landing page or a complex e-commerce platform, we have the expertise to bring your vision to life.",
    icon: Globe,
    color: "bg-blue-500",
    features: ["Responsive Design", "E-commerce Solutions", "SEO Optimization", "Custom CMS Integration", "Performance Tuning", "Security Hardening"]
  },
  {
    slug: "hardware-sales",
    title: "Hardware Sales",
    description: "High-quality computer hardware and peripherals. We supply the best components for your workstations and servers.",
    longDescription: "We provide a wide range of high-quality computer hardware from leading manufacturers. Our experts can help you select the right components for your specific needs, whether you're building a gaming rig, a professional workstation, or a robust server environment. We ensure all hardware is compatible and meets the highest standards of reliability.",
    icon: Cpu,
    color: "bg-emerald-500",
    features: ["Custom PC Builds", "Server Components", "Laptops & Accessories", "Graphic Cards", "Storage Solutions", "Networking Gear"]
  },
  {
    slug: "hardware-repairs",
    title: "Hardware Repairs",
    description: "Expert diagnostics and fixing for all your hardware issues. From screen replacements to motherboard repairs.",
    longDescription: "Our hardware repair service is dedicated to getting your devices back up and running as quickly as possible. We handle everything from minor component failures to major motherboard repairs. Our technicians use advanced diagnostic tools to identify issues accurately and provide long-lasting solutions. We work on laptops, desktops, and servers of all brands.",
    icon: Wrench,
    color: "bg-orange-500",
    features: ["Laptop Repair", "Data Recovery", "Component Replacement", "Screen Replacement", "Liquid Damage Repair", "Power Supply Repair"]
  },
  {
    slug: "os-installation",
    title: "OS & Software Installation",
    description: "Professional installation and configuration of operating systems and essential business software.",
    longDescription: "We provide professional installation and configuration services for various operating systems, including Windows, macOS, and various Linux distributions. Beyond the OS, we also handle the setup of essential business software, security tools, and productivity suites. We ensure your system is fully updated, secured, and optimized for your specific workflow.",
    icon: Settings,
    color: "bg-purple-500",
    features: ["Windows/Linux Setup", "Software Licensing", "System Optimization", "Driver Configuration", "Security Software Setup", "Backup Solutions"]
  }
];

const stats = [
  { label: "Projects Completed", value: "500+" },
  { label: "Happy Clients", value: "350+" },
  { label: "Years Experience", value: "10+" },
  { label: "Support Tickets", value: "2k+" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    content: "SiphetechGroup transformed our outdated website into a modern, high-converting platform. Their attention to detail is unmatched.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Michael Chen",
    role: "IT Manager",
    content: "The hardware repair service was incredibly fast. They fixed our server issues in record time, saving us thousands in downtime.",
    avatar: "https://picsum.photos/seed/michael/100/100"
  },
  {
    name: "Amanda Dlamini",
    role: "Freelancer",
    content: "I bought my custom PC from them. The build quality is exceptional and the performance is exactly what I needed for my design work.",
    avatar: "https://picsum.photos/seed/amanda/100/100"
  }
];

const faqs = [
  {
    question: "How long does a typical web design project take?",
    answer: "A standard business website usually takes 2-4 weeks from discovery to launch, depending on the complexity and content availability."
  },
  {
    question: "Do you offer on-site hardware repairs?",
    answer: "Yes, we offer on-site support for businesses in the Umzimkhulu area. For complex repairs, we may need to bring the device to our workshop."
  },
  {
    question: "What kind of warranty do you provide on hardware?",
    answer: "All new hardware comes with the standard manufacturer's warranty, plus our 6-month service guarantee on all custom builds and repairs."
  },
  {
    question: "Can you help with software licensing for my office?",
    answer: "Absolutely. We assist businesses in selecting and managing the right software licenses for Windows, Office 365, and other professional suites."
  }
];

const processSteps = [
  {
    title: "Discovery",
    description: "We start by understanding your specific needs, goals, and technical requirements.",
    icon: Search,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Planning",
    description: "Our team creates a detailed roadmap and architecture for your project or repair.",
    icon: Settings,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Execution",
    description: "We build, repair, or implement the solution using the latest industry standards.",
    icon: Zap,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Support",
    description: "Ongoing maintenance and support to ensure your technology continues to perform.",
    icon: ShieldCheck,
    color: "text-orange-600",
    bg: "bg-orange-50"
  }
];

const team = [
  {
    name: "Siphe Sokhetye",
    role: "Founder & Lead Developer",
    image: "https://picsum.photos/seed/siphe/400/400"
  },
  {
    name: "David Smith",
    role: "Hardware Specialist",
    image: "https://picsum.photos/seed/david/400/400"
  },
  {
    name: "Elena Rodriguez",
    role: "UX/UI Designer",
    image: "https://picsum.photos/seed/elena/400/400"
  }
];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    description: "A full-featured online store with secure payments and inventory management."
  },
  {
    title: "Corporate Network Setup",
    category: "IT Infrastructure",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
    description: "High-speed, secure network implementation for a multi-office business."
  },
  {
    title: "Custom Gaming Rig",
    category: "Hardware",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800",
    description: "Liquid-cooled high-performance build for professional content creation."
  }
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navbar({ scrolled, isMenuOpen, setIsMenuOpen }: { scrolled: boolean; isMenuOpen: boolean; setIsMenuOpen: (open: boolean) => void }) {
  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-200">
              <Monitor size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Siphetech<span className="text-emerald-600">Group</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Home</Link>
            <a href="/#services" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Services</a>
            <a href="/#about" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">About</a>
            <a href="/#contact" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all">Get Started</a>
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
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-slate-900">Home</Link>
              <a href="/#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-slate-900">Services</a>
              <a href="/#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-slate-900">About</a>
              <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-slate-900">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
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
              <li><Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
              <li><a href="/#services" className="hover:text-emerald-500 transition-colors">Services</a></li>
              <li><a href="/#about" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="/#contact" className="hover:text-emerald-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="font-bold mb-6">Newsletter</h5>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest tech tips and service updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl text-sm hover:bg-emerald-700 transition-all">
                Subscribe
              </button>
            </form>
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
  );
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all ${isOpen ? 'bg-emerald-600 border-emerald-600 text-white rotate-180' : 'text-slate-400'}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
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
                <a href="#services" className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-200">
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
              style={{ y: y1 }}
              className="relative"
            >
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                  alt="IT Professional Working" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              {/* Floating Card */}
              <motion.div 
                style={{ y: y2 }}
                className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Certified Experts</p>
                    <p className="text-xs text-slate-500">Professional IT Support</p>
                  </div>
                </div>
              </motion.div>
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
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-emerald-200/50 transition-all group cursor-pointer"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <Link to={`/service/${service.slug}`} className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
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

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">Our Process</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">How We Bring Your Ideas to Life</h3>
            <p className="text-lg text-slate-400">A systematic approach to technology that ensures quality, speed, and reliability in every project.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-10"></div>
            
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className={`w-24 h-24 ${step.bg} rounded-[2rem] flex items-center justify-center ${step.color} mb-8 shadow-xl relative z-10 mx-auto lg:mx-0`}>
                  <step.icon size={40} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full border-2 border-slate-800 flex items-center justify-center text-xs font-bold text-emerald-400">
                    0{idx + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4 text-center lg:text-left">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed text-center lg:text-left">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Testimonials</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900">What Our Clients Say About Us</h3>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 border border-slate-100 hover:bg-emerald-600 hover:text-white transition-all"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-slate-50 p-10 lg:p-16 rounded-[3rem] border border-slate-100 relative group">
                  <div className="absolute top-12 right-12 text-emerald-100">
                    <Quote size={80} fill="currentColor" />
                  </div>
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-2xl lg:text-3xl text-slate-700 mb-10 italic leading-relaxed font-medium">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div className="flex items-center gap-6">
                    <img 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].name} 
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" 
                      referrerPolicy="no-referrer" 
                    />
                    <div>
                      <p className="text-xl font-bold text-slate-900">{testimonials[currentTestimonial].name}</p>
                      <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-2 transition-all duration-300 rounded-full ${currentTestimonial === idx ? 'w-8 bg-emerald-600' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Our Team</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">The Minds Behind SiphetechGroup</h3>
            <p className="text-lg text-slate-600">Meet our dedicated team of experts committed to delivering excellence in technology.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative mb-6 overflow-hidden rounded-[2rem] aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-emerald-600 transition-colors cursor-pointer">
                        <Globe size={18} />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-emerald-600 transition-colors cursor-pointer">
                        <Mail size={18} />
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-emerald-600 font-medium text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Common Questions</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">Everything You Need to Know</h3>
              <p className="text-lg text-slate-600 mb-10">
                Can't find the answer you're looking for? Feel free to reach out to our support team directly.
              </p>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm inline-block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <HelpCircle size={20} />
                  </div>
                  <p className="font-bold text-slate-900">Still have questions?</p>
                </div>
                <a href="#contact" className="text-emerald-600 font-bold hover:underline">Contact our support team →</a>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
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

      {/* Featured Projects Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Our Portfolio</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900">Showcasing Our <span className="text-emerald-600">Best</span> Work</h3>
            </div>
            <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
              View All Projects
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ExternalLink size={20} />
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3 block">{project.category}</span>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Contact Info Column */}
            <div className="lg:col-span-5">
              <div className="mb-12">
                <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Get in Touch</h2>
                <h3 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                  Let's Build Something <span className="text-emerald-600">Great</span> Together.
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email Us", value: "siphesokhetye98@gmail.com", color: "text-blue-600", bg: "bg-blue-50" },
                  { icon: Phone, label: "Call Us", value: "0637979251", color: "text-emerald-600", bg: "bg-emerald-50" },
                  { icon: MapPin, label: "Visit Us", value: "Umzimkhulu, South Africa", color: "text-purple-600", bg: "bg-purple-50" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center shrink-0`}>
                      <item.icon size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-lg font-bold text-slate-900">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <p className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Follow Our Journey</p>
                <div className="flex gap-4">
                  {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                    <div key={social} className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-emerald-600 transition-all cursor-pointer shadow-lg shadow-slate-200">
                      <Globe size={20} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 lg:p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-600 rounded-3xl flex items-center justify-center text-white shadow-xl rotate-12">
                  <MessageSquare size={40} />
                </div>

                <form className="space-y-8" onSubmit={(e) => {
                  e.preventDefault();
                  alert('Message sent successfully! We will get back to you soon.');
                }}>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Service of Interest</label>
                    <div className="relative">
                      <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium appearance-none">
                        <option>Web Development & Design</option>
                        <option>Hardware Repair & Maintenance</option>
                        <option>System Optimization</option>
                        <option>IT Consultation</option>
                        <option>Other Services</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea 
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-medium h-40 resize-none" 
                      placeholder="Tell us about your project goals..."
                    ></textarea>
                  </div>

                  <button className="w-full py-5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center justify-center gap-3 group">
                    Send Message 
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-emerald-600 font-bold">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-medium mb-12 transition-colors">
          <ArrowLeft size={20} /> Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl`}>
              <service.icon size={32} />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {service.longDescription}
            </p>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-12">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-500" /> Key Features & Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
              Get Started with {service.title} <ArrowRight size={20} />
            </a>
          </div>

          <div className="sticky top-32">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000`} 
                alt={service.title} 
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <ShieldCheck className="text-emerald-600 mb-3" size={24} />
                <p className="text-sm font-bold text-slate-900">Secure Service</p>
                <p className="text-xs text-slate-500">Data protection guaranteed</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <Clock className="text-emerald-600 mb-3" size={24} />
                <p className="text-sm font-bold text-slate-900">Quick Delivery</p>
                <p className="text-xs text-slate-500">Fast turnaround times</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
        </Routes>

        <Footer />

        {/* Back to Top Button */}
        <AnimatePresence>
          {scrolled && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 w-14 h-14 bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-400/50 flex items-center justify-center z-50 hover:bg-emerald-700 transition-all"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
