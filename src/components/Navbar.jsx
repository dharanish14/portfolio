```javascript
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'HOME', href: '#home', id: 'home' },
        { name: 'ABOUT', href: '#about', id: 'about' },
        { name: 'PROJECTS', href: '#work', id: 'work' },
        { name: 'SKILLS', href: '#skills', id: 'skills' },
        { name: 'CONTACT', href: '#contact', id: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navLinks[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Map sections to screen positions
    const getOrbPosition = () => {
        switch (activeSection) {
            case 'home': return { top: '2rem', right: '2rem', x: 0, y: 0 };
            case 'about': return { top: 'calc(100% - 8rem)', right: '2rem', x: 0, y: 0 };
            case 'work': return { top: 'calc(100% - 8rem)', right: 'calc(100% - 8rem)', x: 0, y: 0 };
            case 'skills': return { top: '2rem', right: 'calc(100% - 8rem)', x: 0, y: 0 };
            case 'contact': return { top: '50%', right: '2rem', x: 0, y: '-50%' };
            default: return { top: '2rem', right: '2rem', x: 0, y: 0 };
        }
    };

    return (
        <motion.div
            layout
            animate={getOrbPosition()}
            transition={{ type: 'spring', stiffness: 50, damping: 15 }}
            className="fixed z-[2000] w-24 h-24 flex items-center justify-center"
        >
            <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative flex items-center justify-center w-full h-full"
            >
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: activeSection === 'work' || activeSection === 'skills' ? -50 : 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.8, x: activeSection === 'work' || activeSection === 'skills' ? -50 : 50 }}
                            className={`absolute flex flex - col md: flex - row gap - 4 p - 4 bg - black / 60 backdrop - blur - 2xl border border - white / 10 rounded - 2xl md: rounded - full shadow - [0_0_50px_rgba(0, 0, 0, 0.5)] border - accent - secondary / 20
                                ${ activeSection === 'work' || activeSection === 'skills' ? 'left-full ml-6' : 'right-full mr-6' }
`}
                        >
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => setIsHovered(false)}
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
                    className="relative w-20 h-20 md:w-24 md:h-24 cursor-pointer group flex items-center justify-center transform-gpu"
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
        </motion.div>
    );
};

export default Navbar;
```
