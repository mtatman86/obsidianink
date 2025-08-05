import React from 'react';
import StandaloneNarrative from '../components/Narrative/StandAloneNarrative';
import noteKGBeginning from '../data/global/note-kg-beginning';
import BackButton from '../components/UI/BackButton';

const KgNoteBeginningPage = () => {
  return (
      <main style={{ padding: '2rem' }}>
      <BackButton />
      <StandaloneNarrative markdownText={noteKGBeginning} />;
    </main>
  );
};

export default KgNoteBeginningPage;