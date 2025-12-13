import React, { useState, useEffect } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

// Replace with your real credentials
const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";
const FACEBOOK_APP_ID = "YOUR_FACEBOOK_APP_ID";

const REDIRECT_URI = "http://localhost:3000/auth/callback"; // Must be whitelisted in both Google & Facebook consoles

function Signup({ isPopup = false, onClose }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  // Handle OAuth callback when user returns from Google/Facebook
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get('code');
    const state = query.get('state');

    if (code && location.pathname === '/auth/callback') {
      const provider = state || 'google'; // fallback
      handleOAuthCallback(code, provider);
    }
  }, [location]);

  const handleOAuthCallback = async (code, provider) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/social-login/', {
        code,
        provider, // 'google' or 'facebook'
        redirect_uri: REDIRECT_URI,
      });

      const { access_token, user } = res.data;

      // Save token & user (you can use context, redux, etc.)
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('user', JSON.stringify(user));

      alert(`Welcome ${user.name || user.email}!`);

      if (isPopup && onClose) {
        onClose();
      } else {
        navigate('/dashboard'); // Change to your desired page
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed. Please try again.');
      navigate('/signup');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    const params = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      response_type: 'code',
      scope: 'email profile openid',
      access_type: 'offline',
      prompt: 'consent',
      state: 'google',
    });
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  };

  const handleFacebookSignup = () => {
    const params = new URLSearchParams({
      client_id: FACEBOOK_APP_ID,
      redirect_uri: REDIRECT_URI,
      response_type: 'code token', // Facebook supports both
      scope: 'email,public_profile',
      state: 'facebook',
    });
    window.location.href = `https://www.facebook.com/v20.0/dialog/oauth?${params.toString()}`;
  };

  const handleClose = () => onClose && onClose();

  // Just replace the return() part with this updated version:

  return (
    <div className="signup-wrapper">
      {isPopup && <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40" onClick={handleClose}></div>}

      <div className="signup-container">
        {isPopup && (
          <button onClick={handleClose} className="close-btn">
            ×
          </button>
        )}

        <h2 className="signup-title">Welcome Back</h2>
        <p className="signup-subtitle">Sign in instantly with your social account</p>

        {error && <div className="error-message">{error}</div>}

        <div className="social-buttons">
          <button
            onClick={handleGoogleSignup}
            disabled={loading}
            className={`btn-google ${loading ? 'btn-loading' : ''}`}
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" />
            Continue with Google
          </button>

          <button
            onClick={handleFacebookSignup}
            disabled={loading}
            className={`btn-facebook ${loading ? 'btn-loading' : ''}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.637c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.512c-1.491 0-1.956.925-1.956 1.874v2.244h3.328l-.532 3.469h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
            </svg>
            Continue with Facebook
          </button>
        </div>

        {!isPopup && (
          <p className="login-link">
            Already have an account? <a href="/login">Log in here</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default Signup;