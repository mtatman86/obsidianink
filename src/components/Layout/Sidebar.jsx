import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { itineraryMap } from '../../data/itineraryimports';
import './Sidebar.css';

const Sidebar = ({ narratives, selectedDay, onDaySelect, city }) => {
  const [openDay, setOpenDay] = useState(null);
  const [itineraries, setItineraries] = useState({});

  const toggleDay = async (dayKey) => {
    const isSame = openDay === dayKey;
    setOpenDay(isSame ? null : dayKey);
    onDaySelect(dayKey);

    if (!itineraries[dayKey]) {
      const itineraryKey = `${city}-${dayKey}`;
      console.log(`Loading itinerary for key: ${itineraryKey}`);

      if (!itineraryMap[itineraryKey]) {
        console.warn(`No itinerary found for key: ${itineraryKey}`);
        setItineraries((prev) => ({ ...prev, [dayKey]: [] }));
        return;
      }

      try {
        const module = await itineraryMap[itineraryKey]();
        console.log('Itinerary module loaded:', module);
        setItineraries((prev) => ({ ...prev, [dayKey]: module.default }));
      } catch (err) {
        console.error('Error loading itinerary:', err);
        setItineraries((prev) => ({ ...prev, [dayKey]: [] }));
      }
    }
  };

  // Render when no narratives
  if (!narratives || Object.keys(narratives).length === 0) {
    return (
      <aside className="sidebar">
        <div className="sidebar-content">
          <p style={{ color: '#888' }}>No narratives available.</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {Object.keys(narratives)
          .filter((key) => key !== 'city')
          .map((dayKey) => {
            const isOpen = openDay === dayKey;
            const dayItinerary = itineraries[dayKey] || [];

            return (
              <div key={dayKey}>
                <button
                  style={{
                    ...styles.dayButton,
                    backgroundColor: selectedDay === dayKey ? '#333' : 'transparent',
                  }}
                  onClick={() => toggleDay(dayKey)}
                >
                  {isOpen ? '▼' : '▶'} {dayKey.replace('-', ' ').toUpperCase()}
                </button>

                {isOpen && (
                  <ul style={styles.itineraryList}>
                    {dayItinerary.length > 0 ? (
                      dayItinerary.map((item, index) => (
                        <li key={index} style={styles.itineraryItem}>
                          {item.time && <span style={styles.time}>{item.time} – </span>}
                          {item.title}
                        </li>
                      ))
                    ) : (
                      <li style={{ color: '#666', fontStyle: 'italic' }}>(No itinerary found)</li>
                    )}
                  </ul>
                )}
              </div>
            );
          })}
      </div>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '240px',
    padding: '1rem',
    backgroundColor: '#1a1a1a',
    borderRight: '1px solid #444',
  },
  dayButton: {
    display: 'block',
    width: '100%',
    padding: '0.5rem 1rem',
    marginBottom: '0.3rem',
    color: '#eee',
    border: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.3s',
  },
  itineraryList: {
    listStyleType: 'none',
    paddingLeft: '1.5rem',
    margin: '0.5rem 0 1rem',
    color: '#ccc',
    fontSize: '0.9rem',
  },
  itineraryItem: {
    marginBottom: '0.3rem',
  },
  time: {
    color: '#888',
  },
  sectionNav: {
    marginTop: '2rem',
    borderTop: '1px solid #444',
    paddingTop: '1rem',
  },
  sectionTitle: {
    color: '#aaa',
    marginBottom: '0.5rem',
    fontSize: '0.95rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  sectionLink: {
    display: 'block',
    color: '#ccc',
    textDecoration: 'none',
    padding: '0.3rem 0',
    transition: 'color 0.2s',
  },
};

export default Sidebar;
