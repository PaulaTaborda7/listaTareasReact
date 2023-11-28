import React from 'react';
import "../estilos/Tarea.css";
// Agregamos el paquete de React Icons

function Tarea({ texto }) {
    return (
        <div className='tarea-contenedor'>
            <div className='tarea-texto'>
                {texto}
            </div>
            <div className='tarea-icono-x'>
                Eliminar
            </div>
            <div className='tarea-icono-edit'>
                Editar
            </div>
        </div>
    );
}

export default Tarea;