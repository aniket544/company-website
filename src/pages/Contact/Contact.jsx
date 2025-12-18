import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import logo from '../../assets/logo_ov2.0.png';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // 👇 Yahan Apni EMAILJS Keys Daalni Hain (Step 3 mein bataunga kaise milengi)
    // Abhi ke liye code paste kar de, ye error nahi dega bas email nahi jayega.
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',    // Service ID
        'YOUR_TEMPLATE_ID',   // Template ID
        form.current,
        'YOUR_PUBLIC_KEY'     // Public Key
      )
      .then(
        () => {
          setLoading(false);
          alert('Message Sent Successfully! ✅');
          form.current.reset(); // Form clear kar dega
        },
        (error) => {
          setLoading(false);
          alert('Failed to send message ❌. Try again later.');
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-black grid-pattern relative flex items-center justify-center py-20 px-4">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none dark:bg-black bg-white/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent-cyan)]/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Glass Card */}
      <div className="w-full max-w-lg bg-white/90 dark:bg-black/60 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 shadow-2xl relative z-20">
        
        {/* Header */}
        <div className="text-center mb-8">
            <img src={logo} alt="Ovin Logo" className="h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:via-cyan-100 dark:to-[var(--accent-cyan)] bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Have a query? Drop us a message directly.
            </p>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          
          {/* Name */}
          <div className="flex items-center bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-3.5 focus-within:border-[var(--accent-cyan)] focus-within:ring-1 focus-within:ring-[var(--accent-cyan)] transition-all duration-300 group">
            <FaUser className="text-gray-400 dark:text-gray-500 group-focus-within:text-[var(--accent-cyan)] transition-colors" />
            <input
              type="text"
              name="user_name" // EmailJS is naam ko pakdega
              placeholder="Your Name"
              className="bg-transparent border-none outline-none text-gray-900 dark:text-white w-full ml-4 placeholder-gray-500 font-medium"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-3.5 focus-within:border-[var(--accent-cyan)] focus-within:ring-1 focus-within:ring-[var(--accent-cyan)] transition-all duration-300 group">
            <FaEnvelope className="text-gray-400 dark:text-gray-500 group-focus-within:text-[var(--accent-cyan)] transition-colors" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="bg-transparent border-none outline-none text-gray-900 dark:text-white w-full ml-4 placeholder-gray-500 font-medium"
              required
            />
          </div>

          {/* Message */}
          <div className="flex items-start bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-3.5 focus-within:border-[var(--accent-cyan)] focus-within:ring-1 focus-within:ring-[var(--accent-cyan)] transition-all duration-300 group">
            <FaCommentDots className="text-gray-400 dark:text-gray-500 group-focus-within:text-[var(--accent-cyan)] transition-colors mt-1" />
            <textarea
              name="message"
              placeholder="How can we help you?"
              rows="4"
              className="bg-transparent border-none outline-none text-gray-900 dark:text-white w-full ml-4 placeholder-gray-500 font-medium resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--accent-cyan)] to-teal-500 text-white dark:text-black font-bold text-lg shadow-lg hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : (
              <>
                Send Message <FaPaperPlane className="text-sm" />
              </>
            )}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;