import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            category: "PROGRAMMING",
            skills: ["JAVA", "PYTHON", "SQL", "C/C++"]
        },
        {
            category: "WEB & MOBILE",
            skills: ["JAVASCRIPT", "HTML/CSS", "REACT", "ANDROID"]
        },
        {
            category: "TOOLS & AI",
            skills: ["GOOGE AI", "POWER BI", "TABLEAU", "IOT/ARDUINO"]
        }
    ];

    return (
        <section id="skills" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-16 md:mb-20"
                >
                    <span className="text-accent-secondary font-orbitron tracking-[0.4em] text-[10px] md:text-xs uppercase block mb-4">Competency Matrix</span>
                    <h2 className="text-3xl md:text-6xl font-black font-orbitron text-white">TECH STACK</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={cat.category}
                            initial={{ opacity: 0, x: -30 }} // Sliding entrance
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="space-y-6 md:space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-8 md:w-10 h-px bg-accent-primary" />
                                <h3 className="text-sm md:text-lg font-orbitron text-accent-primary tracking-widest">{cat.category}</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                {cat.skills.map((skill, idx) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.5, rotateY: 90 }} // 3D Pop entrance
                                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: (i * 0.2) + (idx * 0.1),
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            y: -5,
                                            boxShadow: "0 10px 30px -10px rgba(0, 212, 255, 0.4)",
                                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                                            borderColor: "rgba(0, 212, 255, 0.3)"
                                        }}
                                        className="glass-panel p-3 md:p-4 rounded-lg flex flex-col items-center justify-center gap-2 border-white/5 transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className="text-[9px] md:text-xs font-orbitron text-white group-hover:text-accent-secondary transition-colors duration-300 text-center">{skill}</div>
                                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-1">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${80 + (idx * 5) % 15}%` }}
                                                transition={{ duration: 1.5, delay: 0.8 + (idx * 0.1) }}
                                                className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary shadow-[0_0_10px_#7000ff]"
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent rotate-12 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-secondary/10 to-transparent -rotate-12 pointer-events-none" />
        </section>
    );
};

export default Skills;
