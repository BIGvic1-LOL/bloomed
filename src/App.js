import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RandomQuote from './RandomQuote';
import Favorites from './favorite';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RandomQuote />} />
          <Route path="/favorite" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
