import React from 'react';
import { Outlet } from 'react-router-dom';
/* import NavBar from './NavBar'; */
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
