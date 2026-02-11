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
        h2 {
          margin-bottom: 2rem;
          font-size: 1.8rem;
          text-align: center;
          letter-spacing: 0.2rem;
        }
        @media (min-width: 768px) {
          h2 {
            font-size: 2.5rem;
          }
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        input, textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          color: white;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        input:focus, textarea:focus {
          border-color: #7000ff;
          background: rgba(112, 0, 255, 0.05);
          box-shadow: 0 0 15px rgba(112, 0, 255, 0.1);
        }
        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: #7000ff;
          color: white;
          border: none;
          border-radius: 4px;
          font-weight: 900;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
