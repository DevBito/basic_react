import React from 'react';
import '../assets/styles/index.css';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Contatos = () => {
    return (
        <div className = "contatos">
            <h1>Contatos</h1>
            <p>Esta é a tela dos nossos contatos!</p>
            <div 
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center',
                }}>
            <Card 
                image="https://avatars.githubusercontent.com/u/141591990?v=4" 
                title="DevBito" 
                description="Desenvolvedor">
                <Button label="GitHub" href="https://github.com/DevBito" variant="primary" ></Button>
                <Button label="LinkedIn" href="https://www.linkedin.com/in/gabriel-a837921a3/" variant="default" ></Button>
            </Card>

            <Card 
                image="https://octodex.github.com/images/orderedlistocat.png"
                title="Fulano"
                description="Web Designer">
                <Button label="GitHub" href="https://github.com" variant="primary" ></Button>
                <Button label="LinkedIn" href="https://www.linkedin.com" variant="default" ></Button>
            </Card>

            <Card
                image="https://octodex.github.com/images/steroidtocat.png"
                title="Ciclano"
                description="Musculoso">
                <Button label="GitHub" href="https://github.com" variant="primary" ></Button>
                <Button label="LinkedIn" href="https://www.linkedin.com" variant="default" ></Button>
            </Card>
            </div>

            <Link to="/">Ir para Home</Link>
            <Link to="/sobre">Ir para Sobre</Link>
            <Link to="/contatos">Ir para Contatos</Link>
            <Link to="/Blog">Ir para Blog</Link>
        </div>
    );
};

export default Contatos;