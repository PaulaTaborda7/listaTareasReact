import './App.css';
import gaiaLogo from './images/gaia-logo.png';
import ListaDeTareas from './components/ListaDeTareas';
import VistaPDF from './components/VistaPDF';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>


      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/insertar-pdf" element={<VistaPDF />} />
      </Routes>
    </>
  );
}

function TodoList() {
  return (
    <>

      <div className='gaia-logo-contenedor'>
        <img
          src={gaiaLogo}
          className="gaia-logo"
          title="Logo de GAIA - Grupo de Ambientes Inteligentes Adaptativos"
        />
      </div>

      <div className='boton-conceptos-contenedor'>
        <Link to="/insertar-pdf">
          <button className='conceptos-boton'>Ver punto A - preguntas conceptuales</button>
        </Link>
      </div>
      <div className='aplicacion-tareas'>
        <div className="todo-list">
          <h1>Mi To-do List 🍎</h1>
          <ListaDeTareas />
        </div>
      </div>
    </>
  );
}

export default App;
