import React from 'react'
import logo from '../img/spotify.png'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import '../styles/first.css';

const First = () => {
    return (
        <div className='first'>
            <div className='logo'>
                <CottageOutlinedIcon />
                <span title='Spotify'> Spotify </span>
            </div>
            <div className="inicio">
                <CottageOutlinedIcon />
                <span> Inicio </span>
            </div>
            <div className="buscar">
                <SearchOutlinedIcon />
                <span> Buscar </span>
            </div>
        </div>
    )
}

export default First