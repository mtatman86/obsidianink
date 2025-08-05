import React from 'react';
import StandaloneNarrative from '../components/Narrative/StandAloneNarrative';
import noteKGFinal from '../data/global/note-kg-final';
import BackButton from '../components/UI/BackButton';

const KgFinalNotePage = () => {
  return (
      <main style={{ padding: '2rem' }}>
      <BackButton />
   <StandaloneNarrative markdownText={noteKGFinal} />;
</main>
);
};

export default KgFinalNotePage;