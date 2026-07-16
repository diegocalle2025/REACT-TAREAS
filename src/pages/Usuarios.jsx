import { useState, useEffect } from "react";

function Usuarios(props) {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [nombreEditado, setNombreEditado] = useState("");

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

useEffect(() => {

  cargarUsuarios();

}, []);

async function crearUsuario() {

  if (nombre.trim() === "") {
    return;
  }

  try {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: nombre
        })
      }
    );

    const data = await response.json();

console.log("Usuario creado:", data);

setUsuarios([
  ...usuarios,
  data
]);

setNombre("");
  } catch (error) {

    console.error(
      "Error al crear usuario:",
      error
    );

  }

}

function eliminarUsuario(id) {

  const nuevosUsuarios = usuarios.filter(
    function(usuario) {

      return usuario.id !== id;

    }
  );

  setUsuarios(nuevosUsuarios);

}

function iniciarEdicion(usuario) {

  setEditandoId(usuario.id);

  setNombreEditado(usuario.name);

}

function guardarEdicion(id) {

  if (nombreEditado.trim() === "") {
    return;
  }

  const nuevosUsuarios = usuarios.map(
    function(usuario) {

      if (usuario.id === id) {

        return {
          ...usuario,
          name: nombreEditado
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

          <li key={usuario.id}>
            {editandoId === usuario.id ? (

  <input
    value={nombreEditado}
    onChange={(event) =>
      setNombreEditado(event.target.value)
    }
  />

) : (

  usuario.name

)}

{editandoId === usuario.id ? (

  <button
    onClick={() =>
      guardarEdicion(usuario.id)
    }
  >
    Guardar
  </button>

) : (

  <button
    onClick={() =>
      iniciarEdicion(usuario)
    }
  >
    Editar
  </button>

)}


<button
  onClick={() =>
    eliminarUsuario(usuario.id)
          }
>
  Eliminar
</button>


</li>

        );

      })}

    </ul>

  </div>

);

}

export default Usuarios;