import { Table } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router";

const Administrador = () => {
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Nuestros juegos:</h1>
        <Link className="btn btn-primary" to={"/administrador-juego/crear"}>
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
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </section>
  );
};

export default Administrador;
