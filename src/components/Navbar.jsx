import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy logic to determine active section
      const sectionElements = navLinks.map(link => document.getElementById(link.href.substring(1)));
      let currentActive = 'home';
      
      sectionElements.forEach((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold so that when a section reaches near the top, it becomes active
          if (rect.top <= 250) {
            currentActive = el.id;
          }
        }
      });
      
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial trigger
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[rgba(15,15,20,0.6)] backdrop-blur-lg border-b border-b-white/5 py-4'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a href="#home" className="text-2xl font-black text-white tracking-tighter group flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-sm shadow-[0_0_15px_rgba(100,27,48,0.5)] group-hover:shadow-[0_0_25px_rgba(100,27,48,0.8)] transition-all duration-300">
              M<span className="text-white/50 group-hover:text-white/80">K</span>
            </span>
            <span>Manan<span className="text-text-secondary group-hover:text-white transition-colors duration-300">Kakadiya</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative font-medium text-sm transition-all duration-300 group hover:text-primary ${
                    isActive ? 'text-white' : 'text-text-secondary'
                  }`}
                >
                  <span className="group-hover:drop-shadow-[0_0_10px_rgba(100,27,48,0.8)] transition-all duration-300">
                    {link.name}
                  </span>
                  
                  {/* Framer Motion Active Indicator smooth layout transition */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_rgba(100,27,48,0.8)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {/* Hover underline when not active */}
                  {!isActive && (
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-50" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Side: Primary CTA */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full bg-primary text-white font-bold text-sm hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_15px_rgba(100,27,48,0.6)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:-translate-y-0.5"
            >
              Let’s Connect
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden text-text-secondary hover:text-white transition-colors p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[60] bg-[rgba(15,15,20,0.95)] flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-8 right-6 text-text-secondary hover:text-white transition-colors p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    className={`text-3xl font-bold tracking-wider relative group ${
                      isActive ? 'text-white' : 'text-text-secondary'
                    } hover:text-primary transition-colors`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="group-hover:drop-shadow-[0_0_12px_rgba(100,27,48,0.8)] transition-all duration-300">
                      {link.name}
                    </span>
                    {isActive && (
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary shadow-[0_0_15px_rgba(100,27,48,0.8)]" />
                    )}
                  </motion.a>
                );
              })}
              <motion.a 
                href="#contact"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 px-10 py-4 rounded-full bg-primary text-white font-bold text-xl hover:bg-white hover:text-primary transition-all shadow-[0_0_25px_rgba(100,27,48,0.7)]"
              >
                Let’s Connect
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
