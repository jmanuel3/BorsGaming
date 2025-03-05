import { useEffect, useState } from "react";
import { listarJuegoAPI } from "../helpers/queries";
import { Container, Row } from "react-bootstrap";
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
  const categorias = [...new Set(juegos.map((juego) => juego.categoria))];

  return (
    <Container className="my-4">
      <h2 className="text-dark text-center">Catálogo de Juegos</h2>

      {categorias.map((categoria, index) => (
        <div key={index}>
          <h1 className="text-dark mt-4">{categoria}</h1>
          <Row md={3} lg={4} className="g-4">
            {juegos
              .filter((juego) => juego.categoria === categoria)
              .map((juego) => (
                <CardJuego key={juego.id} juego={juego} />
              ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default Inicio;
