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

                        {/* Advanced Contact Hub */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-10 w-full max-w-xl mx-auto lg:mx-0">
                            {/* Email Button - Flying Animation */}
                            <motion.a
                                href="mailto:dharaanish@gmail.com"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                whileHover="hover"
                                whileTap="tap"
                                className="relative flex items-center gap-2 sm:gap-3 px-3 py-3 sm:px-6 sm:py-4 overflow-hidden border border-transparent bg-transparent rounded-2xl group cursor-pointer transition-all duration-500 hover:bg-white/10 hover:border-white/20"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-accent-secondary/30 to-transparent translate-x-[-100%]"
                                    variants={{ hover: { x: '100%', boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' } }}
                                    transition={{ duration: 0.6 }}
                                />
                                <motion.div
                                    variants={{ hover: { x: [0, 5, -5, 0], y: [0, -5, 5, 0] } }}
                                    className="relative z-10"
                                >
                                    <svg className="w-5 h-5 text-accent-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </motion.div>
                                <span className="relative z-10 font-orbitron text-[8px] md:text-xs tracking-wider text-text-secondary group-hover:text-white transition-colors truncate">dharaanish@gmail.com</span>
                            </motion.a>

                            {/* Phone Button - Ringing Animation */}
                            <motion.a
                                href="tel:+919629023423"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                whileHover="hover"
                                whileTap="tap"
                                className="relative flex items-center gap-2 sm:gap-3 px-3 py-3 sm:px-6 sm:py-4 overflow-hidden border border-transparent bg-transparent rounded-2xl group cursor-pointer transition-all duration-500 hover:bg-white/10 hover:border-white/20"
                            >
                                <motion.div
                                    className="absolute inset-0 rounded-2xl border-2 border-accent-secondary opacity-0"
                                    variants={{ hover: { scale: [1, 1.2], opacity: [0.6, 0], boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)' } }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                />
                                <motion.div
                                    variants={{ hover: { rotate: [0, 10, -10, 10, 0] } }}
                                    className="relative z-10"
                                >
                                    <svg className="w-5 h-5 text-accent-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </motion.div>
                                <span className="relative z-10 font-orbitron text-[10px] md:text-sm tracking-widest text-text-secondary group-hover:text-white transition-colors truncate">+91 9629023423</span>
                            </motion.a>

                            {/* GitHub Button - Glitch Animation */}
                            <motion.a
                                href="https://github.com/dharanish14"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                whileHover="hover"
                                whileTap="tap"
                                className="relative flex items-center gap-2 sm:gap-3 px-3 py-3 sm:px-6 sm:py-4 overflow-hidden border border-transparent bg-transparent rounded-2xl group cursor-pointer transition-all duration-500 hover:bg-white/10 hover:border-white/20"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-accent-secondary/40"
                                    variants={{ hover: { x: ['100%', '-100%'], boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }, initial: { x: '100%' } }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.div
                                    variants={{ hover: { skewX: [0, 20, -20, 0] } }}
                                    className="relative z-10"
                                >
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </motion.div>
                                <span className="relative z-10 font-orbitron text-[10px] md:text-sm tracking-widest text-text-secondary group-hover:text-white transition-colors truncate">GITHUB</span>
                            </motion.a>

                            {/* LinkedIn Button - Liquid Pulse */}
                            <motion.a
                                href="https://www.linkedin.com/in/dharanish-cb"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.0 }}
                                whileHover="hover"
                                whileTap="tap"
                                className="relative flex items-center gap-2 sm:gap-3 px-3 py-3 sm:px-6 sm:py-4 overflow-hidden border border-transparent bg-transparent rounded-2xl group cursor-pointer transition-all duration-500 hover:bg-white/10 hover:border-white/20"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-accent-secondary/60"
                                    variants={{ hover: { translateY: [100, 0], boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' } }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />
                                <motion.div
                                    variants={{ hover: { scale: [1, 1.1, 1] } }}
                                    className="relative z-10"
                                >
                                    <svg className="w-5 h-5 text-[#0077b5]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </motion.div>
                                <span className="relative z-10 font-orbitron text-[10px] md:text-sm tracking-widest text-text-secondary group-hover:text-white transition-colors truncate">LINKEDIN</span>
                            </motion.a>
                        </div>
                    </div>

                    {/* Right Content: Optimized Circular Profile */}
                    <div className="flex flex-col items-center order-1 lg:order-2 gap-8">
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
                            className="relative"
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

                        {/* Location Text - Moved Below Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-center"
                        >
                            <span className="font-orbitron text-accent-secondary tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase block mb-3">
                                TAMIL NADU, INDIA | IT STUDENT
                            </span>
                            <div className="h-px w-12 bg-accent-secondary mx-auto" />
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
