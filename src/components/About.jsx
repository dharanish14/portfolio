import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const journey = [
        {
            year: "MARCH 2025",
            title: "🏆 UI/UX DESIGN WINNER",
            description: "Secured 1st Place in the UI/UX Designing Competition at RMD Engineering College, Chennai.",
            status: "ACHIEVEMENT"
        },
        {
            year: "2022 - 2026",
            title: "B.TECH INFORMATION TECHNOLOGY",
            description: "Currently pursuing at Velammal Engineering College, Chennai. Maintaining a strong CGPA of 8.47/10.",
            status: "STUDENT"
        },
        {
            year: "2021",
            title: "HSC (MAY 2021)",
            description: "Completed at Bharathi Matriculation School with an impressive 90.16% score.",
            status: "COMPLETED"
        },
        {
            year: "2019",
            title: "SSLC (MAY 2019)",
            description: "Completed at Bharathi Matriculation School with a stellar 96.00% score.",
            status: "COMPLETED"
        }
    ];

    return (
        <section id="about" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-accent-secondary font-orbitron tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-xs uppercase block mb-4">Academic & Recognition</span>
                    <h2 className="text-3xl md:text-7xl font-black font-orbitron text-white">THE JOURNEY</h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Simplified central line - hidden on very small screens or made more subtle */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] md:w-[2px] bg-white/5" />

                    <div className="space-y-12 md:space-y-16">
                        {journey.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Central Indicator */}
                                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent-primary shadow-[0_0_10px_#7000ff] z-10 hidden md:block" />

                                <div className="w-full md:w-[45%] pl-10 md:pl-0">
                                    <div className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-2xl hover:border-accent-secondary/30 transition-all group">
                                        <div className="flex justify-between items-center mb-3 md:mb-4">
                                            <span className="text-[10px] md:text-xs font-orbitron text-accent-secondary font-bold tracking-widest">{item.year}</span>
                                            <span className="text-[8px] md:text-[10px] font-orbitron text-white/40 uppercase">{item.status}</span>
                                        </div>
                                        <h3 className="text-lg md:text-2xl font-black font-orbitron text-white mb-2 md:mb-3 group-hover:text-accent-secondary transition-colors">{item.title}</h3>
                                        <p className="text-text-secondary font-inter text-xs md:text-sm leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
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
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
};

export default About;
