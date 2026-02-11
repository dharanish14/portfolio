import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Robo Animation Variants
    const roboVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200 } }
    };

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'ABOUT', href: '#about' },
        { name: 'PROJECTS', href: '#work' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled || isOpen ? 'py-4 backdrop-blur-md bg-black/80 border-b border-white/5' : 'py-6 bg-transparent'}`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center relative">
                    {/* Brand / Home Link - Glowing Ghost Button */}
                    <a href="#home" className="relative group overflow-hidden px-8 py-3 rounded-full bg-transparent border border-accent-secondary/50 shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] hover:border-accent-secondary transition-all duration-300 z-[1100]">
                        <span className="relative z-10 font-orbitron font-bold text-sm tracking-widest text-white group-hover:text-accent-primary transition-colors">
                            HOME
                        </span>
                        <div className="absolute inset-0 bg-accent-secondary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700 ease-in-out" />
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 list-none">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-xs font-orbitron font-bold tracking-[0.2em] text-text-secondary hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-primary to-accent-secondary group-hover:w-full transition-all duration-300" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <div
                        className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer relative z-[1200] rounded-full hover:bg-white/5 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                            className="w-6 h-0.5 bg-accent-secondary origin-center"
                        />
                        <motion.div
                            animate={{ opacity: isOpen ? 0 : 1 }}
                            className="w-6 h-0.5 bg-accent-primary"
                        />
                        <motion.div
                            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                            className="w-6 h-0.5 bg-accent-secondary origin-center"
                        />
                    </div>

                    {/* Robo Scroll Indicator */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 overflow-visible">
                        <motion.div
                            className="h-full bg-gradient-to-r from-transparent via-accent-primary to-accent-secondary relative"
                            style={{ scaleX, transformOrigin: "0%" }}
                        >
                            {/* The Robo Character */}
                            <motion.div
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 flex items-center justify-center"
                                variants={roboVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_10px_#00d4ff]">
                                    <rect x="2" y="8" width="20" height="12" rx="2" fill="#030014" stroke="#00d4ff" strokeWidth="1.5" />
                                    <path d="M6 8V5C6 3.89543 6.89543 3 8 3H16C17.1046 3 18 3.89543 18 5V8" stroke="#00d4ff" strokeWidth="1.5" />
                                    <circle cx="8" cy="14" r="2" fill="#00d4ff" className="animate-pulse" />
                                    <circle cx="16" cy="14" r="2" fill="#00d4ff" className="animate-pulse" />
                                    <path d="M10 18H14" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M22 10V14" stroke="#7000ff" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M2 10V14" stroke="#7000ff" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[1100] bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
                    >
                        {/* Background decorations for mobile menu */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-primary/20 rounded-full blur-[100px] pointer-events-none" />

                        <ul className="flex flex-col items-center gap-8 list-none relative z-10">
                            {navLinks.map((link, idx) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-orbitron font-bold tracking-[0.3em] text-white hover:text-accent-secondary transition-all flex items-center gap-4 group"
                                    >
                                        <span className="text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity text-sm">&lt;</span>
                                        {link.name}
                                        <span className="text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity text-sm">/&gt;</span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
