import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpaceshipIntro = ({ onComplete }) => {
    const [phase, setPhase] = useState('entering'); // entering, shooting, warping, exiting

    useEffect(() => {
        const sequence = async () => {
            // Enter
            await new Promise(r => setTimeout(r, 1500));
            setPhase('shooting');

            // Shoot
            await new Promise(r => setTimeout(r, 1000));
            setPhase('warping');

            // Warp
            await new Promise(r => setTimeout(r, 1500));
            setPhase('exiting');

            // Exit
            await new Promise(r => setTimeout(r, 800));
            onComplete();
        };
        sequence();
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[9999] bg-[#030014] flex items-center justify-center overflow-hidden pointer-events-none">
            {/* Stars background */}
            <div className="absolute inset-0 opacity-30">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2}px`,
                            height: `${Math.random() * 2}px`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            <AnimatePresence>
                {phase !== 'exiting' && (
                    <motion.div
                        initial={{ x: '-150%', y: '50%', rotate: 45, scale: 0.5 }}
                        animate={
                            phase === 'entering' ? { x: '0%', y: '0%', rotate: 0, scale: 1 } :
                                phase === 'shooting' ? { x: '0%', y: '0%', rotate: 0, scale: 1 } :
                                    phase === 'warping' ? { x: '250%', y: '-150%', rotate: -45, scale: 2, skewX: -20 } : {}
                        }
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: phase === 'warping' ? 0.8 : 1.2,
                            ease: phase === 'warping' ? "circIn" : "circOut"
                        }}
                        className="relative"
                    >
                        {/* Futuristic Spaceship SVG */}
                        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]">
                            <path d="M110 40L40 10L50 40L40 70L110 40Z" fill="#7000ff" fillOpacity="0.8" stroke="#00d4ff" strokeWidth="2" />
                            <path d="M40 25L10 35L10 45L40 55" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="65" cy="40" r="4" fill="#00d4ff" className="animate-pulse" />

                            {/* Cockpit */}
                            <path d="M70 35C70 35 85 35 90 40C85 45 70 45 70 45V35Z" fill="#00d4ff" fillOpacity="0.3" stroke="#00d4ff" />

                            {/* Engine Glow */}
                            <motion.path
                                d="M10 38H5M10 42H5"
                                stroke="#7000ff"
                                strokeWidth="3"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 0.2 }}
                            />
                        </svg>

                        {/* Laser Beam */}
                        <AnimatePresence>
                            {phase === 'shooting' && (
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: 1000, opacity: [0, 1, 0.8, 0] }}
                                    transition={{ duration: 0.5, times: [0, 0.2, 0.8, 1] }}
                                    className="absolute top-1/2 left-[90%] h-[2px] bg-gradient-to-r from-accent-secondary to-transparent shadow-[0_0_15px_#00d4ff]"
                                    style={{ transform: 'translateY(-50%)' }}
                                />
                            )}
                        </AnimatePresence>

                        {/* Engine Trails during warp */}
                        {phase === 'warping' && (
                            <div className="absolute -left-20 top-1/2 -translate-y-1/2 flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: 200, opacity: [0, 0.5, 0] }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                        className="h-[1px] bg-accent-primary blur-[1px]"
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cinematic flash during warp finish */}
            <AnimatePresence>
                {phase === 'warping' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.2, 0] }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="absolute inset-0 bg-white"
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default SpaceshipIntro;
