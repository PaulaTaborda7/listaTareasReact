import './App.css';
import gaiaLogo from './images/gaia-logo.png'
import Tarea from './components/Tarea' //Importo el componente Tarea

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='gaia-logo-contenedor'>
        <img
          src={gaiaLogo}
          className="gaia-logo" />
      </div>
      {/* Now, the code of to-do list */}
      <div className="todo-list">
        <h1>
          To-do List para hoy 🍎
        </h1>
        <Tarea texto="Aprender React"/> {/*Usamos el componente Tarea*/}
      </div>
    </div>
  );
}

export default App;
