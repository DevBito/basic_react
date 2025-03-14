import React from 'react';
import Button from  '../components/Button.jsx';
import '../assets/styles/index.css';
import '../assets/styles/Containers.css';

const Home = () => {
    const handleButton1 = () => {
        alert('Botão Primário clicado!');
      };
    
      const handleButton2 = () => {
        alert('Botão Secundário clicado!');
      };

      const handleButtonAlert = () => {
          alert('Botão de Alerta clicado!');
      };

    return (
        <div className="home">

            <h1>Aqui é a tela principal!</h1>
            <p>Seja bem-vindo, amiguinho! Teste os botões componetizados abaixo, por favor:</p>

            <div className="container">
                <div className="TestContainer">

                  <div className="text-container">
                    <p>Utilizei função nomeada, conhecida como "handler externo", ocorre quando declaro a função separadamente e a reutilizo quando necessário.</p>
                  </div>

                  <div className="button-group">
                      <Button label="Botão Primário" onClick={handleButton1} variant="primary"/>
                      <Button label="Botão Secundário" onClick={handleButton2} variant="secondary"/>
                      <Button label="Botão de Alerta" onClick={handleButtonAlert} variant = "alert"/>
                  </div>

                  <div className="text-container">
                    <p>Estou utilizando uma função anônima inline. Nesse caso, a função é definida no momento em que o componente é renderizado, sem um nome associado, e passada diretamente como callback</p>
                  </div>

                  <div className="button-group">
                    <Button label="Botão Padrão" onClick={ () => alert('Botão Padrão clicado!')} />
                    <Button label="Botão Verde" onClick={ () => alert('Botão Verde clicado!')} variant="success"/>
                  </div>

                </div>

                <div className="TestContainer">
                  <p>Teste de links com botões:</p>
                  <div className="button-group">
                    <Button label="Ir para Contato" to="/contatos" variant="primary"/>
                    <Button label="Ir para Sobre" to="/sobre" variant="secondary"/>
                    <Button label="Ir para Blog" to="/blog" variant="alert"/>
                    <Button label="Ir para Home" to="/" />
                  </div>
                </div>
              </div>

        </div>
    );
};

export default Home;