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
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                            className="absolute right-full mr-4 flex gap-4 p-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl overflow-hidden"
                        >
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="px-4 py-2 text-[10px] font-orbitron font-bold tracking-widest text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all whitespace-nowrap"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* The Floating Orb Substance */}
                <motion.div
                    animate={{
                        scale: isHovered ? 0.9 : [1, 1.05, 1],
                        rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                    }}
                    className="relative w-16 h-16 cursor-pointer"
                    onClick={() => setIsHovered(!isHovered)}
                >
                    {/* Outer Glowing Ring */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary via-accent-secondary to-accent-tertiary rounded-full blur-md opacity-50 animate-pulse" />

                    {/* Inner Core */}
                    <div className="absolute inset-1 bg-black/80 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="z-10 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>

                        {/* Liquid Substance Effect */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute inset-0 bg-accent-secondary/20 blur-xl rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Navbar;
