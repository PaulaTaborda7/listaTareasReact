import React from 'react';
import "../estilos/Tarea.css";
// Agregamos el paquete de React Icons
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";



function Tarea({ id, texto, completada, completarTarea, eliminarTarea, editarTarea }) {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'} title="Este es tu To-Do ¡Da clic para completar!"> {/*Aquí asignamos una clase condicionada*/}
            <div className='tarea-texto' onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div>
                <AiTwotoneEdit className='tarea-icono-edit' onClick={() => editarTarea(id)} title="Clic aquí para editar tu To-Do"/>
            </div>
            <div>
                <AiTwotoneCloseCircle className='tarea-icono-x' onClick={() => eliminarTarea(id)} title="Clic aquí para eliminar tu to-Do"/>
            </div>

    
        </div>
    );
}

export default Tarea;