import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header/Header';
import Home from './pages/Home';
import MoviesProvider from './context/MoviesContext';

const App = () => {
  return (
    <MoviesProvider>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </MoviesProvider>
  );
};

export default App;
