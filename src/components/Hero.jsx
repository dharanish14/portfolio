import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    const roles = ["Software Engineer", "Android Developer", "Data Analyst"];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030014] py-20 lg:py-0">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32">
                    {/* Left Content: Text */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-6 md:mb-8"
                        >
                            <span className="font-orbitron text-accent-secondary tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-sm uppercase block mb-4">
                                TAMIL NADU, INDIA | IT STUDENT
                            </span>
                            <div className="h-px w-12 bg-accent-secondary mx-auto lg:mx-0" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative mb-6 md:mb-8"
                        >
                            <h1 className="text-5xl md:text-8xl xl:text-[7.5rem] font-black font-orbitron text-white tracking-tighter leading-[1.1] md:leading-[0.85] flex flex-col relative group">
                                <span className="relative z-10">DHARANISH</span>
                                <span className="absolute top-[100%] left-0 w-full text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent scale-y-[-1] blur-[2px] select-none pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-700 md:block hidden">
                                    DHARANISH
                                </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary opacity-20 blur-[1px] select-none pointer-events-none -mt-2 md:-mt-4 md:hidden">
                                    DHARANISH
                                </span>
                            </h1>
                        </motion.div>

                        <div className="h-8 md:h-12 flex items-center justify-center lg:justify-start mb-8 md:mb-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={roles[currentRole]}
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -15, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="text-sm md:text-2xl font-orbitron font-light text-text-secondary tracking-[0.2em] md:tracking-[0.4em] uppercase"
                                >
                                    {roles[currentRole]}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            transition={{ delay: 0.6 }}
                            className="text-xs md:text-base font-inter text-text-secondary mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            Motivated Information Technology student seeking an entry-level Software Engineer role to contribute to innovative and impactful technology solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col gap-2 mb-10 text-xs md:text-sm font-orbitron tracking-widest text-accent-secondary/80"
                        >
                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <span className="w-1 h-1 rounded-full bg-accent-secondary" />
                                <span>portfolio.dharanish@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <span className="w-1 h-1 rounded-full bg-accent-secondary" />
                                <span>+91 90251 09304</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center justify-center lg:justify-start"
                        >
                            <motion.a
                                href="https://github.com/dharanish14"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 0 25px rgba(112, 0, 255, 0.5)'
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-10 py-3 md:px-12 md:py-4 bg-accent-primary text-white font-orbitron tracking-[0.3em] rounded-full text-[10px] md:text-xs flex items-center justify-center gap-3 group"
                            >
                                <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                <span>GITHUB</span>
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/dharanish-cb"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: 'rgba(0, 212, 255, 0.8)',
                                    color: '#00d4ff'
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-10 py-3 md:px-12 md:py-4 border border-accent-secondary text-accent-secondary font-orbitron tracking-[0.3em] rounded-full text-[10px] md:text-xs flex items-center justify-center gap-3 group"
                            >
                                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                <span>LINKEDIN</span>
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right Content: Optimized Circular Profile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -20, 0]
                        }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                            y: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        className="relative order-1 lg:order-2"
                    >
                        {/* Interactive Outer Ring */}
                        <div className="absolute -inset-4 md:-inset-6 border border-accent-secondary/20 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute -inset-8 md:-inset-10 border border-accent-primary/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />

                        <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-2 md:border-4 border-white/5 shadow-2xl group">
                            <img
                                src={profileImg}
                                alt="Dharanish Profile"
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 shadow-inner"
                            />

                            {/* Simple Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
