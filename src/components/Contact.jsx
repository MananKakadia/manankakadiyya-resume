import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Let's Build Something <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Amazing Together</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-secondary text-lg md:text-xl font-light max-w-2xl mx-auto mt-4"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Social Links (Left Side - 2 Docs) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Connect</h3>
            
            <a 
              href="mailto:manankakadiya27@gmail.com"
              className="group flex items-center gap-5 p-4 rounded-2xl glass hover:hover-glow transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:border-primary/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm relative z-10">
                <Mail size={22} />
              </div>
              <div className="relative z-10">
                <div className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">Email</div>
                <div className="text-white font-medium group-hover:text-primary transition-colors">manankakadiya27@gmail.com</div>
              </div>
            </a>

            <a 
              href="https://github.com/MananKakadia"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 p-4 rounded-2xl glass hover:hover-glow transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-text-secondary group-hover:text-white group-hover:border-white/40 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-sm relative z-10">
                <Github size={22} />
              </div>
              <div className="relative z-10">
                <div className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">GitHub</div>
                <div className="text-white font-medium">@MananKakadia</div>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/manan-kakadiya-25627b351/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 p-4 rounded-2xl glass hover:hover-glow transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-text-secondary group-hover:text-[#0a66c2] group-hover:border-[#0a66c2]/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm relative z-10">
                <Linkedin size={22} />
              </div>
              <div className="relative z-10">
                <div className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">LinkedIn</div>
                <div className="text-white font-medium group-hover:text-[#0a66c2] transition-colors">Manan Kakadiya</div>
              </div>
            </a>
          </motion.div>

          {/* Contact Form (Right Side - 3 Docs) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-secondary ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Manan Kakadiya"
                    className="w-full bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-full px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(100,27,48,0.4)] transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-secondary ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="yourmail@gmail.com"
                    className="w-full bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-full px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(100,27,48,0.4)] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-secondary ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  placeholder="Got an idea? Let’s talk."
                  className="w-full bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-3xl px-6 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(100,27,48,0.4)] transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full relative group overflow-hidden bg-primary text-white font-bold py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(100,27,48,0.3)] hover:shadow-[0_0_30px_rgba(100,27,48,0.6)] hover:-translate-y-1 block"
              >
                {/* Embedded button lighting */}
                <span className="absolute inset-0 w-full h-full object-cover z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700"></span>
                <span className="relative z-10 flex items-center gap-3">
                    Drop a Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      
      {/* Minimal Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-text-secondary text-sm">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Manan Kakadiya</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </p>
          <p className="flex items-center gap-1.5">
            Designed with <span className="text-primary/70">❤</span> By Manan Kakadiya
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
