import { Button, Card, Col } from "react-bootstrap";
import { Cart3, PlusCircle, SuitHeart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const CardJuego = ({ juego }) => {
  return (
    <Col>
      <Card className="h-100 bg-secondary">
        <Card.Img
          variant="top"
          src={juego.imagen}
          className="img-fluid rounded"
          alt={`Imagen de ${juego.nombreProducto}`}
        />
        <Card.Body className="text-light d-flex flex-column">
          <Card.Title>
            <strong>{juego.nombreProducto}</strong>
          </Card.Title>
          <Card.Text>{juego.descripcion}</Card.Text>
          <section className="d-flex gap-2 mt-auto">
            <Button variant="dark" size="md" className="w-100">
              Añadir al carrito <Cart3 />
            </Button>
            <Button variant="dark" size="md" className="w-100">
              Añadir a favoritos <SuitHeart />
            </Button>
            <Link to={`/detalle/${juego.id}`} className="btn btn-dark w-100">
              Detalles del Juego <PlusCircle />
            </Link>
          </section>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardJuego;
