import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("SUCCESS: Your message has been sent. I'll get back to you soon!");
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-accent-secondary font-orbitron tracking-[0.5em] text-xs uppercase block mb-4">Get In Touch</span>
                            <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white leading-tight">
                                SAY<br />
                                <span className="text-accent-primary">HELLO</span>
                            </h2>
                        </div>

                        <p className="text-text-secondary font-inter text-lg leading-relaxed max-w-md">
                            I'm always open to new opportunities and collaborations. Feel free to drop me a message!
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass-panel p-8 md:p-12 rounded-3xl relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent" />

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-6">
                                {[
                                    { label: "NAME", type: "text", placeholder: "Your name..." },
                                    { label: "EMAIL", type: "email", placeholder: "Your email..." },
                                    { label: "MESSAGE", type: "textarea", placeholder: "Write your message here..." }
                                ].map((field, idx) => (
                                    <motion.div
                                        key={field.label}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                        className="space-y-2"
                                    >
                                        <label className="text-[10px] font-orbitron text-accent-primary tracking-widest uppercase">{field.label}</label>
                                        {field.type === "textarea" ? (
                                            <textarea
                                                required
                                                rows="4"
                                                placeholder={field.placeholder}
                                                className="w-full bg-white/5 border border-white/10 p-4 rounded-sm text-white font-orbitron text-sm focus:border-accent-secondary outline-none transition-all resize-none hover:bg-white/[0.07]"
                                            />
                                        ) : (
                                            <input
                                                required
                                                type={field.type}
                                                placeholder={field.placeholder}
                                                className="w-full bg-white/5 border border-white/10 p-4 rounded-sm text-white font-orbitron text-sm focus:border-accent-secondary outline-none transition-all hover:bg-white/[0.07]"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 bg-accent-primary text-white font-orbitron tracking-[0.3em] text-xs hover:bg-accent-primary/80 transition-all rounded-sm shadow-[0_0_20px_rgba(112,0,255,0.3)]"
                            >
                                SEND MESSAGE
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
