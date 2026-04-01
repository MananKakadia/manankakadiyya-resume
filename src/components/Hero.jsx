import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '50%']);
  const opacityGrid = useTransform(scrollY, [0, 600], [0.2, 0]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-background"
    >
      {/* --- Visual Environment --- */}
      
      {/* Subtle Grid Background Pattern with Parallax */}
      <motion.div 
        style={{ y: backgroundY, opacity: opacityGrid }}
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]"
      ></motion.div>
      
      {/* Animated Gradient Glow Behind Content */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px] -z-10 mix-blend-screen pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full text-center relative z-10 flex flex-col items-center">
        
        {/* --- Content Cascade --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10 flex flex-col items-center"
        >
          {/* Circular Developer Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 200 }}
            className="relative mb-4 group"
          >
            {/* Pulsing Backlight */}
            <div className="absolute inset-0 bg-primary/40 rounded-full blur-2xl animate-pulse group-hover:bg-primary/60 transition-colors duration-500"></div>
            
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[var(--color-border)] relative z-10 shadow-[0_0_30px_rgba(100,27,48,0.3)] group-hover:border-primary/50 transition-colors duration-500">
              <img 
                src="/IMG_4098.JPG" 
                alt="Developer Profile"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1] max-w-4xl mx-auto drop-shadow-2xl"
          >
            Full Stack <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-primary to-secondary relative">
              MERN Developer
              {/* Text glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-[40px] opacity-20 -z-10 bg-clip-text text-transparent">MERN Developer</span>
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-2xl text-text-secondary max-w-2xl mx-auto leading-[1.6] font-light"
          >
            Building scalable web platforms, SaaS systems, and AI-powered applications.
          </motion.p>
          
          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 w-full sm:w-auto"
          >
            {/* Primary Button */}
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-primary text-white font-bold transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(100,27,48,0.4)] hover:shadow-[0_0_40px_rgba(100,27,48,0.8)] hover:-translate-y-1"
            >
              View Projects
              <ChevronRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
            
            {/* Secondary Button */}
            <a 
              href="/MananKakadiya-Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-full border border-[var(--color-border)] hover:bg-white/5 hover:border-white/30 transition-all duration-300 font-bold flex items-center justify-center text-white gap-3 group hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:-translate-y-1 bg-[var(--color-card-bg)]/50 backdrop-blur-sm"
            >
              <Download size={20} className="text-text-secondary group-hover:text-white group-hover:-translate-y-0.5 transition-all" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

      </div>
      
      {/* Bottom fade gradient linking into next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
