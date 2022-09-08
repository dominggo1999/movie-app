import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header/Header';
import Home from './pages/Home';
import MoviesProvider from './context/MoviesContext';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <MoviesProvider>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/:movieID"
          element={<p>Movie details</p>}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </MoviesProvider>
  );
};

export default App;
