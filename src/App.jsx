import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router.jsx';
import "./App.css"

function App() {
  return (
    <div className='bg-home'>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;