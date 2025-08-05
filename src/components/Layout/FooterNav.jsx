import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const citySections = ['food', 'folklore', 'aroundtown'];

const FooterNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const match = location.pathname.match(/^\/(edinburgh|london|paris|nottingham)(\/.*)?$/i);
  const city = match?.[1]?.toLowerCase();
  const subPage = match?.[2]?.toLowerCase(); // e.g., "/food" or undefined

  if (!city) return null; // Hide footer on non-city pages

  const goBackToCityMain = () => navigate(`/${city}`);

  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#111',
        borderTop: '1px solid #444',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 0',
        zIndex: 1000,
      }}
    >
      {/* Back button only if we're in a subpage */}
      {subPage && (
        <button
          onClick={goBackToCityMain}
          style={{
            background: 'none',
            border: 'none',
            color: '#ccc',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          ⬅ Back
        </button>
      )}

      {/* City section buttons */}
      {citySections.map((section) => (
        <button
          key={section}
          onClick={() => navigate(`/${city}/${section}`)}
          style={{
            background: 'none',
            border: 'none',
            color: subPage?.includes(section) ? '#f0a500' : '#ccc',
            fontWeight: subPage?.includes(section) ? 'bold' : 'normal',
            cursor: 'pointer',
            fontSize: '1rem',
            textTransform: 'capitalize',
          }}
        >
          {section}
        </button>
      ))}
    </footer>
  );
};

export default FooterNav;
