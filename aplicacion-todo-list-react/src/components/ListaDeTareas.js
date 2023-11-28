// Componente que contiene el formulario y las tareas

import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../estilos/ListaDeTareas.css';
import Tarea from './Tarea'

function ListaDeTareas() {

    //Vamos a usar un estado, donde se gurdan las tareas actuales
    const [tareas, setTareas] = useState([]);

    // Vamos a usar unos estados para la edición del texto de la tarea:
    const [tareaEditando, setTareaEditando] = useState(null);
    const [nuevoTexto, setNuevoTexto] = useState('');


    const agregarTarea = tarea => {
        console.log(tarea);
        //Verificamos que la tarea no esté en blanco
        if (tarea.texto.trim()) { //Si le quitmos los espacios
            tarea.texto = tarea.texto.trim(); //Trim permite quitar espacios del princiio o final de una cadena de caracteres

            const tareasActualizadas = [tarea, ...tareas] //Esto permite que una tarea nueva se agregue de primero
            setTareas(tareasActualizadas); //Actualizamos el estado

        }
    };

    const eliminarTarea = id => {
        //Se actualizan las tareas, con el arreglo filtrado
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);

    };

    const editarTarea = id => {
        const tareaAEditar = tareas.find(tarea => tarea.id === id);

        setTareaEditando(tareaAEditar);
        setNuevoTexto(tareaAEditar.texto);
    };

    //Función para guardar los cambios
    const guardarEdicion = e => {
        e.preventDefault();

        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === tareaEditando.id) {
                tarea.texto = nuevoTexto;
            }
            return tarea;
        });

        setTareas(tareasActualizadas);
        setTareaEditando(null);
        setNuevoTexto('');
    };


    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    };



    return (
        <> {/* Estos son fragmentos */}
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tareas-lista-contenedor'>
                {!tareaEditando && (
                    tareas.map((tarea) => //Map es un método que va a tomar cada tarea, las va  pasar una por una
                        // como argumento a otra función y va a realizar lo que le especifiquemos
                        // Cada tarea se va a representa como un objeto en el arreglo (array).
                        <Tarea
                            key={tarea.id} //Una forma de saber si hay algún elemento en la lista, key no es un prop, es solo algo necesario de React
                            id={tarea.id} // Este sí es el prop
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                            editarTarea={editarTarea}
                        />
                    )
                )}

                {/* Si tareaEditando es verdadero, se renderiza el formulario de edición */}
                {tareaEditando && (
                    <form className='tarea-edicion-formulario' onSubmit={guardarEdicion}> {/*Este es el form para la edición de las tareas*/}
                        <input
                            className='tarea-edicion-input'
                            type="text"
                            value={nuevoTexto}
                            onChange={e => setNuevoTexto(e.target.value)} //Se va actualizando el nuevo valor con cada cambio
                            title ="Escribe aquí la tarea modificada"
                        />
                        <button type="submit" className='tarea-edicion-boton' title="Da clic aquí para editar">Editar</button>
                    </form>
                )}

            </div>

        </>
    );
}

export default ListaDeTareas;