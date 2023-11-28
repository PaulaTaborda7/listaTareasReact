import React from 'react';
import "../estilos/Tarea.css";
// Agregamos el paquete de React Icons
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";



function Tarea({ id, texto, completada, completarTarea, eliminarTarea, editarTarea }) {
    return (
        // El div siguiente tiene una clase condicional, si completada es true el div va  atener las clases tarea-contenedor completada
        // sino solo va a tener la clase tarea-contenedor
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'} title="Este es tu To-Do ¡Da clic para completar!"> {/*Aquí asignamos una clase condicionada*/}
            <div className='tarea-texto' onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div>
                {/* Uso un ícono de react-icons */}
                <AiTwotoneEdit className='tarea-icono-edit' onClick={() => editarTarea(id)} title="Clic aquí para editar tu To-Do"/>
            </div>
            <div>
                {/* Uso un ícono de react-icons */}
                <AiTwotoneCloseCircle className='tarea-icono-x' onClick={() => eliminarTarea(id)} title="Clic aquí para eliminar tu to-Do"/>
            </div>

    
        </div>
    );
}

export default Tarea;