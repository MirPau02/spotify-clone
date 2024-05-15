import React, { useState } from 'react'
import '../styles/login.css'
import { Divider, Button, TextField, Switch, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo from '../img/logo.png';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="login">
            <div className='navbarLogin flex items-center'>
                <div className="imagen">
                    <a href='/'>
                        <img src={logo} />
                    </a>
                </div>
            </div>
            <div className='containerLogin flex justify-center '>
                <div className="formularioLogin rounded-xl my-8 px-12">
                    <div className="header">
                        <h1>Inicia sesión en Spotify</h1>
                    </div>
                    <div className="continueSocial flex justify-center">
                        <ul>
                            <li className='mb-2'>
                                <Button
                                    sx={{
                                        width: '324px',
                                        height: '48px',
                                        border: '1px solid white',
                                        color: 'white',
                                        borderRadius: '25px',
                                        backgroundColor: 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            border: '2px solid white'
                                        }
                                    }}
                                >
                                    Continuar con Google
                                </Button>
                            </li>
                            <li className='mb-2'>
                                <Button
                                    sx={{
                                        width: '324px',
                                        height: '48px',
                                        border: '1px solid white',
                                        color: 'white',
                                        borderRadius: '25px',
                                        backgroundColor: 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            border: '2px solid white'
                                        }
                                    }}
                                >
                                    Continuar con Facebook
                                </Button>
                            </li>
                            <li className='mb-8'>
                                <Button
                                    sx={{
                                        width: '324px',
                                        height: '48px',
                                        border: '1px solid white',
                                        color: 'white',
                                        borderRadius: '25px',
                                        backgroundColor: 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            border: '2px solid white'
                                        }
                                    }}
                                >
                                    Continuar con Apple J
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <Divider sx={{ borderColor: 'gray' }} />
                    <div className="textfields mt-8 text-center">
                        <div className="email mb-4">
                            <p className="text-white">Correo electrónico o nombre de usuario</p>
                            <TextField
                                id="outlined-basic"
                                placeholder='Correo electrónico o nombre de usuario'
                                variant="outlined"
                                InputProps={{
                                    style: { color: 'white', borderColor: 'white' },
                                    classes: {
                                        notchedOutline: 'white-border'
                                    }
                                }}
                                InputLabelProps={{
                                    style: { color: 'gray' }
                                }}
                                sx={{
                                    width: '324px',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white',
                                            border: '2px solid white'
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white'
                                        },
                                    },
                                    input: {
                                        color: 'white'
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'gray',
                                    },
                                }}
                            />
                        </div>
                        <div className="password mb-4">
                            <p className="text-white">Contraseña</p>
                            <TextField
                                id="outlined-basic"
                                placeholder='Contraseña'
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    style: { color: 'white', borderColor: 'white' },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                style={{ color: 'white' }}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        notchedOutline: 'white-border'
                                    }
                                }}
                                InputLabelProps={{
                                    style: { color: 'gray' }
                                }}
                                sx={{
                                    width: '324px',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white',
                                            border: '2px solid white'
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                        },
                                    },
                                    input: {
                                        color: 'white'
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'gray',
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {/* //TODO Cambiar el tamaño de la bola del switch */}
                        <Switch
                            defaultChecked
                            sx={{
                                '& .MuiSwitch-switchBase.Mui-checked': {
                                    color: 'black',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                    }
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                    backgroundColor: 'rgba(30,215,96,255)',
                                }
                            }}
                        />
                        <p className='flex items-center text-white'>Recuérdame</p>
                    </div>
                    <div className="flex justify-center mt-8">
                        <Button
                            sx={{
                                width: '324px',
                                height: '48px',
                                color: 'black',
                                borderRadius: '25px',
                                backgroundColor: '#1ed760',
                                textTransform: 'none',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#1ed760',
                                    transform: 'scale(1.02)', // Hacer el botón un poco más grande en hover
                                }
                            }}
                        >
                            Iniciar Sesión
                        </Button>
                    </div>
                    <a href='#'>
                        <p className='mt-8 underline text-center text-white hover:text-custom-text'>
                            ¿Se te ha olvidado la contraseña?
                        </p>
                    </a>
                </div>
            </div>
            <div className="footerLogin flex justify-center items-center">
                <p>Este sitio está protegido por reCAPTCHA. Se aplican los <u className='prueba'>Términos del servicio</u> y la <u className='prueba'>Política de privacidad</u> de Google.</p>
            </div>
        </div>
    )
}

export default Login;