import TaskItem from "./TaskItem";
import "./TaskList.css";
function TaskList(props) {

  return (

    <ul className="task-list">

      {props.tareas.map((tarea) => (

        <TaskItem key={tarea.id}
        tarea={tarea}
        toggleTask={props.toggleTask}
        eliminarTarea={props.eliminarTarea}
        editarTarea={props.editarTarea}        
        />

      ))}

    </ul>

  );

}

export default TaskList;