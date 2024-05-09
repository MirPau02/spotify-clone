import React from 'react'
import Cantante from './Cantante.jsx'
import { Tooltip, IconButton, Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import '../styles/content.css'

const Content = () => {
    return (
        <div className='container'>
            <div className="navbar">
                <div className="icons">
                    <IconButton sx={{ backgroundColor: '#0a0a0a', marginRight: '10px', marginLeft: '10px', '&:hover': { background: '#0a0a0a' } }} aria-label="delete">
                        <KeyboardArrowLeftIcon sx={{ color: '#B3B3B3' }} />
                    </IconButton>
                    <IconButton sx={{ backgroundColor: '#0a0a0a', '&:hover': { background: '#0a0a0a' } }} aria-label="delete">
                        <KeyboardArrowRightIcon sx={{ color: '#B3B3B3' }} />
                    </IconButton>
                </div>
                <div className="login">
                    <Button variant="text" sx={{ textTransform: 'none', color: '#B3B3B3', fontWeight: '700' }}>
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
                        }}>
                        Iniciar sesión
                    </Button>
                </div>
            </div>
            <div className="section">
                <div className="with-scroll">
                    <Cantante />
                    <Cantante />
                </div>
            </div>
        </div>
    )
}

export default Content