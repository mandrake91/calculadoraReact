import React from 'react';
import '../stylesheets/BotonClear.css';

const BotonClear = (props) => (
    <div className='boton-clear'
    onClick={props.manejarClear} 
    > {/*se puede usar button en vez de div*/}
        {props.children}
    </div>
)

export default BotonClear;