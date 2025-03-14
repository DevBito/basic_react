import React from 'react';
import '../assets/styles/index.css';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="blog">
            <h1>Blog</h1>
            <p>Veja nossos posts abaixo:</p>
            <Link to="/">Ir para Home</Link>
            <Link to="/sobre">Ir para Sobre</Link>
            <Link to="/contatos">Ir para Contatos</Link>
            <Link to="/Blog">Ir para Blog</Link>
        </div>
    );
};

export default Blog;