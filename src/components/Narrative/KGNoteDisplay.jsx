import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const RavenNoteDisplay = ({ markdownText }) => {
  return (
    <div style={styles.ravenBox}>
      <div style={styles.ravenHeader}>
        🐦‍⬛ A Message from King George
      </div>
      <ReactMarkdown
        children={markdownText}
        remarkPlugins={[remarkGfm]}
      />
    </div>
  );
};

const styles = {
  ravenBox: {
    backgroundColor: '#1e1e1e',
    border: '2px solid #555',
    borderRadius: '12px',
    padding: '1.5rem',
    color: '#eee',
    fontFamily: "'Cinzel', serif",
    maxWidth: '700px',
    margin: '2rem auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  },
  ravenHeader: {
    fontSize: '1.2rem',
    color: '#a78bfa',
    marginBottom: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
};

export default RavenNoteDisplay;
