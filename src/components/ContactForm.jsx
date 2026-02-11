import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('sending');

    emailjs.sendForm(
      'service_id', // Placeholder - User should replace
      'template_id', // Placeholder - User should replace
      form.current,
      'public_key' // Placeholder - User should replace
    )
      .then((result) => {
        setStatus('success');
        form.current.reset();
      }, (error) => {
        setStatus('error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="contact-container glass relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary opacity-50" />

      <h2 className="font-orbitron font-black text-white">SECURE TRANSMISSION</h2>

      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <input type="text" name="user_name" placeholder="IDENTIFIER (NAME)" className="interactive font-orbitron" required />
        </div>
        <div className="form-group">
          <input type="email" name="user_email" placeholder="ENCRYPTION KEY (EMAIL)" className="interactive font-orbitron" required />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="DATA PAYLOAD (MESSAGE)" rows="5" className="interactive font-orbitron" required></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(112, 0, 255, 0.4)' }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
          className={`submit-btn font-orbitron tracking-widest uppercase transition-all ${loading ? 'opacity-50 cursor-wait' : ''}`}
        >
          {loading ? 'SENDING...' : 'EXECUTE TRANSMISSION'}
        </motion.button>

        {status === 'success' && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-xs font-orbitron mt-4 text-center">
            MESSAGE DELIVERED SUCCESSFULLY.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-xs font-orbitron mt-4 text-center">
            TRANSMISSION FAILED. PLEASE TRY AGAIN.
          </motion.p>
        )}
      </form>

      <style>{`
        .contact-container {
          padding: 3rem;
          max-width: 600px;
          margin: 0 auto;
        }
        h2 {
          margin-bottom: 2rem;
          font-size: 2.5rem;
          text-align: center;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        input, textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: white;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }
        input:focus, textarea:focus {
          border-color: var(--accent-color);
          background: rgba(112, 0, 255, 0.05);
        }
        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: var(--accent-color);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
