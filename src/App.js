import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import SitePlan from './pages/SitePlan';
import LegalMention from './pages/LegalMention';
import ConfidentialPolitics from './pages/ConfidentialPolitics';

function App() {
  useEffect(() => {
    const handleOrientationChange = () => {
      // Verrouiller l'orientation en "portrait-primary"
      if (window.screen.orientation) {
        window.screen.orientation.lock('portrait-primary').catch((error) => {
          console.error('Erreur lors du verrouillage de l\'orientation :', error);
        });
      }
    };

    // Ajouter un écouteur d'événements pour le changement d'orientation
    window.addEventListener('orientationchange', handleOrientationChange);

    // Configuration initiale
    handleOrientationChange();

    // Nettoyage lors du démontage du composant
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Plan-du-site" element={<SitePlan />} />
          <Route path="/Mentions-légales" element={<LegalMention />} />
          <Route path="/Politique-de-confidentialité" element={<ConfidentialPolitics />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
