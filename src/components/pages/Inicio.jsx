import { useEffect, useState } from "react";
import { listarJuegoAPI } from "../helpers/queries";
import { Container, Row, Col } from "react-bootstrap";
import CardJuego from "../pages/Juego/CardJuego";

const Inicio = () => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    obtenerJuegos();
  }, []);

  const obtenerJuegos = async () => {
    const respuesta = await listarJuegoAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setJuegos(datos);
    }
  };

  return (
    <Container className="my-4">
      <h2 className="text-light">Catálogo de Juegos</h2>
      <Row md={3} lg={4} className="g-4">
        {juegos.map((juego) => (
          <CardJuego key={juego.id} juego={juego} />
        ))}
      </Row>
    </Container>
  );
};

export default Inicio;
