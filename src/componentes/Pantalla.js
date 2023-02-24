import React from "react";
import '../stylesheets/Pantalla.css';

/*otra forma de definir los componentes como funcion flecha*/
/*recibe un valor, como es javascript se pone {input}, y luego se muestra en el  div*/
const Pantalla = ({ input }) => (
    <div className='input'>
        {input}
    </div>
);

export default Pantalla;