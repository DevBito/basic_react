import React from 'react';
import '../assets/styles/index.css';
import { Link } from 'react-router-dom';

const Sobre = () => {
    return (
        <div className = "sobre">
            <h1>Sobre nós</h1>
            <p>Esta é a tela do sobre nós, hehe.</p>
            <Link to="/">Ir para Home</Link>
            <Link to="/sobre">Ir para Sobre</Link>
            <Link to="/contatos">Ir para Contatos</Link>
            <Link to="/Blog">Ir para Blog</Link>
        </div>
    );
};

export default Sobre;