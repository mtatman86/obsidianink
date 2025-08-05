import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const cities = [
  { name: 'Edinburgh', path: '/edinburgh' },
  { name: 'Nottingham', path: '/nottingham' },
  { name: 'London', path: '/london' },
  { name: 'Paris', path: '/paris' },
];

const NavBar = () => (
  <nav style={styles.navbar}>
    {cities.map(({ name, path }) => (
      <Link key={name} to={path} style={styles.navLink}>
        {name}
      </Link>
    ))}
  </nav>
);

const MenuButton = ({ to, children }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={to}
      style={{
        ...styles.menuButton,
        ...(hover ? styles.menuButtonHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Link>
  );
};

const Home = () => {
  return (
    <>
      <NavBar />
      <main style={styles.main}>
        <h1 style={styles.title}>Europe 2025</h1>
        <p style={styles.subtitle}>
         A journey through myth, magic, and memory.
        </p>

        <section style={styles.menu}>
          <MenuButton to="/prologue">Before the Descent</MenuButton>
          <MenuButton to="/note-kg-beginning">Note from King George</MenuButton>
          <MenuButton to="/note-kg-final">Final Note from King George</MenuButton>

        </section>
      </main>
    </>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#1a1a1a',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.8)',
  },
  navLink: {
    color: '#eee',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '1.25rem',
    transition: 'color 0.3s ease',
  },
  main: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #121212 0%, #222222 100%)',
    color: '#eee',
    fontFamily: "'Merriweather', serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '3rem 2rem',
  },
  title: {
    fontSize: '4rem',
    fontWeight: '900',
    marginBottom: '1rem',
    textShadow: '2px 2px 10px #000',
  },
  subtitle: {
    fontStyle: 'italic',
    color: '#bbb',
    maxWidth: '600px',
    textAlign: 'center',
    fontSize: '1.25rem',
    marginBottom: '3rem',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px',
  },
  menuButton: {
    backgroundColor: '#1e1e1e',
    padding: '1rem 2rem',
    borderRadius: '12px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.25rem',
    fontWeight: '600',
    textAlign: 'center',
    transition: 'background 0.3s ease, transform 0.2s ease',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
    userSelect: 'none',
  },
  menuButtonHover: {
    backgroundColor: '#333',
    transform: 'translateY(-2px)',
  },
};

export default Home;
