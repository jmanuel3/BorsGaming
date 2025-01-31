import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { PencilSquare, PlusCircleFill, Trash3 } from "react-bootstrap-icons";
import { Link } from "react-router";
import { listarJuegoAPI } from "../helpers/queries";
import ItemJuego from "../pages/Juego/ItemJuego";
const Administrador = () => {
  const [listaJuegos, setListaJuegos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const respuesta = await listarJuegoAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaJuegos(datos);
    } else {
      Swal.fire({
        icon: "error",
        title: "Uy...",
        text: "Parece que ha ocurrido un error...",
      });
    }
  };
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Nuestros juegos:</h1>
        <Link className="btn btn-dark" to={"/administrador-juego/crear"}>
          <PlusCircleFill />
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Requisitos del sistema</th>
            <th>Desarrollador</th>
            <th>Reseñas</th>
            <th>Opciones:</th>
          </tr>
        </thead>
        <tbody>
          {listaJuegos.map((juego) => (
            <ItemJuego key={juego.id} juego={juego}></ItemJuego>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
