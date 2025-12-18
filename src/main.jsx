import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom' // Agar ye App.jsx me nahi hai toh yahan rakho
import './index.css'
// import { ThemeProvider } from './context/ThemeContext' // ✅ Theme Provider Import

import { ThemeProvider } from './context/ThemeContext' // ✅ Theme Provider Import

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider> {/* ✅ Yahan wrap kiya */}
    <App />
  </ThemeProvider>
)