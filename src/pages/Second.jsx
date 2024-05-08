import React from 'react'
import { Tooltip, IconButton } from '@mui/material';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

import '../styles/second.css'

const Second = () => {
    return (
        <div className='second'>
            <div className="biblioteca">
                <TurnedInIcon />
                <p>Tu biblioteca</p>
                <Tooltip title="Crear una lista o carpeta" placement="top">
                    <IconButton aria-label="delete">
                        <TurnedInIcon className='color-icon'/>
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default Second