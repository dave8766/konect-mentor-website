import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';
import AthletePage from './pages/AthletePage';
import AthleteListPage from './pages/AthleteListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/athlete" element={<AthletePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/athletes" element={<AthleteListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
