import React, { useState } from 'react';
import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';
import NarrativeDisplay from '../../components/Narrative/NarrativeDisplay';
import narratives from '../../data/edinburgh';

const days = ['city', 'day-1', 'day-2', 'day-3', 'day-4']; // your days list, customize as needed

const EdinburghPage = () => {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const narrativeText = narratives[selectedDay] || 'No narrative available for this day.';

  return (
    <div style={styles.appContainer}>
      <Header />
      <div style={styles.contentWrapper}>
        <Sidebar
          narratives={narratives}
          selectedDay={selectedDay}
          onDaySelect={setSelectedDay}
          city= "edinburgh"
/>
        <main style={styles.mainContent}>
          <h1 style={styles.cityTitle}>Edinburgh</h1>
          <NarrativeDisplay text={narrativeText} />
        </main>
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    minHeight: '100vh',
    backgroundColor: '#121212',
    color: '#eee',
    fontFamily: "'Merriweather', serif",
  },
  contentWrapper: {
    display: 'flex',
  },
  mainContent: {
    flex: 1,
    padding: '2rem',
  },
  cityTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
};

export default EdinburghPage;
