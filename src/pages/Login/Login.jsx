import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_ov2.0.png';
import { FaEnvelope, FaLock, FaGoogle, FaGithub } from 'react-icons/fa';
import './Login.css'; // 👈 YEH IMPORT ZAROORI HAI

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", email, password);
  };

  const handleSocialLogin = (platform) => {
    alert(`${platform} Login clicked!`);
  };

  return (
    // ✅ CSS Class Used Here
    <div className="login-container bg-gray-50 dark:bg-black grid-pattern">
      
      {/* Background Mask */}
      <div className="absolute inset-0 pointer-events-none dark:bg-black bg-white/50 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

      {/* CSS Blob */}
      <div className="login-blob"></div>

      {/* ✅ CSS Card Class Used Here (plus Tailwind for colors) */}
      <div className="login-card bg-white/90 dark:bg-black/60 border border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-[0_0_80px_rgba(107,211,211,0.2)]">
          
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <img src={logo} alt="Ovin Logo" className="h-14 mx-auto mb-4 drop-shadow-md" />
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:via-cyan-100 dark:to-[var(--accent-cyan)] bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">
              Enter your credentials to access your account.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email Field */}
            <div className="flex items-center bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-3.5 focus-within:border-[var(--accent-cyan)] focus-within:ring-1 focus-within:ring-[var(--accent-cyan)] transition-all duration-300 group">
              <FaEnvelope className="text-gray-400 dark:text-gray-500 group-focus-within:text-[var(--accent-cyan)] transition-colors text-lg" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none outline-none text-gray-900 dark:text-white w-full ml-4 placeholder-gray-500 text-sm font-medium"
                required
              />
            </div>

            {/* Password Field */}
            <div className="flex items-center bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-3.5 focus-within:border-[var(--accent-cyan)] focus-within:ring-1 focus-within:ring-[var(--accent-cyan)] transition-all duration-300 group">
              <FaLock className="text-gray-400 dark:text-gray-500 group-focus-within:text-[var(--accent-cyan)] transition-colors text-lg" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-none outline-none text-gray-900 dark:text-white w-full ml-4 placeholder-gray-500 text-sm font-medium"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-xs font-semibold text-gray-500 hover:text-[var(--accent-cyan)] transition-colors">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[var(--accent-cyan)] to-teal-500 text-white dark:text-black font-bold text-lg shadow-lg hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-grow h-px bg-gray-200 dark:bg-gray-800"></div>
            <span className="mx-4 text-[10px] text-gray-400 font-bold tracking-widest">OR</span>
            <div className="flex-grow h-px bg-gray-200 dark:bg-gray-800"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => handleSocialLogin('Google')}
              className="flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-black/30 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all group"
            >
              <FaGoogle className="text-gray-500 dark:text-gray-400 group-hover:text-red-500 transition-colors text-lg" /> 
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Google</span>
            </button>
            
            <button 
              onClick={() => handleSocialLogin('GitHub')}
              className="flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-black/30 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all group"
            >
              <FaGithub className="text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors text-lg" /> 
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">GitHub</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-sm text-gray-500 relative z-10">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[var(--accent-cyan)] font-bold hover:underline">
              Sign up now
            </Link>
          </p>

      </div>
    </div>
  );
};

export default Login;