import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { listarJuegoAPI } from "../helpers/queries";

const DetalleJuego = () => {
  const { id } = useParams(); // Obtener ID del juego desde la URL
  const [juego, setJuego] = useState(null);

  useEffect(() => {
    obtenerDetallesJuego();
  }, []);

  const obtenerDetallesJuego = async () => {
    const respuesta = await listarJuegoAPI(); // Obtener todos los juegos
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      const juegoEncontrado = datos.find((j) => j.id === parseInt(id)); // Buscar el juego por ID
      setJuego(juegoEncontrado);
    }
  };

  if (!juego) {
    return <h2 className="text-light text-center my-5">Cargando...</h2>;
  }

  return (
    <Container className="my-5">
      <Card className="bg-secondary text-light shadow-lg border-0">
        <Card.Img
          variant="top"
          src={juego.imagen}
          className="img-fluid rounded game-image"
          alt={`Imagen de videojuego ${juego.nombre}`}
        />
        <Card.Body>
          <Card.Title>
            <h2>{juego.nombre}</h2>
          </Card.Title>
          <Card.Text>{juego.descripcion}</Card.Text>
          <Card.Text className="fw-bold">Precio: {juego.precio}</Card.Text>
          <Button variant="dark" href="/">
            Volver al Inicio
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalleJuego;
