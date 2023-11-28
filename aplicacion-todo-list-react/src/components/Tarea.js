import React from 'react';
import "../estilos/Tarea.css";
// Agregamos el paquete de React Icons
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";



function Tarea({ texto }) {
    return (
        <div className='tarea-contenedor'>
            <div className='tarea-texto'>
                {texto}
            </div>
            <div>
                <AiTwotoneEdit className='tarea-icono-edit' />
            </div>
            <div>
                <AiTwotoneCloseCircle className='tarea-icono-x' />
            </div>
        </div>
    );
}

export default Tarea;