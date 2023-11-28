import React from 'react';
import '../estilos/VistaPDF.css';
import { Link } from 'react-router-dom';
import pdf from "../archivos/paulaandreatabordamontes.pdf" 

const VistaPDF = () => {
    return (
        <>
            <div className='conceptos-boton-atras'>
                <Link to="/">
                    <button className='boton-atras'>
                        Volver
                    </button>
                </Link>
            </div>

            {/* Inserto el PDF con las respuestas a las preguntas conceptual */}
            <div className='pdf'>
                <embed src={pdf}  type="application/pdf" width="70%" height="600px" />
            </div>
        </>
    );
}

export default VistaPDF;
