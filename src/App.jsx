import { useState, useEffect } from 'react'
import './App.css'
import TaskList from "./TaskList";

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
  const [editandoId, setEditandoId] = useState(null);
  const [textoEditado, setTextoEditado] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
  localStorage.setItem(
    "tareas",
    JSON.stringify(tareas)
  );
  }, [tareas]);

  useEffect(() => {
  cargarUsuarios();
  }, 
  []);



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

async function cargarUsuarios() {

  try {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    setUsuarios(data);

  } catch (error) {

    console.error(
      "Error al cargar usuarios:",
      error
    );

  }

}

return (

    <div>

      <h1>Lista de Tareas</h1>

      <input
        type="text"
        placeholder="Escribe una tarea"
        value={nuevaTarea}
        onChange={(event) => setNuevaTarea(event.target.value)}
      />

      <button onClick={agregarTarea}>
        Agregar
      </button>

      <p>Texto actual: {nuevaTarea}</p>


 <TaskList
  tareas={tareas}
  toggleTask={toggleTask}
  eliminarTarea={eliminarTarea}
  editarTarea={editarTarea}
/>

 <h2>Usuarios API</h2>

<ul>
  {usuarios.map(function(usuario) {

    return (
      <li key={usuario.id}>
        {usuario.name}
      </li>
    );

  })}
</ul>

</div>
  )
}
export default App

