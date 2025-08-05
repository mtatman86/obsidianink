import React from 'react';
import ReactMarkdown from 'react-markdown';

const NarrativeDisplay = ({ text }) => {
  return (
    <div style={styles.narrativeBox}>
      <ReactMarkdown
        children={text}
        // optionally, you can add remarkPlugins here if you want
      />
    </div>
  );
};

const styles = {
  narrativeBox: {
    backgroundColor: '#1e1e1e',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    color: '#eee',
  },
};

export default NarrativeDisplay;
