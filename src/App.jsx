import { useState, useEffect } from 'react'
import './App.css'
import TaskList from "./TaskList";
import {  Routes,  Route } from "react-router-dom";
import Home from "./pages/Home";
import Tareas from "./pages/Tareas";
import { Link } from "react-router-dom";
import Usuarios from "./pages/Usuarios";

function App() {

  const [tareas, setTareas] = useState(() => {

  const tareasGuardadas =
    localStorage.getItem("tareas");

  return tareasGuardadas
    ? JSON.parse(tareasGuardadas)
    : [];

});

function toggleTask(id) {

  console.log("Click en tarea:", id);

  const nuevasTareas = tareas.map(function(tarea) {

    if (tarea.id === id) {

      return {
        ...tarea,
        completed: !tarea.completed
      };

    }

    return tarea;

  });

  setTareas(nuevasTareas);

}

function eliminarTarea(id) {

  console.log("Eliminar tarea:", id);

  const nuevasTareas = tareas.filter(function(tarea) {

    return tarea.id !== id;

  });

  setTareas(nuevasTareas);

}

function editarTarea(id, nuevoTexto) {

  console.log("Editar tarea:", id);

  const nuevasTareas = tareas.map(function(tarea) {

    if (tarea.id === id) {

      return {
        ...tarea,
        text: nuevoTexto
      };

    }

    return tarea;

  });

  setTareas(nuevasTareas);

}

  const [nuevaTarea, setNuevaTarea] = useState("");
  
  useEffect(() => {
  localStorage.setItem(
    "tareas",
    JSON.stringify(tareas)
  );
  }, [tareas]);

  
function agregarTarea() {     

  if (nuevaTarea.trim() === "") {
    return;
  }

  setTareas([
  ...tareas,

  {
    id: Date.now(),
    text: nuevaTarea,
    completed: false
  }

]);

  setNuevaTarea("");

}

return (

<div>

  <nav>

        <Link to="/">
          Inicio
        </Link>

        {" | "}

        <Link to="/tareas">
            Tareas
        </Link>

        {" | "}
        <Link to="/usuarios">
            Usuarios
        </Link>

  </nav>

  <Routes>

  <Route
          path="/"
            element={<Home />}
  />

  <Route
          path="/tareas"
            element={
  <Tareas
  tareas={tareas}
  nuevaTarea={nuevaTarea}
  setNuevaTarea={setNuevaTarea}
  agregarTarea={agregarTarea}
  toggleTask={toggleTask}
  eliminarTarea={eliminarTarea}
  editarTarea={editarTarea}
/>
  }
  />

  <Route
  path="/usuarios"
  element={<Usuarios />}
/>

  </Routes>

  
</div>
  )
}
export default App

