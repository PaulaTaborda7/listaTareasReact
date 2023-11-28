import React from 'react';
import "../estilos/Tarea.css";
// Agregamos el paquete de React Icons
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";



function Tarea({ id, texto, completada, completarTarea, eliminarTarea, editarTarea }) {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'} > {/*Aquí asignamos una clase condicionada*/}
            <div className='tarea-texto' onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div onClick={() => editarTarea(id)}>
                <AiTwotoneEdit className='tarea-icono-edit' />
            </div>
            <div onClick={() => eliminarTarea(id)}>
                <AiTwotoneCloseCircle className='tarea-icono-x' />
            </div>

    
        </div>
    );
}

export default Tarea;