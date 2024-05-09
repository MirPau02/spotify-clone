import React from 'react'
import { Tooltip, IconButton, Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import '../styles/content.css'

const Content = () => {
    return (
        <div className='container'>
            <div className="navbar">
                <div className="icons">
                    <IconButton style={{ backgroundColor: 'black', marginRight: '10px', marginLeft: '10px' }} aria-label="delete">
                        <KeyboardArrowLeftIcon style={{ color: 'white' }} />
                    </IconButton>
                    <IconButton style={{ backgroundColor: 'black' }} aria-label="delete">
                        <KeyboardArrowRightIcon style={{ color: 'white' }} />
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
                                background: '#B3B3B3' // Cambia a tu color de fondo deseado
                            }
                        }}>
                        Iniciar sesión
                    </Button>
                </div>
            </div>
            <div className="section">

            </div>
        </div>
    )
}

export default Content