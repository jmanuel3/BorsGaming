import { Button } from "react-bootstrap";
import { Link } from "react-router";
import { borrarJuegoAPI, listarJuegoAPI } from "../../helpers/queries";
import { PencilSquare, Trash2Fill } from "react-bootstrap-icons";

const ItemJuego = ({ juego }) => {
  const borrarJuego = async () => {
    const respuesta = await borrarJuegoAPI(producto.id);
    if (respuesta.status === 200) {
      const respuestaListaProductos = await listarJuegoAPI();
      if (respuestaListaProductos.status === 200) {
        //actualizar la tabla
        const datos = await respuestaListaProductos.json();
        setListaProductos(datos);
      }
      alert("El producto fue eliminado correctamente.");
    } else {
      alert("Ocurrio un error, intente esta operación en unos minutos.");
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
        <Link
          className="btn btn-warning me-lg-2"
          to={`/administrador-juego/editar/${juego.id}`}
        >
          <PencilSquare />
        </Link>
        <Button
          variant="danger"
          className="btn btn-danger me-lg-2"
          onClick={borrarJuego}
        >
          <Trash2Fill />
        </Button>
      </td>
    </tr>
  );
};

export default ItemJuego;
