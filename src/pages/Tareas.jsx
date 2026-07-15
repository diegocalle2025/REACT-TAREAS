function Tareas(props) {

  return (

  <div>

    <h1>Página de Tareas</h1>

    <p>
      Número de tareas: {props.tareas.length}
    </p>

    <p>
      Texto actual: {props.nuevaTarea}
    </p>

    <input
      type="text"
      placeholder="Escribe una tarea"
      value={props.nuevaTarea}
      onChange={(event) =>
      props.setNuevaTarea(event.target.value)
      }
    />

<button
  onClick={props.agregarTarea}
>
  Agregar
</button>

  </div>

);

}

export default Tareas;