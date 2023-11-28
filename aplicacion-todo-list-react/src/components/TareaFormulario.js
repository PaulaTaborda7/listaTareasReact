import React, { useState } from 'react';
import '../estilos/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value); //Así se extrae el valor de lo que el usuario escribe en el input

    }

    const manejarEnvio = e => {
        // Para que toda la app no se cargue del todo, cuando se envíe el formulario:
        e.preventDefault();
        const tareaNueva = {
            // Usamos uuid para crear los identificadores únicos
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva); //Manda la tarea a ListaTareas
    }


    return (
        <form 
            className='tarea-formulario'
            onSubmit={manejarEnvio}>
            <input
                className = 'tarea-input'
                type = 'text'
                placeholder ='Escribe un To-Do'
                name = 'texto'
                onChange={manejarCambio}
            />

            <button className='tarea-boton'>
                Agregar un To-Do  
            </button>
        </form>
    );
}

export default TareaFormulario;