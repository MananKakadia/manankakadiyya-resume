import React from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout, Cpu, Server, CheckCircle2 } from 'lucide-react';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const features = [
    {
      icon: <Layout className="text-primary" size={24} />,
      title: "Full Stack Development",
      description: "Building end-to-end web applications using React, Node.js, and modern databases."
    },
    {
      icon: <Cpu className="text-[#a32a4d]" size={24} />,
      title: "AI-Enhanced Applications",
      description: "Integrating modern AI tools and APIs to build smarter, more interactive web applications."
    },
    {
      icon: <Server className="text-secondary" size={24} />,
      title: "Scalable Backend Systems",
      description: "Designing efficient APIs and backend services that power reliable and high-performance applications."
    }
  ];

const statistics = [
  { value: "10+", label: "Projects Built" },
  { value: "4+", label: "Full Stack Applications" },
  { value: "5+", label: "Hackathon Participation" }
];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      {/* Background Lighting Extracted to match strict premium color palette w/ Parallax */}
      <motion.div style={{ y: y1 }} className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card-bg)] text-xs font-semibold tracking-widest text-text-secondary uppercase shadow-sm"
          >
            The Architect
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Developer Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group lg:-mt-20"
          >
            {/* Ambient Image Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 block" />

            <div className="relative glass p-3 rounded-[2rem] hover:hover-glow transition-all duration-700 hover:-translate-y-2 z-10 block">
               <div className="rounded-[1.5rem] overflow-hidden relative border border-white/5">
                 {/* Internal Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card-bg)]/80 via-transparent to-transparent z-10"></div>
                 <img 
                   src="/self.jpeg" 
                   alt="Developer Working" 
                   className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                 />
                 
                 {/* Decorative element inside image */}
                 
               </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Intro & Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col space-y-12"
          >
            {/* Introduction Text */}
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed font-light">
              <h3 className="text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-primary transition-colors">
                Engineering elegant solutions to complex problems.
              </h3>
              <p>
                I am a dedicated <strong className="text-white font-medium">Full Stack Architect</strong> specializing in the MERN stack and passionate about building scalable web applications and interactive user experiences.I enjoy turning complex ideas into real-world products by combining modern frontend technologies with robust backend systems.
              </p>
              <p>
                Bridging the gap between aesthetic product design and complex technical execution, I deliver applications that don't just look premium—they perform at an enterprise level.
              </p>
            </div>

            {/* Feature Cards Grid (3 Cards) */}
            <div className="grid sm:grid-cols-2 gap-5 pt-4">
               {features.map((feature, idx) => (
                 <div 
                   key={idx} 
                   className={`glass p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-bg)] hover:hover-glow transition-all duration-500 group relative overflow-hidden hover:-translate-y-1.5 ${idx === 2 ? 'sm:col-span-2' : ''}`}
                 >
                   {/* Hover Gradient Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                   
                   <div className="flex flex-col gap-4 relative z-10">
                     <div className="w-12 h-12 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center shadow-inner group-hover:border-primary/40 transition-colors duration-500">
                       {feature.icon}
                     </div>
                     <div>
                       <h4 className="text-white font-bold text-[1.05rem] mb-2">{feature.title}</h4>
                       <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                     </div>
                   </div>
                 </div>
               ))}
            </div>

            <div className="w-full h-px bg-[var(--color-border)] my-4"></div>

            {/* Statistics Row */}
            <div className="grid grid-cols-3 gap-6 pt-2">
              {statistics.map((stat, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <div className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-md">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm font-semibold text-text-secondary uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
