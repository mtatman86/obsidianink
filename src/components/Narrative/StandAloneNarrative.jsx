import React from 'react';
import ReactMarkdown from 'react-markdown';

const StandAloneNarrative = ({ markdownText }) => {
  return (
    <div style={styles.narrativeBox}>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
};

const styles = {
  narrativeBox: {
    backgroundColor: '#1e1e1e',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
    color: '#eee',
    fontFamily: "'Merriweather', serif",
    maxWidth: '900px',
    margin: '0 auto',
    lineHeight: '1.8',
    fontSize: '1.1rem',
  },
};

export default StandAloneNarrative;
