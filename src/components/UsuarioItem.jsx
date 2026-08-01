import "./UsuarioItem.css";
function UsuarioItem(props) {

  return (

<div className="usuario-card">

    {props.editandoId === props.usuario._id ? (

        <div className="usuario-edicion">

            <input

                value={props.nombreEditado}

                onChange={(event)=>

                    props.setNombreEditado(event.target.value)

                }

            />

            <button

                className="guardar"

                onClick={()=>

                    props.guardarEdicion(props.usuario._id)

                }

            >

                Guardar

            </button>

        </div>

    ) : (

        <>

            <div className="usuario-info">

                <h3>

                    👤 {props.usuario.nombre}

                </h3>

                <p>

                    📧 {props.usuario.email}

                </p>

                <p>

                    🎂 {props.usuario.edad} años

                </p>

            </div>

            <div className="usuario-botones">

                <button

                    className="editar"

                    onClick={()=>

                        props.iniciarEdicion(props.usuario)

                    }

                >

                    Editar

                </button>

                <button

                    className="eliminar"

                    onClick={()=>

                        props.eliminarUsuario(props.usuario._id)

                    }

                >

                    Eliminar

                </button>

            </div>

        </>

    )}

</div>

);
}

export default UsuarioItem;