import React from "react"
import {NavLink} from "react-router-dom";
import logo from '../logo-all.png';

export default function NavBar(){
    return (
        <header className="header-site">
            <div className="container">
                <nav className="">
                    <NavLink to="/">
                        <img className="logo" src={logo} alt="logo" />
                    </NavLink>
                    <div className="nav-link">
                        <NavLink to="/services" className={(navData) => navData.isActive ? "active-link nav" : "nav" }>
                            Services
                        </NavLink>
                        <NavLink to="/careers" className={(navData) => navData.isActive ? "active-link nav" : "nav" }>
                            Careers
                        </NavLink>
                        <NavLink to="/about" className={(navData) => navData.isActive ? "active-link nav" : "nav" }>
                            About us
                        </NavLink>
                        <NavLink to="/login" className={(navData) => navData.isActive ? "active-link nav" : "nav" }>
                            Login
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>
    )
}