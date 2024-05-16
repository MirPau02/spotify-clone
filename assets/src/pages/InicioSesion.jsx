import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import '../styles/login.css'
import { Divider, Button, TextField, Switch, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import logo from '../img/logo.png';

const Login = () => {

    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\\|\[\]{};:\'",.<>/?]).{5,}$/;

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setFormValues({ ...formValues, email: value });
        } else if (name === "password") {
            setFormValues({ ...formValues, password: value });
        }
    };

    const handleErrors = (e) => {
        e.preventDefault();
        let totalErrors = [];
        let hasError = false;

        if (!emailRegex.test(formValues.email)) {
            totalErrors.push({ type: 'email', message: 'El correo electrónico no es válido' });
            hasError = true;
        }

        if (!passwordRegex.test(formValues.password)) {
            totalErrors.push({ type: 'password', message: 'La contraseña debe tener minúscula, mayúscula, número y un carácter o más de 5 carácteres' });
            hasError = true;
        }

        if (!hasError) {
            handleSubmit();
        }
        setErrors(totalErrors);
    };

    const handleSubmit = () => {
        console.log(formValues);
    };

    return (
        <div className="login">
            <Helmet>
                <title>Iniciar sesión - Spotify</title>
            </Helmet>
            <form onSubmit={handleErrors}>
                <div className='navbarLogin flex items-center'>
                    <div className="imagen">
                        <a href='/'>
                            <img src={logo} />
                        </a>
                    </div>
                </div>
                <div className='containerLogin flex justify-center '>
                    <div className="formularioLogin rounded-xl my-8 px-12">
                        <div className="header font-bold">
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
                                            textTransform: 'none',
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                border: '2px solid white'
                                            }
                                        }}
                                    >
                                        {/* <GoogleIcon /> */}
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
                                            textTransform: 'none',
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
                                            textTransform: 'none',
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                border: '2px solid white'
                                            }
                                        }}
                                    >
                                        Continuar con Apple
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <Divider sx={{ borderColor: 'gray' }} />
                        <div className="textfields mt-8 text-center">
                            <div className="container-email">
                                <div className="email mb-4">
                                    <p className="text-white">Correo electrónico o nombre de usuario</p>
                                    <TextField
                                        id="email"
                                        name='email'
                                        type='text'
                                        value={formValues.email}
                                        onChange={handleChange}
                                        placeholder='Correo electrónico o nombre de usuario'
                                        variant="outlined"
                                        InputProps={{
                                            style: { color: 'white' },
                                            classes: {
                                                notchedOutline: errors.some(error => error.type === "email") ? 'error-border' : 'white-border',
                                            }
                                        }}
                                        InputLabelProps={{
                                            style: { color: 'gray' }
                                        }}
                                        sx={{
                                            width: '324px',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: errors.some(error => error.type === "email") ? 'red' : 'white',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: errors.some(error => error.type === "email") ? 'red' : 'white',
                                                    border: errors.some(error => error.type === "email") ? '1px solid red' : '2px solid white',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: errors.some(error => error.type === "email") ? 'red' : 'white',
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
                                    {(errors.length > 0 && errors.find(error => error.type === "email")) && (
                                        <div className='text-red-700 text-xs text-left'>
                                            <ErrorOutlineIcon style={{ fontSize: '12px', marginRight: '5px' }} />
                                            {errors.find(error => error.type === "email").message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="container-password">
                                <div className="password mb-4">
                                    <p className="text-white">Contraseña</p>
                                    <TextField
                                        id="password"
                                        name='password'
                                        placeholder='Contraseña'
                                        variant="outlined"
                                        value={formValues.password}
                                        onChange={handleChange}
                                        type={showPassword ? 'text' : 'password'}
                                        InputProps={{
                                            style: { color: 'white' },
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        style={{ color: 'white' }}
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                            classes: {
                                                notchedOutline: errors.some(error => error.type === "password") ? 'error-border' : 'white-border',
                                            }
                                        }}
                                        InputLabelProps={{
                                            style: { color: 'gray' }
                                        }}
                                        sx={{
                                            width: '324px',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: errors.some(error => error.type === "password") ? 'red' : 'white',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: errors.some(error => error.type === "password") ? 'red' : 'white',
                                                    border: errors.some(error => error.type === "password") ? '1px solid red' : '2px solid white',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: errors.some(error => error.type === "password") ? 'red' : 'white',
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
                                    {(errors.length > 0 && errors.find(error => error.type === "password")) && (
                                        <div className='text-red-700 text-xs text-left flex items-center'>
                                            <ErrorOutlineIcon style={{ fontSize: '12px', marginRight: '5px' }} />
                                            {errors.find(error => error.type === "password").message}
                                        </div>
                                    )}
                                </div>
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
                            <Button type="submit"
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
                        <div className="text-center">
                            <a href='#' className='inline-block'>
                                <p className='mt-8 mb-8 underline text-white hover:text-custom-text'>
                                    ¿Se te ha olvidado la contraseña?
                                </p>
                            </a>
                        </div>
                        <Divider sx={{ borderColor: 'gray' }} />
                        <div className="count mt-8 mb-8 flex justify-evenly">
                            <p className='text-color-text'>¿No tienes cuenta?</p>
                            <a href='/register'>
                                <p className='text-white underline hover:text-custom-text'>Subscríbete a Spotify</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footerLogin flex justify-center items-center">
                    <p>Este sitio está protegido por reCAPTCHA. Se aplican los <a className='cursor-pointer underline' target='_blank' href='https://policies.google.com/privacy'>Términos del servicio</a> y la <a className='cursor-pointer underline' target='_blank' href='https://policies.google.com/terms'>Política de privacidad</a> de Google.</p>
                </div>
            </form>
        </div >
    )
}

export default Login;