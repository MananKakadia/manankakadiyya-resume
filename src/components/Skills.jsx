import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTailwindcss, SiNextdotjs, SiJavascript, SiTypescript,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase,
  SiGit, SiGithub, SiFigma, SiDocker, SiPostman
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact className="w-10 h-10" color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10" color="#FFFFFF" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-10 h-10" color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-10 h-10" color="#3178C6" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="w-10 h-10" color="#06B6D4" /> },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="w-10 h-10" color="#339933" /> },
      { name: "Express", icon: <SiExpress className="w-10 h-10" color="#FFFFFF" /> },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="w-10 h-10" color="#47A248" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10" color="#4169E1" /> },
      { name: "Firebase", icon: <SiFirebase className="w-10 h-10" color="#FFCA28" /> },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="w-10 h-10" color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub className="w-10 h-10" color="#FFFFFF" /> },
      { name: "Docker", icon: <SiDocker className="w-10 h-10" color="#2496ED" /> },
      { name: "Postman", icon: <SiPostman className="w-10 h-10" color="#FF6C37" /> },
      { name: "Figma", icon: <SiFigma className="w-10 h-10" color="#F24E1E" /> },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100 } 
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-background">
      {/* Background Lighting using brand color #641b30 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card-bg)] text-xs font-semibold tracking-widest text-text-secondary uppercase shadow-sm"
          >
            Core Arsenal
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ecosystem</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-secondary text-lg font-light max-w-2xl mx-auto"
          >
            Mastery of modern frameworks and high-performance infrastructure tools required for shipping enterprise grade products.
          </motion.p>
        </div>

        <div className="space-y-24">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-10"
            >
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  {category.title}
                </h3>
                <div className="flex-grow h-px bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {category.skills.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="aspect-square p-6 rounded-2xl flex flex-col items-center justify-center gap-5 group cursor-pointer relative overflow-hidden transition-all duration-300 bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary hover:bg-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(100,27,48,0.4)]"
                  >
                    {/* Dynamic Glow Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    {/* Icon Container */}
                    <div className="z-10 drop-shadow-md group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 transform group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100">
                      {tech.icon}
                    </div>
                    
                    {/* Technology Name */}
                    <span className="text-text-secondary group-hover:text-white font-medium tracking-wide text-sm z-10 transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
