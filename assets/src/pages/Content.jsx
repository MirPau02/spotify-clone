import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cantante from './Cantante.jsx';
import { IconButton, Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import '../styles/content.css';

const Content = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className="navbar">
        <div className="icons">
          <IconButton size="small" sx={{ backgroundColor: '#0a0a0a', marginRight: '10px', marginLeft: '10px', '&:hover': { background: '#0a0a0a' } }} aria-label="previous">
            <KeyboardArrowLeftIcon sx={{ color: '#B3B3B3' }} />
          </IconButton>
          <IconButton size="small" sx={{ backgroundColor: '#0a0a0a', '&:hover': { background: '#0a0a0a' } }} aria-label="next">
            <KeyboardArrowRightIcon sx={{ color: '#B3B3B3' }} />
          </IconButton>
        </div>
        <div className="login">
          <Button
            variant="text"
            sx={{
              textTransform: 'none',
              color: '#B3B3B3',
              fontWeight: '700',
              '&:hover': {
                color: '#fff'
              }
            }}>
            Registrarse
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              color: 'black',
              background: 'white',
              borderRadius: '20px',
              fontWeight: '700',
              marginRight: '20px',
              marginLeft: '10px',
              '&:hover': {
                background: '#B3B3B3'
              }
            }}
            onClick={() => navigate('/login')}
          >
            Iniciar sesión
          </Button>
        </div>
      </div>
      <div className="section">
        <div className="with-scroll">
          <Cantante />
        </div>
      </div>
    </div>
  );
};

export default Content;
