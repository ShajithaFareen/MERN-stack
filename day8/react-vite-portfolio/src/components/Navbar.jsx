import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
    <nav className="navbar">
        <h2 className="logo">Your Name</h2>
        <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
    );
};

export default Navbar;