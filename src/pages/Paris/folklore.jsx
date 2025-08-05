import React from 'react';
import Folklore from '../../components/CitySections/Folklore';
import folkloreNarrative from '../../data/paris/folklore';

const FolklorePage = () => {
  return <Folklore narrative={folkloreNarrative} />;
};

export default FolklorePage;
