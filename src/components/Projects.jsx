import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, Activity, Users, Shield, Zap } from 'lucide-react';

const projects = [
 {
  title: 'AI SaaS Platform',
  description: 'A full-stack AI-powered platform for content and media generation, featuring structured workflows, real-time processing, and scalable API integrations.',
  features: [
    'AI Content Generation',
    'Multi-Step Workflows',
    'Secure REST APIs'
  ],
  tech: ['React', 'Node.js', 'PostgreSQL', 'OpenAI', 'Cloudinary'],
  github: 'https://github.com',
  demo: 'https://demo.com',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000',
  icon: <Zap size={20} className="text-[#641b30]" />
},
 {
  title: 'Social Media Analytics Dashboard',
  description: 'A full-stack dashboard for managing and analyzing social media performance with real-time insights, automated scheduling, and cross-platform data tracking.',
  features: [
    'Automated Post Scheduling',
    'Analytics Dashboard',
    'Sentiment-Based Insights'
  ],
  tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  github: 'https://github.com',
  demo: 'https://demo.com',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
  icon: <Activity size={20} className="text-[#641b30]" />
},
{
  title: 'Roadside Assistance Platform',
  description: 'A full-stack location-based platform that connects users with nearby emergency services, featuring real-time SOS alerts and intelligent location tracking.',
  features: [
    'Real-time SOS Alerts',
    'Location-Based Services',
    'QR-Based Emergency Access',
      '🚨 SOS Emergency Alerts',
  '📍 Live Location Tracking',
  '🔗 QR-Based Access System'
  ],
  tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
  github: 'https://github.com',
  demo: 'https://demo.com',
  image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2000',
  icon: <Shield size={20} className="text-[#641b30]" />
},
{
  title: 'Human Resource Mannagement System ERP (Odoo)',
  description: 'A role-based HR management system built using Odoo, automating employee management, attendance tracking, and payroll processing with real-time insights.',
  features: [
    'Payroll Automation',
    'Role-Based Access Control',
    'Real-time HR Dashboard'
  ],
  tech: ['Odoo', 'Python', 'PostgreSQL'],
  github: 'https://github.com',
  demo: 'https://demo.com',
  image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000',
  icon: <Users size={20} className="text-[#641b30]" />
}
  // {
  //   title: 'Food Delivery Platform',
  //   description: 'A high-conversion multi-vendor food marketplace supporting complex menu configurations, advanced filtering, and a powerful restaurant management backend.',
  //   features: ['Multi-vendor Cart', 'Live Order Tracking', 'Restaurant Dashboard'],
  //   tech: ['Vue.js', 'Laravel', 'MySQL', 'Pusher', 'Docker'],
  //   github: 'https://github.com',
  //   demo: 'https://demo.com',
  //   image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=2000',
  //   icon: <Users size={20} className="text-[#a32a4d]" />
  // }
];

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-background">
      {/* Background Lighting with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute top-1/3 -left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[180px] -z-10 mix-blend-screen pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card-bg)] text-xs font-semibold tracking-widest text-text-secondary uppercase shadow-sm"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Case Studies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-secondary text-lg font-light max-w-2xl mx-auto"
          >
            A selection of production-grade platforms engineered for scale, highlighting architectural complexity and premium UI execution.
          </motion.p>
        </div>

        {/* Vertical Project Flow */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center group`}
              >
                
                {/* --- IMAGE SIDE --- */}
                <div className="w-full lg:w-3/5">
                  <div className="relative glass p-2 rounded-3xl hover:hover-glow transition-all duration-700 hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(100,27,48,0.2)]">
                    
                    {/* Browser Window Chrome */}
                    <div className="rounded-2xl overflow-hidden glass border border-[var(--color-border)] bg-[var(--color-card-bg)]">
                      {/* Fake browser top bar */}
                      <div className="h-8 bg-[var(--color-border)]/50 border-b border-[var(--color-border)] flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      
                      <div className="relative overflow-hidden aspect-[16/10] bg-background">
                         <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 grayscale-[15%] group-hover:grayscale-0"
                        />
                        {/* Overlay Gradient for readability on edges */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- TEXT SIDE --- */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-8">
                  
                  {/* Title & Description */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-card-bg)] border border-[var(--color-border)] flex items-center justify-center shadow-inner group-hover:border-primary/50 transition-colors duration-500">
                        {project.icon}
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-500">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary text-lg leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Engineering Focus</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary shadow-sm">
                           <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#641b30]"></div>
                           <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--color-card-bg)] border border-[var(--color-border)] text-text-secondary group-hover:border-primary/30 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
