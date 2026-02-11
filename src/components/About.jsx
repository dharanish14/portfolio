import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const journey = [
        {
            year: "2024 - PRESENT",
            title: "SYSTEMS ARCHITECT",
            description: "Developing high-scale software solutions and Android ecosystems with a focus on immersive UX.",
            status: "ACTIVE"
        },
        {
            year: "2023",
            title: "IOT EMBEDDED INTERN",
            description: "Integrated smart vision units and optimized real-time data streaming at Arjun Vision (NSIC).",
            status: "COMPLETED"
        },
        {
            year: "2022",
            title: "MOBILE DEVELOPER",
            description: "Mastered Android ecosystems and Material Design architectures at DLK Development.",
            status: "COMPLETED"
        }
    ];

    return (
        <section id="about" className="py-32 relative">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-24">
                    <span className="text-accent-secondary font-orbitron tracking-[0.6em] text-xs uppercase block mb-4">Professional Timeline</span>
                    <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white">THE JOURNEY</h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Simplified central line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5" />

                    <div className="space-y-16">
                        {journey.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Central Indicator */}
                                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-accent-primary shadow-[0_0_10px_#7000ff] z-10 hidden md:block" />

                                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                                    <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-accent-secondary/30 transition-all group">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-xs font-orbitron text-accent-secondary font-bold tracking-widest">{item.year}</span>
                                            <span className="text-[10px] font-orbitron text-white/40 uppercase">{item.status}</span>
                                        </div>
                                        <h3 className="text-2xl font-black font-orbitron text-white mb-3 group-hover:text-accent-secondary transition-colors">{item.title}</h3>
                                        <p className="text-text-secondary font-inter text-sm leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Ambient Background Blur */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
};

export default About;
