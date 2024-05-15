import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './src/pages/InicioSesion.jsx'
import Register from './src/pages/Register.jsx'

const MainRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRouter;
