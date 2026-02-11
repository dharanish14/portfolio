import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ company, role, period, details, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="group relative h-auto"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-tertiary/10 rounded-2xl blur group-hover:opacity-100 transition duration-1000 opacity-30" />

            <div className="relative glass-panel p-6 md:p-10 rounded-2xl h-full flex flex-col border-white/5 overflow-hidden transition-all duration-500 group-hover:border-accent-secondary/30">
                {/* HUD Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="z-10 flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-[9px] md:text-[10px] font-orbitron text-accent-secondary tracking-[0.2em] md:tracking-[0.3em] font-bold">{period}</span>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent-secondary shadow-[0_0_10px_#00d4ff]" />
                    </div>

                    <h3 className="text-xl md:text-3xl font-black font-orbitron text-white mb-2 group-hover:neon-text-blue transition-all">{company}</h3>
                    <p className="text-accent-primary font-orbitron text-[10px] md:text-xs tracking-widest uppercase mb-6 md:mb-8">{role}</p>

                    <ul className="space-y-3 md:space-y-4">
                        {details.map((detail, idx) => (
                            <li key={idx} className="flex gap-3 md:gap-4 items-start text-xs md:text-sm text-text-secondary font-inter">
                                <span className="text-accent-secondary mt-1.5 w-1 h-1 rounded-full bg-accent-secondary flex-shrink-0" />
                                <span className="opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed">{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Status Indicator */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[8px] md:text-[9px] font-orbitron text-white/30 uppercase tracking-[0.3em] md:tracking-[0.4em]">Hardware Link Stable</span>
                    <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-0.5 h-0.5 md:w-1 md:h-1 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const experiences = [
        {
            company: "Arjun Vision (NSIC)",
            role: "ANDROID DEVELOPMENT INTERN",
            period: "JUNE 2024 – JULY 2024",
            details: [
                "Built Android applications using Java with modular UI components.",
                "Implemented core business logic, functional testing, and documentation.",
                "Contributed to UI/UX design improvements for high-impact results."
            ]
        },
        {
            company: "DLK Career Development",
            role: "IOT WITH EMBEDDED TRAINING",
            period: "NOV 2024 – DEC 2024",
            details: [
                "Worked on Arduino-based systems including sensor interfacing and testing.",
                "Embedded programming, hardware signal acquisition, and validation.",
                "Executed system-level workflows for precise IoT communication."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4">
                <div className="mb-16 md:mb-24 text-right">
                    <span className="text-accent-primary font-orbitron tracking-[0.4em] md:tracking-[0.5em] text-[10px] md:text-xs uppercase block mb-4">Professional Milestones</span>
                    <h2 className="text-4xl md:text-7xl font-black font-orbitron text-white">EXPERIENCE</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
