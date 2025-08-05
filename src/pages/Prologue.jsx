import React from 'react';
import BackButton from '../components/UI/BackButton';
import StandaloneNarrative from '../components/Narrative/StandAloneNarrative';
import prologue from '../data/global/prologue';

const ProloguePage = () => {
  return (
    <main style={{ padding: '2rem' }}>
      <BackButton />
      <StandaloneNarrative markdownText={prologue} />
    </main>
  );
};

export default ProloguePage;
