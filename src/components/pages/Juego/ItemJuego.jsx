import { Button } from "react-bootstrap";
import { Link } from "react-router";
import { borrarJuegoAPI, listarJuegoAPI } from "../../helpers/queries";
import { PencilSquare, Trash2Fill } from "react-bootstrap-icons";
import Swal from "sweetalert2";


const ItemJuego = ({ juego, setListaJuegos }) => {
  const borrarJuego = async () => {
    const respuesta = await borrarJuegoAPI(juego.id);
    if (respuesta.status === 200) {
      const respuestaListaJuegos = await listarJuegoAPI();
      if (respuestaListaJuegos.status === 200) {
        const datos = await respuestaListaJuegos.json();
        setListaJuegos(datos);
      }
      Swal.fire({
        title: "¡Bien hecho!",
        text: "Has borrado el juego con éxito",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Uy...",
        text: "Parece que ha ocurrido un error...",
      });
    }
  };
  return (
    <tr>
      <td className="text-center">{juego.id}</td>
      <td>{juego.nombreProducto}</td>
      <td className="text-end">${juego.precio}</td>
      <td className="text-center">
        <img
          src={juego.imagen}
          className="img-thumbnail"
          alt={juego.nombreProducto}
        ></img>
      </td>
      <td>{juego.categoria}</td>
      <td>{juego.requisitosSistema}</td>
      <td>{juego.desarrollador}</td>
      <td>{juego.reseñas}</td>
      <td className="text-center">
        <section className="d-flex justify-content-between">
          <Link
            className="btn btn-warning me-lg-2"
            to={`/administrador-juego/editar/${juego.id}`}
          >
            <i className="bi bi-pencil-square">
              <PencilSquare />
            </i>
          </Link>
          <Button variant="danger" onClick={borrarJuego}>
            <i className="bi bi-trash">
              <Trash2Fill />
            </i>
          </Button>
        </section>
      </td>
    </tr>
  );
};

export default ItemJuego;
