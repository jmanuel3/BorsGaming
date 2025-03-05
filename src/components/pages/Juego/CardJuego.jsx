import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const CardJuego = ({ juego }) => {
  const navigate = useNavigate();

  const irADetalles = () => {
    navigate(`/detalles/${juego.id}`);
  };

  return (
    <Col>
      <Card className="h-100 bg-secondary shadow-lg border-0">
        <div className="image-container">
          <Card.Img
            variant="top"
            src={juego.imagen}
            className="img-fluid rounded-top game-image"
            alt={`Imagen de videojuego ${juego.nombre}`}
          />
        </div>
        <Card.Body className="text-light d-flex flex-column">
          <Card.Title className="text-center">
            <strong>{juego.nombreProducto}</strong>
          </Card.Title>
          <Card.Text className="text-truncate">{juego.descripcion}</Card.Text>
          <Card.Text className="fw-bold text-center">
            Precio: {juego.precio}
          </Card.Text>
          <div className="d-flex flex-column gap-2 mt-auto">
            <Button
              variant="dark"
              size="md"
              className="w-100"
              onClick={irADetalles}
            >
              Detalles del Juego <PlusCircle />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardJuego;
