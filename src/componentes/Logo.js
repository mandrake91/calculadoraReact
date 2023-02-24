import React from 'react';
import free from '../imagenes/free.png';
import '../stylesheets/Logo.css';

function Logo() {  
    return (
        <div className='freecodecamp-logo-contenedor'>
        <img
        src={free}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp'
        />
    </div>
    );
}

export default Logo