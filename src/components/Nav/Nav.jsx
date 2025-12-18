import React, { useRef } from 'react'
import './Nav.css'
import { NavLink, useNavigate } from "react-router-dom";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import logo from '../../assets/logo_ov2.0.png'
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function Nav() {
    let menu = useRef()
    let mobile = useRef();
    
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    useGSAP(() => {
        let tl = gsap.timeline()
        tl.from("nav span", {
            y: -100,
            duration: 0,
            opacity: 0,
        })
        tl.from("nav ul li", {
            y: -100,
            duration: 0,
            opacity: 0,
            stagger: 1
        })
    })

    const handleDropdownNavigate = (path) => {
        navigate(path);
    };

    return (
        // ✅ NEW: Glassmorphism Classes Added
        // sticky top-0: Navbar upar chipka rahega scroll karne par
        // backdrop-blur-md: Peeche ka content dhundhla (blur) dikhega
        // bg-white/70: White background 70% opacity ke sath (Light mode)
        // dark:bg-black/70: Black background 70% opacity ke sath (Dark mode)
        <nav 
            className="sticky top-0 z-[999] w-full border-b border-gray-200 dark:border-white/10 backdrop-blur-md bg-white/70 dark:bg-black/70 transition-all duration-300"
        >
            
            <NavLink to='/' className='ov' ><span><img src={logo} alt="Ovin Logo" /></span></NavLink>
            
            <ul className='desktopmenu'>
                <NavLink to="/" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}>Home</NavLink>
                <NavLink to="/about" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}> <li>About</li> </NavLink>
                <NavLink to="/bid" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}> <li>Bid</li> </NavLink>
                <NavLink to="/payment" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}> <li>Payment</li> </NavLink>
                
                {/* Services Dropdown */}
                <li className="dropdown">
                    <span id="ddd" onClick={() => handleDropdownNavigate('/services')} style={{ cursor: 'pointer' }}>Services</span>
                    <ul className="dropdown-menu" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                        <NavLink id='ink' to="/gr"><li>GeM Registration</li></NavLink>
                        <NavLink id='ink' to="/gc"><li>GeM Consultancy</li></NavLink>
                        <NavLink id='ink' to="/tp"><li>Tender Management</li></NavLink>
                        <NavLink id='ink' to="/bdev"><li>Business Development</li></NavLink>
                        <NavLink id='ink' to="/va"><li>OEM Vendor Assessment</li></NavLink>
                    </ul>
                </li>

                <NavLink to="/wwd" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}> <li>What We Do?</li></NavLink>
                <NavLink to="/contact" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}> <li>Contact Us</li></NavLink>
                <NavLink to="/login" id="ddd1" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}> <li>Login</li></NavLink>

                {/* Theme Toggle */}
                <li onClick={toggleTheme} style={{ cursor: 'pointer', marginLeft: '15px', display: 'flex', alignItems: 'center' }} title="Toggle Theme">
                    {theme === 'dark' ? 
                        <FaSun size={22} color="#FFD700" /> : 
                        <FaMoon size={22} color="#4c4c4c" />
                    }
                </li>
            </ul>

            {/* Hamburger Icon */}
            <div className="hamburger" ref={menu} onClick={() => {
                mobile.current.classList.toggle("activemobile")
                menu.current.classList.toggle("activeham")
            }}>
                <div className="ham" style={{ backgroundColor: 'var(--text-color)' }}></div>
                <div className="ham" style={{ backgroundColor: 'var(--text-color)' }}></div>
                <div className="ham" style={{ backgroundColor: 'var(--text-color)' }}></div>
            </div>

            {/* Mobile Menu */}
            <ul className='mobilemenu' ref={mobile} style={{ backgroundColor: 'var(--bg-color)' }}>
                <NavLink to="/" id="yoyo3" className={({ isActive }) => isActive ? "active" : ""} onClick={() => mobile.current.classList.remove("activemobile")}> <li>Home</li></NavLink>
                <NavLink to="/about" id="yoyo3" className={({ isActive }) => isActive ? "active" : ""} onClick={() => mobile.current.classList.remove("activemobile")}> <li>About</li> </NavLink>
                <NavLink to="/bid" id="yoyo3" className={({ isActive }) => isActive ? "active" : ""} onClick={() => mobile.current.classList.remove("activemobile")}> <li>Bid</li> </NavLink>
                <NavLink to="/payment" id="yoyo3" className={({ isActive }) => isActive ? "active" : ""} onClick={() => mobile.current.classList.remove("activemobile")}> <li>Payment</li> </NavLink>
                <NavLink to="/services" id="yoyo3" className={({ isActive }) => isActive ? "active" : ""} onClick={() => mobile.current.classList.remove("activemobile")}> <li>Services</li> </NavLink>
                <NavLink to="/wwd" id="yoyo3" className={({ isActive }) => isActive ? "active" : ""} onClick={() => mobile.current.classList.remove("activemobile")}> <li>What We Do?</li></NavLink>
                <NavLink to="/contact" id="yoyo3" className={({ isActive }) => isActive ? "active" : ""} onClick={() => mobile.current.classList.remove("activemobile")}> <li>Contact</li></NavLink>

                <li onClick={toggleTheme} style={{ marginTop: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', color: 'var(--text-color)' }}>
                    {theme === 'dark' ? 
                        <><FaSun color="#FFD700" /> Light Mode</> : 
                        <><FaMoon color="#4c4c4c" /> Dark Mode</>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Nav