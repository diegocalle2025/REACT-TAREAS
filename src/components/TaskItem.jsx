import { useState } from "react";
import "./TaskItem.css";
function TaskItem(props) {

  const [editando, setEditando] =
    useState(false);

    const [textoEditado, setTextoEditado] =
    useState(props.tarea.text);

    console.log("Editando:", editando);

  return (

<div
    className="task-card"
    onClick={() => props.toggleTask(props.tarea.id)}
>

    <div className="task-header">

        <h3>

            {props.tarea.completed ? "✅" : "📄"}

            {" "}

            {editando ? (

                <input

                    type="text"

                    value={textoEditado}

                    onChange={(event) =>
                        setTextoEditado(event.target.value)
                    }

                    onClick={(event) =>
                        event.stopPropagation()
                    }

                />

            ) : (

                props.tarea.text

            )}

        </h3>

        <span
            className={
                props.tarea.completed
                    ? "estado completada"
                    : "estado pendiente"
            }
        >

            {props.tarea.completed
                ? "Completada"
                : "Pendiente"}

        </span>

    </div>

    <div className="task-buttons">

        <button

            className="editar"

            onClick={(event) => {

                event.stopPropagation();

                if (editando) {

                    props.editarTarea(
                        props.tarea.id,
                        textoEditado
                    );

                }

                setEditando(!editando);

            }}

        >

            {editando ? "Guardar" : "Editar"}

        </button>

        <button

            className="eliminar"

            onClick={(event) => {

                event.stopPropagation();

                props.eliminarTarea(props.tarea.id);

            }}

        >

            Eliminar

        </button>

    </div>

</div>

);

}

export default TaskItem;