import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </>
  );
};

export default App;
