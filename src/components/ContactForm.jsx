import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    return (
        <div className="contact-container glass">
            <h2>Get in Touch</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <input type="text" placeholder="Name" className="interactive" />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email" className="interactive" />
                </div>
                <div className="form-group">
                    <textarea placeholder="Message" rows="5" className="interactive"></textarea>
                </div>
                <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: 'var(--accent-color)' }}
                    whileTap={{ scale: 0.98 }}
                    className="submit-btn interactive"
                >
                    Send Message
                </motion.button>
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
