import React from 'react';

const MainContent = ({ children }) => {
  return <main style={styles.main}>{children}</main>;
};

const styles = {
  main: {
    flex: 1,
    padding: '2rem',
    backgroundColor: '#121212',
    color: '#eee',
    minHeight: 'calc(100vh - 70px)', // adjust for header height if needed
    fontFamily: "'Merriweather', serif",
  },
};

export default MainContent;
