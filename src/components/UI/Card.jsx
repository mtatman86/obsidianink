import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#1e1e1e',
    padding: '1.2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
    marginBottom: '1rem',
    color: '#eee',
    fontFamily: "'Merriweather', serif",
  },
  title: {
    fontSize: '1.3rem',
    marginBottom: '0.5rem',
    color: '#fff',
  },
};

export default Card;
