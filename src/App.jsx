import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import EdinburghPage from './pages/Edinburgh';
import LondonPage from './pages/London';
import ParisPage from './pages/Paris';
import NottinghamPage from './pages/Nottingham';
import HomePage from './pages/Home';

import KgFinalNotePage from './pages/KGFinalNotePage';
import KgNoteBeginningPage from './pages/KGNoteBeginningPage';
import ProloguePage from './pages/Prologue';

import EdinburghFolklorePage from './pages/Edinburgh/folklore';
import EdinburghFoodPage from './pages/Edinburgh/food';
import EdinburghAroundTownPage from './pages/Edinburgh/aroundtown';

import ParisFolklorePage from './pages/Paris/folklore';
import ParisFoodPage from './pages/Paris/food';
import ParisAroundTownPage from './pages/Paris/aroundtown';

import LondonFolklorePage from './pages/London/folklore';
import LondonFoodPage from './pages/London/food';
import LondonAroundTownPage from './pages/London/aroundtown';

import NottinghamFolklorePage from './pages/Nottingham/folklore';
import NottinghamFoodPage from './pages/Nottingham/food';
import NottinghamAroundTownPage from './pages/Nottingham/aroundtown';

import FooterNav from './components/Layout/FooterNav';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edinburgh" element={<EdinburghPage />} />
        <Route path="/london" element={<LondonPage />} />
        <Route path="/paris" element={<ParisPage />} />
        <Route path="/nottingham" element={<NottinghamPage />} />
        
        <Route path="/prologue" element={<ProloguePage />} />
        <Route path="/note-kg-beginning" element={<KgNoteBeginningPage />} />
        <Route path="/note-kg-final" element={<KgFinalNotePage />} />
        
        <Route path="/edinburgh/folklore" element={<EdinburghFolklorePage />} />
        <Route path="/edinburgh/food" element={<EdinburghFoodPage />} />
        <Route path="/edinburgh/aroundtown" element={<EdinburghAroundTownPage />} />

        <Route path="/paris/folklore" element={<ParisFolklorePage />} />
        <Route path="/paris/food" element={<ParisFoodPage />} />
        <Route path="/paris/aroundtown" element={<ParisAroundTownPage />} />

        <Route path="/london/folklore" element={<LondonFolklorePage />} />
        <Route path="/london/food" element={<LondonFoodPage />} />
        <Route path="/london/aroundtown" element={<LondonAroundTownPage />} />

        <Route path="/nottingham/folklore" element={<NottinghamFolklorePage />} />
        <Route path="/nottingham/food" element={<NottinghamFoodPage />} />
        <Route path="/nottingham/aroundtown" element={<NottinghamAroundTownPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <FooterNav />
    </Router>
  );
};

export default App;
