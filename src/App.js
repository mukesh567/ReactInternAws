import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Show from './pages/ShowDetails/Show.jsx';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home shows={shows} />} />
          <Route path="/show/:id" element={<Show />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
