import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-700 ${scrolled || isOpen ? 'py-4 backdrop-blur-3xl bg-black/80 border-b border-white/5' : 'py-10 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="hidden md:block" /> {/* Spacer */}

                    <ul className="hidden md:flex gap-12 list-none">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <motion.a
                                    href={link.href}
                                    className="text-[10px] font-orbitron font-bold tracking-[0.3em] text-text-secondary hover:text-white transition-all relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent-secondary group-hover:w-full transition-all duration-500" />
                                    <span className="absolute -bottom-2 right-0 w-0 h-[1px] bg-accent-primary group-hover:w-full transition-all duration-500 delay-100" />
                                </motion.a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <div
                        className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer relative z-[1100]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
                            className="w-full h-px bg-accent-secondary"
                        />
                        <motion.div
                            animate={{ opacity: isOpen ? 0 : 1 }}
                            className="w-2/3 h-px bg-accent-primary ml-auto"
                        />
                        <motion.div
                            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
                            className="w-full h-px bg-accent-secondary"
                        />
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[900] bg-black/95 backdrop-blur-2xl md:hidden flex items-center justify-center"
                    >
                        <ul className="flex flex-col items-center gap-12 list-none">
                            {navLinks.map((link, idx) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-orbitron font-bold tracking-[0.4em] text-text-secondary hover:text-accent-secondary transition-all"
                                    >
                                        {link.name}
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
