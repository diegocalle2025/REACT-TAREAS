import "./Home.css";
import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="home">

      <div className="hero">

        <h1>Task Manager</h1>

        <p>

          Organiza tus tareas y administra usuarios
          desde una única plataforma.

        </p>

        <div className="hero-buttons">

          <Link
            to="/tareas"
            className="btn-primary"
          >
            Ir a Tareas
          </Link>

          <Link
            to="/usuarios"
            className="btn-secondary"
          >
            Ver Usuarios
          </Link>

        </div>

      </div>

    </div>

  );

}

export default Home;