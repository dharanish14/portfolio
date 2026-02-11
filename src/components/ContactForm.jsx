import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('sending');

    const SERVICE_ID = 'service_id';
    const TEMPLATE_ID = 'template_id';
    const PUBLIC_KEY = 'public_key';

    // Simulation Mode for local testing/previewing bird animation
    if (SERVICE_ID === 'service_id' || TEMPLATE_ID === 'template_id' || PUBLIC_KEY === 'public_key') {
      setTimeout(() => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 6000);
        setLoading(false);
      }, 1500);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 6000);
      }, (error) => {
        setStatus('error');
        setTimeout(() => setStatus(''), 4000);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="contact-container glass relative overflow-hidden min-h-[500px] flex flex-col justify-center">
      {/* Animated Scanning Top Bar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-50"
      />

      <h2 className="font-orbitron font-black text-white text-center mb-8 tracking-[0.3em]">GET IN TOUCH</h2>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success-anim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-10"
          >
            {/* Bird Animation Container */}
            <div className="relative w-full h-40 flex items-center justify-center">
              {/* Message Envelope */}
              <motion.div
                initial={{ scale: 0, y: 0 }}
                animate={{ scale: 1, y: [0, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="absolute z-10"
              >
                <motion.div
                  animate={status === 'success' ? {
                    x: [0, 500],
                    y: [0, -200],
                    scale: [1, 0.5],
                    rotate: [0, 20]
                  } : {}}
                  transition={{ delay: 2, duration: 2, ease: "easeIn" }}
                >
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="30" rx="4" fill="#7000ff" />
                    <path d="M0 5L20 18L40 5" stroke="white" strokeWidth="2" />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Animated Bird (Simplified SVG) */}
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: [-300, 0, 500], y: [50, 0, -200] }}
                transition={{
                  duration: 4,
                  times: [0, 0.5, 1],
                  ease: "easeInOut"
                }}
                className="absolute"
              >
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Wings animation */}
                  <motion.path
                    d="M10 20C10 20 25 5 40 20M10 25C10 25 25 35 40 25"
                    stroke="#00d4ff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    animate={{
                      d: [
                        "M10 20C10 20 25 5 40 20M10 25C10 25 25 35 40 25",
                        "M10 20C10 20 25 -10 40 20M10 25C10 25 25 45 40 25",
                        "M10 20C10 20 25 5 40 20M10 25C10 25 25 35 40 25"
                      ]
                    }}
                    transition={{ repeat: Infinity, duration: 0.4 }}
                  />
                  <path d="M40 22L55 20L40 18V22Z" fill="#00d4ff" />
                </svg>
              </motion.div>
            </div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-accent-secondary font-orbitron text-sm tracking-widest mt-4"
            >
              MESSAGE SENT SUCCESSFULLY!
            </motion.p>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <div className="form-group">
              <label className="block text-[10px] font-orbitron text-text-secondary/50 mb-2 tracking-widest uppercase">Name</label>
              <input type="text" name="user_name" placeholder="John Doe" className="interactive font-inter w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent-primary outline-none transition-all" required />
            </div>
            <div className="form-group">
              <label className="block text-[10px] font-orbitron text-text-secondary/50 mb-2 tracking-widest uppercase">Email</label>
              <input type="email" name="user_email" placeholder="john@example.com" className="interactive font-inter w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent-primary outline-none transition-all" required />
            </div>
            <div className="form-group">
              <label className="block text-[10px] font-orbitron text-text-secondary/50 mb-2 tracking-widest uppercase">Message</label>
              <textarea name="message" placeholder="Type your message here..." rows="4" className="interactive font-inter w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent-primary outline-none transition-all resize-none" required></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(112, 0, 255, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className={`w-full py-4 bg-accent-primary text-white font-orbitron tracking-widest uppercase rounded-lg transition-all ${loading ? 'opacity-50 cursor-wait' : 'hover:bg-accent-primary/80'}`}
            >
              {loading ? 'SENDING...' : 'SEND MESSAGE'}
            </motion.button>

            {status === 'error' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-[10px] font-orbitron mt-4 text-center tracking-widest">
                FAILED TO SEND. CHECK CREDENTIALS.
              </motion.p>
            )}
          </motion.form>
        )}
      </AnimatePresence>

      <style>{`
        .contact-container {
          padding: 1.5rem;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .contact-container {
            padding: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
