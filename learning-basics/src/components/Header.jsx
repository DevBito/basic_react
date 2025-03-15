import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css'; 
import { FaReact } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <FaReact size={40} color="#61DBFB" />
          <span>Aprendendo React</span>
        </div>        
        <nav>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contatos">Contatos</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
