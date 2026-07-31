import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">

  Task Manager

</div>

      <div className="menu">

        <Link to="/">Inicio</Link>

        <Link to="/tareas">Tareas</Link>

        <Link to="/usuarios">Usuarios</Link>

      </div>

    </nav>

  );

}

export default Navbar;