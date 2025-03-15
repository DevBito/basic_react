
import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Aprendendo React...</p>
    </footer>
  );
};

export default Footer;
