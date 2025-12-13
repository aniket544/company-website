import React, { use, useRef } from 'react'
import './Nav.css'
import { Navigate, NavLink } from "react-router-dom";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Nav() {
    let menu = useRef()
    let mobile = useRef();

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
        tl.from("NavLink ul li",{
            y: -100,
            duration: 0,
            opacity: 0
        })
    })



    return (
        <nav>
            <NavLink to='/'  className='ov' ><span>OVIN</span></NavLink>
            <ul className='desktopmenu'>
                <NavLink to="/" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}>Home</NavLink>
                <NavLink to="about" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}> <li>About</li> </NavLink>
                <NavLink to="bid" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}> <li>Bid</li> </NavLink>
                <NavLink to="Payment" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}> <li>Payment</li> </NavLink>
                <NavLink to="services" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000} onClick={() => handleDropdownNavigate('/Services')}>  <li className="dropdown">
                    Services
                    <ul className="dropdown-menu">
                        <NavLink id='ink'  to="Gr.jsx"><li>GeM Registration</li></NavLink>
                        <NavLink id='ink' to="Gc.jsx"><li>GeM Consultancy</li></NavLink>
                        <NavLink id='ink' to="Tp.jsx"><li>Tender Management</li></NavLink>
                        <NavLink id='ink' to="/BDev.jsx"><li>Business Developement Services</li></NavLink>
                        <NavLink id='ink' to="Va.jsx"><li>OEM Vendor Assessment</li></NavLink>
                    </ul>
                </li>
                </NavLink>
                <NavLink to="wwd" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}> <li>What We Do?</li></NavLink>
                <NavLink to="contact" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}> <li>Contact Us</li></NavLink>
                <NavLink to="login" id="ddd1" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}> <li>Login</li></NavLink>

            </ul>
            <div className="hamburger" ref={menu} onClick={() => {
                mobile.current.classList.toggle("activemobile")
                menu.current.classList.toggle("activeham")
            }}>
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>
            <ul className='mobilemenu' ref={mobile}>
                <NavLink to="/" id="yoyo3" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1500}> <li>Home</li></NavLink>
                <NavLink to="about" id="yoyo3" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1500}> <li>About</li> </NavLink>
                <NavLink to="bid" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}> <li>Bid</li> </NavLink>
                <NavLink to="payment" id="ddd" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1000}> <li>Payment</li> </NavLink>
                <NavLink to="services" id="yoyo3" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1500}> <li>Services</li> </NavLink>
                <NavLink to="wwd" id="yoyo3" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1500}> <li>What We Do?</li></NavLink>
                <NavLink to="contact" id="yoyo3" className={({ isActive }) => isActive ? "active" : ""} spy="true" smooth="true" duration={1500}> <li>Contact</li></NavLink>

            </ul>
        </nav>
    )
}

export default Nav