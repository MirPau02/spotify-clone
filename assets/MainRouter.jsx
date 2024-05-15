import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './src/pages/InicioSesion.jsx'

const MainRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRouter;
