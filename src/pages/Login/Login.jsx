// import React, { useState } from 'react';
// import './login.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Login({ isPopup = false, onClose }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Function to verify token (can be called on app load)
//   const verifyToken = async (token) => {
//     try {
//       const res = await axios.get('http://127.0.0.1:8000/api/verify/', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return res.data.valid; // Assume backend returns { valid: true/false }
//     } catch (err) {
//       console.error('Token verification failed:', err);
//       return false;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const res = await axios.post('http://127.0.0.1:8000/api/login/', {
//         email,
//         password,
//       });

//       const { access_token } = res.data; // Assume response has access_token
//       localStorage.setItem('access_token', access_token);

//       // Verify token immediately
//       const isValid = await verifyToken(access_token);
//       if (isValid) {
//         if (isPopup && onClose) {
//           onClose(); // Close popup on success
//         } else {
//           navigate('/'); // Redirect to home on success
//         }
//       } else {
//         setError('Token verification failed. Please try again.');
//       }
//     } catch (err) {
//       setError('Invalid credentials. Please try again.');
//       console.error('Login error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClose = () => {
//     if (onClose) onClose();
//   };

//   const handleRegisterRedirect = () => {
//     navigate('/signup'); // Assuming signup route is '/signup'
//   };

//   return (
//     <div className={`login-container ${isPopup ? 'popup' : 'full-page'}`}>
//       {isPopup && (
//         <div className="overlay" onClick={handleClose}></div>
//       )}
//       <div className="login-form">
//         {isPopup && (
//           <button className="close-btn" onClick={handleClose}>×</button>
//         )}
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="error">{error}</p>}
//           <button type="submit" disabled={loading}>
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//         {!isPopup && (
//           <p>Don't have an account? <span className="register-link" onClick={handleRegisterRedirect}>Register Here</span></p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ isPopup = false, onClose }) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to verify token (can be called on app load)
  const verifyToken = async (token) => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/verify/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.valid; // Assume backend returns { valid: true/false }
    } catch (err) {
      console.error('Token verification failed:', err);
      return false;
    }
  };

  const handleSocialLogin = async (provider) => {
    setLoading(true);
    setError('');

    // Redirect to backend OAuth endpoint
    // Adjust the URL to your backend's social login initiation endpoint
    // e.g., /api/social/login/google/ or /api/social/login/facebook/
    window.location.href = `http://127.0.0.1:8000/api/social/login/${provider}/`;
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleRegisterRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className={`login-container ${isPopup ? 'popup' : 'full-page'}`}>
      {isPopup && (
        <div className="overlay" onClick={handleClose}></div>
      )}
      <div className="login-card">
        {isPopup && (
          <button className="close-btn" onClick={handleClose}>×</button>
        )}
        <h2>Welcome Back</h2>
        <p className="subtitle">Sign in to your account</p>

        {error && <p className="error">{error}</p>}

        <div className="social-buttons">
          <button 
            className="social-btn google-btn" 
            onClick={() => handleSocialLogin('google')}
            disabled={loading}
          >
            <svg className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <button 
            className="social-btn facebook-btn" 
            onClick={() => handleSocialLogin('facebook')}
            disabled={loading}
          >
            <svg className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
              <path d="M16.671 15.543l.532-3.47h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.436v-2.953c0 0-1.374-.235-2.686-.235-2.741 0-4.533 1.662-4.533 4.669v2.647H7.078v3.47h3.047v8.385c.609.095 1.233.143 1.875.143s1.266-.048 1.875-.143v-8.385h3.328z" fill="#ffffff"/>
            </svg>
            Continue with Facebook
          </button>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        {!isPopup && (
          <p className="register-text">
            Don't have an account? 
            <span className="register-link" onClick={handleRegisterRedirect}> Register Here</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;