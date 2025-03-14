  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Layout from './components/Layout.jsx';
  import Home from './pages/Home.jsx';
  import Sobre from './pages/Sobre.jsx';
  import Contatos from './pages/Contatos.jsx';
  import Blog from './pages/Blog.jsx';

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="contatos" element={<Contatos />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </Router>
    );
  }

  export default App;
  export {  };  

