import React from 'react'
import { Tooltip, IconButton, Button } from '@mui/material';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import AddIcon from '@mui/icons-material/Add';
import LanguageIcon from '@mui/icons-material/Language';

import '../styles/second.css'

const Second = () => {

    return (
        <div className='second'>
            <div className="biblioteca">
                <Tooltip title="Contraer Tu Biblioteca" placement="top">
                    <div className="prueba">
                        <TurnedInIcon />
                        <span>Tu biblioteca</span>
                    </div>
                </Tooltip>
                <Tooltip title="Crear una lista o carpeta" placement="top">
                    {/* //TODO Arreglar el bg del icono al hacer hover */}
                    <IconButton color='warning' className='bg-icon' aria-label="delete">
                        <AddIcon className='color-icon' />
                    </IconButton>
                </Tooltip>
            </div>
            <div className="button-global-spain">
                <Button variant="contained" size="small" className='button-spain' style={{ backgroundColor: 'transparent', borderRadius: '15px', border: '0.5px solid #b3b3b3' }}>
                    <span className='global-icon'><LanguageIcon fontSize='small' /> </span><p>Español de España</p>
                </Button>
            </div>
        </div>
    )
}

export default Second