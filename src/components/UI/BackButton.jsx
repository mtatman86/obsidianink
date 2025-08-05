import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#444',
        color: '#eee',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        marginBottom: '1rem',
      }}
    >
      ← Back
    </button>
  );
};

export default BackButton;
