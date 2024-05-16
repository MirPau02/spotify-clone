import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import '../styles/login.css'
import { Divider, Button, TextField, Switch, InputAdornment, IconButton } from '@mui/material';
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
            totalErrors.push({ type: 'email', message: 'Este correo electrónico no es válido. Asegúrate de que tenga un formato como este: ejemplo@email.com' });
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
                <title>Regístrate - Spotify</title>
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
                            <h1>Regístrate para empezar a escuchar contenido</h1>
                        </div>
                        <div className="textfields mt-8 text-center">
                            <div className="container-email">
                                <div className="email mb-4">
                                    <p className="text-white">Dirección de correo electrónico</p>
                                    <TextField
                                        id="email"
                                        name='email'
                                        type='text'
                                        value={formValues.email}
                                        onChange={handleChange}
                                        placeholder='nombre@dominio.com'
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
                        </div>
                        <div className="flex justify-center mt-6 mb-6">
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
                                Siguiente
                            </Button>
                        </div>

                        <Divider sx={{ '&::before, &::after': { borderColor: 'gray' } }}>
                            <p style={{color: '#808080'}}> o </p>
                        </Divider>

                        <div className="continueSocial flex justify-center">
                            <ul>
                                <li className='mt-6 mb-2'>
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
                                <li>
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
                        <div className="count mt-8 mb-8 flex justify-evenly">
                            <p className='text-color-text'>¿Ya tienes cuenta?</p>
                            <a href='/login'>
                                <p className='text-white underline hover:text-custom-text'>Inicia sesión aquí.</p>
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