import React from 'react';
import ReactMarkdown from 'react-markdown';

const FolkloreNarrative = ({ narrative }) => {
  if (!narrative) return <p style={styles.empty}>No folklore narrative to show.</p>;

  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>Folklore & Legends</h1>
      <div style={styles.markdownContainer}>
        <ReactMarkdown>{narrative}</ReactMarkdown>
      </div>
    </section>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '3rem auto',
    padding: '2.5rem 3rem',
    backgroundColor: '#0e0e0e',
    border: '1px solid #2a2a2a',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.7)',
    fontFamily: "'EB Garamond', serif",
    color: '#ddd',
  },
  heading: {
    fontSize: '2.75rem',
    marginBottom: '1.5rem',
    color: '#ccc',
    fontWeight: '700',
    textAlign: 'center',
    borderBottom: '1px solid #333',
    paddingBottom: '0.5rem',
  },
  markdownContainer: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#d3d3d3',
  },
  empty: {
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '4rem',
    fontSize: '1.25rem',
  },
};

export default FolkloreNarrative;
