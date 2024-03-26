import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import './header.css'; // Assuming this is your CSS file

function Header() {
    return (
        <header>
            <div><IoMdMenu className="icon"/>
            <span className="company-name">IndigoLearn</span></div>
            <nav>
                <ul>
                    <li><a className="company-name-1" href="#buy-courses">Buy Courses</a></li>
                    <li><a className="company-name-2" href="#programs">Programs</a></li>
                    <li><a className="company-name-3" href="#free-resources">Free Resources</a></li>
                    <li><a className="company-name-4"href="#about-us">About Us</a></li>
                </ul>
            </nav>
            <div className="sign-buttons1">
            <FaUserCircle />
                <a href="#sign-in">Sign In</a>
                <a href="#login">/Login</a>
            </div>
        </header>
    );
}

export default Header;
