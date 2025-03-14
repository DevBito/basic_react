import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contatos">Contatos</Link>
            <Link to="/blog">Blog</Link>
        </div>
    );
};

export default NavBar;