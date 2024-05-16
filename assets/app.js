import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './MainRouter';
import './styles/app.css';

function App() {
    return (
        <div className='montserrat'>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </div>
    );
}

// Monta el componente App en el elemento con el ID 'root'
// document.getElementById('root').render(<App />);
const root = createRoot(document.getElementById('root'));
root.render(<App />);
