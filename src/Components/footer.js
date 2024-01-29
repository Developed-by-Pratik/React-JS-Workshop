// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 MyApp. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

export default Footer;
