import { useState, useEffect } from "react";
import api from "../services/api";
import UsuarioItem from "../components/UsuarioItem";



function Usuarios(props) {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [nombreEditado, setNombreEditado] = useState("");

  async function cargarUsuarios() {

  try {

    const response = await api.get(
  "/usuarios"
  );

  console.log(
  "Datos recibidos:",
  response.data
);

    console.log(response);

    setUsuarios(response.data);

  } catch (error) {

    console.error(
      "Error al cargar usuarios:",
      error
    );

  }

}

useEffect(() => {

  cargarUsuarios();

}, []);


async function crearUsuario() {

  if (nombre.trim() === "") {
    return;
  }

  try {

    const response = await api.post(
      "/usuarios",
      {
        nombre: nombre,
        email: "correo@ejemplo.com",
        edad: 18
      }
    );

    console.log(
      "Usuario creado:",
      response.data
    );

    setUsuarios([
      ...usuarios,
      response.data.usuario
    ]);

    setNombre("");

  } catch (error) {

    console.error(
      "Error al crear usuario:",
      error
    );

  }

}

async function eliminarUsuario(id) {

  try {

    const response = await api.delete(
      `/usuarios/${id}`
    );

    console.log(
      "Usuario eliminado:",
      response.data
    );

    const nuevosUsuarios =
      usuarios.filter(function(usuario) {

        return usuario._id !== id;

      });

    setUsuarios(nuevosUsuarios);

  } catch (error) {

    console.error(
      "Error al eliminar usuario:",
      error
    );

  }

}

function iniciarEdicion(usuario) {

  setEditandoId(usuario._id);

  setNombreEditado(usuario.nombre);

}

async function guardarEdicion(id) {

  if (nombreEditado.trim() === "") {
    return;
  }

  const response = await api.put(
  `/usuarios/${id}`,
  {
    nombre: nombreEditado
  }
);

console.log(
  "Usuario actualizado:",
  response.data
);

  const nuevosUsuarios = usuarios.map(
  function(usuario) {

    if (usuario._id === id) {

      return {
        ...usuario,
        nombre: nombreEditado
      };

    }

    return usuario;

  }
);

  setUsuarios(nuevosUsuarios);

  setEditandoId(null);

  setNombreEditado("");

}

return (

  <div>

    <h1>Usuarios API</h1>

<input
  type="text"
  placeholder="Nombre del usuario"
  value={nombre}
  onChange={(event) =>
    setNombre(event.target.value)
  }
/>

<button onClick={crearUsuario}>
  Crear Usuario
</button>

    <ul>

      {usuarios.map(function(usuario) {

        return (

          <UsuarioItem
  key={usuario._id}
  usuario={usuario}
  eliminarUsuario={eliminarUsuario}
  iniciarEdicion={iniciarEdicion}
  editandoId={editandoId}
  nombreEditado={nombreEditado}
  setNombreEditado={setNombreEditado}
  guardarEdicion={guardarEdicion}
/>

          
        );

      })}

    </ul>

  </div>

);

}

export default Usuarios;