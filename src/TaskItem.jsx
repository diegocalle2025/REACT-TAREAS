import { useState } from "react";
function TaskItem(props) {

  const [editando, setEditando] =
    useState(false);

    const [textoEditado, setTextoEditado] =
    useState(props.tarea.text);

    console.log("Editando:", editando);

  return (

  <li onClick={() =>
    props.toggleTask(props.tarea.id)
  }>

    {props.tarea.completed ? "✓ " : "• "}
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
    <button
      onClick={(event) => {

      event.stopPropagation();

        props.eliminarTarea(
      props.tarea.id
    );

  }}
>
  Eliminar
</button>

<button
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

  </li>

);

}

export default TaskItem;