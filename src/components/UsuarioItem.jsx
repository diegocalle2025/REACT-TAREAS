function UsuarioItem(props) {

  return (

    <li>

      {props.editandoId === props.usuario._id ? (

        <>

          <input
            value={props.nombreEditado}
            onChange={(event) =>
              props.setNombreEditado(event.target.value)
            }
          />

          <button
            onClick={() =>
              props.guardarEdicion(props.usuario._id)
            }
          >
            Guardar
          </button>

        </>

      ) : (

        <>

          <span>
            {props.usuario.nombre}
          </span>

          <button
            onClick={() =>
              props.iniciarEdicion(props.usuario)
            }
          >
            Editar
          </button>

          <button
            onClick={() =>
              props.eliminarUsuario(props.usuario._id)
            }
          >
            Eliminar
          </button>

        </>

      )}

    </li>

  );

}

export default UsuarioItem;