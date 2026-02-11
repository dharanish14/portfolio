import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, tech, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ y: -10 }}
            className="group relative h-full"
        >
            <div className="relative glass-panel p-8 rounded-2xl h-full flex flex-col justify-between border-white/5 group-hover:border-accent-secondary/50 transition-all duration-500 bg-white/[0.01] hover:bg-white/[0.03]">
                <div className="z-10">
                    <div className="flex gap-2 flex-wrap mb-6">
                        {tech.map((t, idx) => (
                            <span key={idx} className="text-[9px] font-orbitron bg-white/5 border border-white/10 px-3 py-1 rounded-sm text-accent-secondary uppercase tracking-widest">
                                {t}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-3xl font-black font-orbitron text-white leading-tight mb-4 group-hover:neon-text-blue transition-all duration-300">
                        {title}
                    </h3>

                    <p className="text-text-secondary font-inter text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                        {description}
                    </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-end">
                    <div className="space-y-1">
                        <div className="text-[10px] font-orbitron text-accent-primary uppercase tracking-widest">Completed</div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                            <span className="text-[10px] font-orbitron text-white">LIVE PROJECT</span>
                        </div>
                    </div>

                    <motion.div
                        whileHover={{ x: 5 }}
                        className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-accent-secondary transition-colors"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-secondary">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "FALL SAFE DETECTION",
            tech: ["IOT", "PYTHON", "AI"],
            description: "An advanced wearable system designed for elderly safety using real-time motion sensors and alert protocols."
        },
        {
            title: "CGPA CALCULATOR",
            tech: ["JAVA", "ANDROID"],
            description: "A precision-built mobile tool for engineering students to track and predict academic trajectories."
        },
        {
            title: "SECURE PASSWORD HASHER",
            tech: ["SQL", "SECURITY", "PYTHON"],
            description: "A high-security cryptographic tool for managing and safeguarding digital identities with nested salt-hashing."
        }
    ];

    return (
        <section id="work" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-16 text-right">
                    <span className="text-secondary font-orbitron tracking-[0.4em] text-sm uppercase block">My Work</span>
                    <h2 className="text-4xl md:text-7xl font-orbitron font-black text-white mt-4">FEATURED PROJECTS</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((proj, index) => (
                        <ProjectCard key={index} {...proj} index={index} />
                    ))}
                </div>
            </div>

            {/* Background glitch effect element */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse" />
        </section>
    );
};

export default Projects;
