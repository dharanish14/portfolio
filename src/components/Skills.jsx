import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            category: "CORE SYSTEMS",
            skills: ["JAVA", "PYTHON", "C/C++", "SQL"]
        },
        {
            category: "DEVELOPMENT",
            skills: ["REACT", "ANDROID SDK", "NODE.JS", "TAILWIND"]
        },
        {
            category: "DATA ANALYSIS",
            skills: ["PANDAS", "NUMPY", "MATPLOTLIB", "SCIKIT-LEARN"]
        }
    ];

    return (
        <section id="skills" className="py-32 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-20"
                >
                    <span className="text-accent-secondary font-orbitron tracking-[0.4em] text-xs uppercase block mb-4">My Skills</span>
                    <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white">TECH STACK</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={cat.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-px bg-accent-primary" />
                                <h3 className="text-lg font-orbitron text-accent-primary tracking-widest">{cat.category}</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {cat.skills.map((skill, idx) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: (i * 0.1) + (idx * 0.05) }}
                                        whileHover={{
                                            scale: 1.05,
                                            y: -5,
                                            boxShadow: "0 10px 30px -10px rgba(0, 212, 255, 0.3)",
                                            backgroundColor: "rgba(255, 255, 255, 0.05)"
                                        }}
                                        className="glass-panel p-4 rounded-lg flex flex-col items-center justify-center gap-2 border-white/5 transition-all duration-300 group"
                                    >
                                        <div className="text-xs font-orbitron text-white group-hover:text-accent-secondary transition-colors duration-300">{skill}</div>
                                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-1">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${75 + (idx * 5) % 20}%` }}
                                                transition={{ duration: 1.5, delay: 0.5 + (idx * 0.1) }}
                                                className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent rotate-12" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-secondary/20 to-transparent -rotate-12" />
        </section>
    );
};

export default Skills;
