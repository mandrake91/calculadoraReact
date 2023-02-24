import React from 'react';
import '../stylesheets/Boton.css';

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };
  
return (
      <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()}
          onClick={() => props.manejarClic(props.children)} /*funcion anonima, no se define de forma especifica*/
      > 
      {/*si el resultado es verdadero entonces se reemplaza por operador que es la segunda clase que le asignamos al div, sino no hace ningun cambio en la clase, trimEnd en este caso cuando es null le saca los espacios vacios a la clase*/}     
          {props.children}
      </div>
  );
}

export default Boton