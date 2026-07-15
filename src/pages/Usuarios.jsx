function Usuarios(props) {

  return (

  <div>

    <h1>Usuarios API</h1>

    <ul>

      {props.usuarios.map(function(usuario) {

        return (

          <li key={usuario.id}>
            {usuario.name}
          </li>

        );

      })}

    </ul>

  </div>

);

}

export default Usuarios;