import React from 'react';

const Button = ({ children, onClick, variant = 'primary' }) => {
  const styles = {
    primary: {
      backgroundColor: '#4A90E2',
      color: '#fff',
      border: 'none',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: '#4A90E2',
      border: '1px solid #4A90E2',
    },
  };

  return (
    <button
      style={{
        ...styles[variant],
        padding: '0.6rem 1.2rem',
        borderRadius: '6px',
        cursor: 'pointer',
        fontFamily: "'Merriweather', serif",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
