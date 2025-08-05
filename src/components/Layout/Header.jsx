import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const cities = [
    { name: 'Edinburgh', path: '/edinburgh' },
    { name: 'Nottingham', path: '/nottingham' },
    { name: 'London', path: '/london' },
    { name: 'Paris', path: '/paris' },
  ];

  return (
    <header style={styles.header}>
      <h1 style={styles.title} onClick={() => navigate('/')}>
        Europe 2025
      </h1>

      <nav style={styles.nav}>
        <button style={styles.backButton} onClick={() => navigate(-1)}>
          ← Back
        </button>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        {cities.map(({ name, path }) => (
          <Link key={name} to={path} style={styles.link}>
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#222',
    color: '#eee',
    padding: '1rem 2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  title: {
  fontFamily: "'Charlotte', 'Merriweather', serif", // fallback just in case
  fontSize: '1.8rem',
  margin: 0,
  cursor: 'pointer',
},
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  backButton: {
    backgroundColor: '#555',
    color: '#eee',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  link: {
    color: '#eee',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
  },
};

export default Header;
