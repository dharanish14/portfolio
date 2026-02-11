<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ company, role, period, details, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="group relative h-[420px] perspective-1000"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 rounded-2xl blur group-hover:opacity-100 transition duration-1000 opacity-30" />

            <div className="relative glass-panel p-10 rounded-2xl h-full flex flex-col justify-between border-white/5 overflow-hidden transition-all duration-500 group-hover:border-accent-secondary/30">
                {/* HUD Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="z-10">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-[10px] font-orbitron text-accent-secondary tracking-[0.3em] font-bold">{period}</span>
                        <div className="w-2 h-2 rounded-full bg-accent-secondary shadow-[0_0_10px_#00d4ff]" />
                    </div>

                    <h3 className="text-3xl font-black font-orbitron text-white mb-2 group-hover:neon-text-blue transition-all">{company}</h3>
                    <p className="text-accent-primary font-orbitron text-xs tracking-widest uppercase mb-8">{role}</p>

                    <ul className="space-y-4">
                        {details.map((detail, idx) => (
                            <li key={idx} className="flex gap-4 items-start text-sm text-text-secondary font-inter">
                                <span className="text-accent-secondary mt-1.5 w-1 h-1 rounded-full bg-accent-secondary" />
                                <span className="opacity-70 group-hover:opacity-100 transition-opacity">{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Status Indicator */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-orbitron text-white/30 uppercase tracking-[0.4em]">Node Connection Stable</span>
                    <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-1 h-1 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
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
            role: "IoT EMBEDDED INTERN",
            period: "2023",
            details: [
                "Specialized in IoT sensors and microcontroller integration.",
                "Developed firmware for embedded systems monitoring.",
                "Optimized real-time data streaming protocols."
            ]
        },
        {
            company: "DLK Career Development",
            role: "ANDROID DEVELOPER TRAINING",
            period: "2022",
            details: [
                "Mastered advanced Java and Kotlin for Android.",
                "Built responsive mobile UIs with Material Design.",
                "Focused on high-performance mobile architectures."
            ]
        }
    ];

    return (
        <section id="experience" className="py-32 relative">
            <div className="container mx-auto px-4">
                <div className="mb-24 text-right">
                    <span className="text-accent-primary font-orbitron tracking-[0.5em] text-xs uppercase block mb-4">Professional Experience</span>
                    <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white">EXPERIENCE</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
=======
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ company, role, period, details, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="group relative h-[420px] perspective-1000"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 rounded-2xl blur group-hover:opacity-100 transition duration-1000 opacity-30" />

            <div className="relative glass-panel p-10 rounded-2xl h-full flex flex-col justify-between border-white/5 overflow-hidden transition-all duration-500 group-hover:border-accent-secondary/30">
                {/* HUD Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="z-10">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-[10px] font-orbitron text-accent-secondary tracking-[0.3em] font-bold">{period}</span>
                        <div className="w-2 h-2 rounded-full bg-accent-secondary shadow-[0_0_10px_#00d4ff]" />
                    </div>

                    <h3 className="text-3xl font-black font-orbitron text-white mb-2 group-hover:neon-text-blue transition-all">{company}</h3>
                    <p className="text-accent-primary font-orbitron text-xs tracking-widest uppercase mb-8">{role}</p>

                    <ul className="space-y-4">
                        {details.map((detail, idx) => (
                            <li key={idx} className="flex gap-4 items-start text-sm text-text-secondary font-inter">
                                <span className="text-accent-secondary mt-1.5 w-1 h-1 rounded-full bg-accent-secondary" />
                                <span className="opacity-70 group-hover:opacity-100 transition-opacity">{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Status Indicator */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-orbitron text-white/30 uppercase tracking-[0.4em]">Node Connection Stable</span>
                    <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-1 h-1 bg-accent-primary rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
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
            role: "IoT EMBEDDED INTERN",
            period: "2023",
            details: [
                "Specialized in IoT sensors and microcontroller integration.",
                "Developed firmware for embedded systems monitoring.",
                "Optimized real-time data streaming protocols."
            ]
        },
        {
            company: "DLK Career Development",
            role: "ANDROID DEVELOPER TRAINING",
            period: "2022",
            details: [
                "Mastered advanced Java and Kotlin for Android.",
                "Built responsive mobile UIs with Material Design.",
                "Focused on high-performance mobile architectures."
            ]
        }
    ];

    return (
        <section id="experience" className="py-32 relative">
            <div className="container mx-auto px-4">
                <div className="mb-24 text-right">
                    <span className="text-accent-primary font-orbitron tracking-[0.5em] text-xs uppercase block mb-4">Professional Experience</span>
                    <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white">EXPERIENCE</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
>>>>>>> 1dfa24c3c23ef675e975c529c9833de5d7e8655c
