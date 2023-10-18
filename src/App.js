import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

import Home from './pages/Home';
import SitePlan from'./pages/SitePlan';
import LegalMention from'./pages/LegalMention';
import ConfidentialPolitics from'./pages/ConfidentialPolitics';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/Plan-du-site" element = {<SitePlan />} />
          <Route path = "/Mentions-légales" element = {<LegalMention />} />
          <Route path = "/Politique-de-confidentialité" element = {<ConfidentialPolitics />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


