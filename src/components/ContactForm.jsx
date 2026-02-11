import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // IMPORTANT: Replace these with your actual EmailJS credentials
  const SERVICE_ID = 'service_id';
  const TEMPLATE_ID = 'template_id';
  const PUBLIC_KEY = 'public_key';

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('sending');

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

              {/* Realistic Bird Animation */}
              <motion.div
                initial={{ x: -400, y: 100 }}
                animate={{
                  x: [-400, -50, 0, 100, 600],
                  y: [100, 20, 0, -50, -300],
                  scale: [0.8, 1, 1, 0.9, 0.5]
                }}
                transition={{
                  duration: 5,
                  times: [0, 0.4, 0.5, 0.6, 1],
                  ease: "easeInOut"
                }}
                className="absolute"
              >
                <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Bird Body & Wings with path morphing */}
                  <motion.path
                    fill="#00d4ff"
                    animate={{
                      d: [
                        "M50 30 C50 30 70 10 90 30 C70 50 50 30 50 30 Z M50 30 C50 30 30 10 10 30 C30 50 50 30 50 30 Z", // Wings down
                        "M50 30 C50 30 70 0 90 20 C70 40 50 30 50 30 Z M50 30 C50 30 30 0 10 20 C30 40 50 30 50 30 Z",  // Wings up
                        "M50 30 C50 30 70 10 90 30 C70 50 50 30 50 30 Z M50 30 C50 30 30 10 10 30 C30 50 50 30 50 30 Z"  // Wings down
                      ]
                    }}
                    transition={{ repeat: Infinity, duration: 0.3, ease: "easeInOut" }}
                  />
                  {/* Head */}
                  <circle cx="50" cy="25" r="5" fill="#00d4ff" />
                  <path d="M54 25L62 25L54 28V25Z" fill="#ffaa00" /> {/* Beak */}
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
              <input type="text" name="user_name" placeholder="Your Name" className="interactive font-inter w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent-primary outline-none transition-all" required />
            </div>
            <div className="form-group">
              <label className="block text-[10px] font-orbitron text-text-secondary/50 mb-2 tracking-widest uppercase">Email</label>
              <input type="email" name="user_email" placeholder="Your Email" className="interactive font-inter w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent-primary outline-none transition-all" required />
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
