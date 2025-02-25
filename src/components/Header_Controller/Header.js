
// src/components/Header/Header.js
// import Footer from '../Footer/Footer'; // مسیر به فایل Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// function App() {}
const Navbar = () => {
    return (
        <header>
            <h2 className='h2'>*Online Recipes*</h2>
            <nav>
                <ul>
                    {/* give a class in the Header_Controller */}

                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to= "/Info">information</Link></li>
                    <li><Link to= "/contact">Contact Us</Link></li>
                    <li><Link to= "/footer"></Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/basket">Cart</Link></li>
                    <li><Link to="/managers">Managers</Link></li>
                    {/* Add more navigation links if needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
