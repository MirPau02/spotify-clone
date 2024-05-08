import React from 'react'
import logo from '../img/spotify.svg'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import '../styles/first.css';

const First = () => {
    return (
        <div className='first'>
            <div className='logo'>
                <CottageOutlinedIcon />
                <p>Spotify</p>
            </div>
            <div className="inicio">
                <CottageOutlinedIcon />
                <p>Inicio</p>
            </div>
            <div className="buscar">
                <SearchOutlinedIcon />
                <p>Buscar</p>
            </div>
        </div>
    )
}

export default First