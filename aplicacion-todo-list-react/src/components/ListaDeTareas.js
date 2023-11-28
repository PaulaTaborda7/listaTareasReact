// Componente que contiene el formulario y las tareas

import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../estilos/ListaDeTareas.css';
import Tarea from './Tarea'

function ListaDeTareas() {

    //Vamos a usar un estado, donde se gurdan las tareas actuales
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        //Verificamos que la tarea no esté en blanco
        if (tarea.texto.trim()) { //Si le quitmos los espacios
            tarea.texto = tarea.texto.trim(); //Trim permite quitar espacios del princiio o final de una cadena de caracteres
           
            const tareasActualizadas = [tarea, ...tareas] //Esto permite que una tarea nueva se agregue de primero
            setTareas(tareasActualizadas); //Actualizamos el estado

        }
    }




    return (
        <> {/* Estos son fragmentos */}
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tareas-lista-contenedor'>
                {
                     tareas.map((tarea) => //Map es un método que va a tomar cada tarea, las va  pasar una por una
                    // como argumento a otra función y va a realizar lo que le especifiquemos
                    // Cada tarea se va a representa como un objeto en el arreglo (array).
                        <Tarea
                            key={tarea.id} //Una forma de saber si hay algún elemento en la lista, key no es un prop, es solo algo necesario de React
                            id={tarea.id} // Este sí es el prop
                            texto={tarea.texto}
                            completada={tarea.completada}
                        />
                    )
                }
            </div>

        </>
    );
}

export default ListaDeTareas;