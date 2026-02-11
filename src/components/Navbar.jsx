import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-700 ${scrolled ? 'py-4 backdrop-blur-3xl bg-black/60 border-b border-white/5' : 'py-10 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    className="flex items-center gap-3 cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                >
                    <span className="font-orbitron font-black text-xl tracking-tighter text-white">DHARANISH<span className="text-accent-secondary opacity-50">.</span></span>
                </motion.div>

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

                <div className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer">
                    <div className="w-full h-px bg-accent-secondary" />
                    <div className="w-2/3 h-px bg-accent-primary ml-auto" />
                    <div className="w-full h-px bg-accent-secondary" />
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
