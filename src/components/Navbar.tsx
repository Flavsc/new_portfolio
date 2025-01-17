/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import "../styles/components/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="container navbar-content">
                <div className="nav-links desktop-only">
                    <Link to="/" className="nav-link">
                        home
                    </Link>
                    <Link to="/projects" className="nav-link">
                        projects
                    </Link>
                </div>
                <div className="logo">
                    <span className="logo-text gradient-text">166 studios.</span>
                </div>

                <div className="nav-links desktop-only">
                    <Link to="/about" className="nav-link">
                        about
                    </Link>
                    <Link to="/contact" className="nav-link">
                        contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
