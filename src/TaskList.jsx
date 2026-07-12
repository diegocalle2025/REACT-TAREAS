import TaskItem from "./TaskItem";
function TaskList(props) {

  return (

    <ul>

      {props.tareas.map((tarea) => (

        <TaskItem tarea={tarea}
        toggleTask={props.toggleTask}
        eliminarTarea={props.eliminarTarea}
        editarTarea={props.editarTarea}        
        />

      ))}

    </ul>

  );

}

export default TaskList;