import './App.css';
import gaiaLogo from './images/gaia-logo.png'
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <>
      <div className='gaia-logo-contenedor'>
        <img
          src={gaiaLogo}
          className="gaia-logo"
          title="Logo de GAIA - Grupo de Ambientes Inteligentes Adaptativos" />
      </div>
      <div className='boton-conceptos-contenedor'>
        <button className='conceptos-boton'>Ver punto A - preguntas conceptuales</button>
      </div>
      <div className="aplicacion-tareas">
        {/* Now, the code of to-do list */}
        <div className="todo-list">
          <h1>
            Mi To-do List 🍎
          </h1>
          <ListaDeTareas /> {/*Usamos el componente ListaDeTareas*/}
        </div>
      </div>
    </>
  );
}

export default App;
