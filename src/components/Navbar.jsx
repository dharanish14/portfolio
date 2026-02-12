import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'ABOUT', href: '#about' },
        { name: 'PROJECTS', href: '#work' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <div className="fixed top-8 right-8 z-[2000]">
            <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative flex items-center justify-end"
            >
                {/* HUD Label */}
                <motion.div
                    animate={{ opacity: isHovered ? 1 : 0.4 }}
                    className="absolute right-full mr-12 hidden md:block"
                >
                    <span className="text-[10px] font-orbitron font-bold tracking-[0.5em] text-accent-secondary/60 uppercase pointer-events-none whitespace-nowrap">
                        Nav System Active
                    </span>
                </motion.div>

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.8, x: 50 }}
                            className="absolute right-full mr-6 flex flex-col md:flex-row gap-4 p-4 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] border-accent-secondary/20"
                        >
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="px-6 py-2 text-[10px] font-orbitron font-black tracking-[0.3em] text-white/50 hover:text-white hover:bg-accent-primary/20 rounded-full transition-all whitespace-nowrap border border-transparent hover:border-accent-primary/30"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* The HUD Core */}
                <motion.div
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                    }}
                    className="relative w-20 h-20 md:w-24 md:h-24 cursor-pointer group flex items-center justify-center"
                    onClick={() => setIsHovered(!isHovered)}
                >
                    {/* Multiple HUD Rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-dashed border-accent-primary/30 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 border border-accent-secondary/40 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 border border-t-accent-tertiary border-transparent rounded-full opacity-60"
                    />

                    {/* Ambient Glow */}
                    <div className="absolute inset-0 bg-accent-primary/10 rounded-full blur-2xl group-hover:bg-accent-primary/20 transition-colors" />

                    {/* Inner Core */}
                    <div className="relative w-12 h-12 md:w-16 md:h-16 bg-black/90 backdrop-blur-md rounded-full border border-white/20 shadow-[0_0_20px_rgba(112,0,255,0.4)] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-transparent" />

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="z-10 text-white/80 group-hover:text-white transition-colors">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>

                        {/* Interactive Glitch Pulse */}
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-accent-secondary/30 blur-xl rounded-full"
                        />
                    </div>

                    {/* Scanning Line Effect */}
                    <motion.div
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[1px] bg-white/40 blur-[1px] z-20 pointer-events-none opacity-20"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Navbar;
