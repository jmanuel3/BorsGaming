import { Button } from "react-bootstrap";
import { Link } from "react-router";
import { borrarJuegoAPI, listarJuegoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemJuego = ({ juego, setListaJuegos }) => {
  const borrarJuego = async () => {
    const respuesta = await borrarJuegoAPI(juego.id);
    if (respuesta.status === 200) {
      const respuestaListaJuegos = await listarJuegoAPI();
      if (respuestaListaJuegos.status === 200) {
        //actualizar la tabla

        const datos = await respuestaListaJuegos.json();
        setListaJuegos(datos);
      }
      Swal.fire({
              title: "¡Bien hecho!",
              text: "Has borrado el juego con éxito",
              icon: "success",})
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
        <Button
          variant="warning"
          className="me-lg-2"
          to={`/administrador/crear/${juego.id}`}
        >
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" onClick={borrarJuego}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemJuego;
