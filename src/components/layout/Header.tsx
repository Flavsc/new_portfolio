import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import "../../styles/components/layout/Header.scss";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="container header-content">
                <button
                    className={`menu-button ${isMenuOpen ? "active" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className="logo">
                    <span className="logo-text">MAZCA</span>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
                    <a href="#" className="nav-link">
                        Home
                    </a>
                    <a href="#collection" className="nav-link">
                        Collection
                    </a>
                    <a href="#about" className="nav-link">
                        About
                    </a>
                    <a href="#vision" className="nav-link">
                        Vision
                    </a>
                </nav>

                <button className="cart-button">
                    <ShoppingBag size={24} />
                </button>
            </div>
        </header>
    );
};

export default Header;
