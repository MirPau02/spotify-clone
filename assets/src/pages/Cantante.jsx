import React from 'react';
import '../styles/cantante.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import cantantesDeRap from './raperos'; // Importa el array de cantantes de rap
import foto from '../img/logo192.png';

const Cantante = () => {
    return (
        <div className='cantante'>
            <div className='titulo'>
                <h2>
                    <a>Artistas populares</a>
                </h2>
                <p>Mostrar todos</p>
            </div>
            <div className="singer">
                {cantantesDeRap.map((cantante, index) => (
                    <div className="prueba" key={index}>
                        <Card className='card-hover' sx={{ minWidth: 178, maxWidth: 178, minHeight: 236, maxHeight: 236, background: 'none' }}>
                            <CardMedia
                                sx={{ height: 140, padding: '10px', borderRadius: '50%' }}
                                image={foto} // Si la imagen no está disponible, usa una imagen predeterminada
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ color: 'white', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {cantante.nombre}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: '#B3B3B3' }}>
                                    Artista
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cantante;