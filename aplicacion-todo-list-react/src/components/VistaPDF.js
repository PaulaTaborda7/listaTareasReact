import React from 'react';
import '../estilos/VistaPDF.css';
import { Route, Routes, Link } from 'react-router-dom';

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

            {/* Inserto el PDF con las respuestas a las preguntas conceptuales: */}
            <embed src="/ruta/para/tu-archivo.pdf" type="application/pdf" width="100%" height="600px" />
            <h2>Insertar PDF aquí</h2>
        </>
    );
}

export default VistaPDF;
