import TaskList from "../components/TaskList";
import "./Tareas.css";
function Tareas(props) {

  return (

<div className="tareas-page">

    <div className="titulo">

        <h1>Mis Tareas</h1>

        <p>

            Organiza tu trabajo de forma sencilla.

        </p>

    </div>

    <div className="formulario">

        <input

            type="text"

            placeholder="Escribe una tarea"

            value={props.nuevaTarea}

            onChange={(event) =>
                props.setNuevaTarea(event.target.value)
            }

        />

        <button onClick={props.agregarTarea}>

            Agregar

        </button>

    </div>

    <TaskList

        tareas={props.tareas}

        toggleTask={props.toggleTask}

        eliminarTarea={props.eliminarTarea}

        editarTarea={props.editarTarea}

    />

</div>

);

}

export default Tareas;