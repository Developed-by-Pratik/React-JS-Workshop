// src/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MyApp</div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>Home</li>
        <li style={styles.navItem}>About</li>
        <li style={styles.navItem}>Services</li>
        <li style={styles.navItem}>Contact</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
  },
  navItem: {
    margin: '0 1rem',
    cursor: 'pointer',
  },
};

export default Navbar;
