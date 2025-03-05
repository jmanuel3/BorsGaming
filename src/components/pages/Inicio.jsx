import { useEffect, useState } from "react";
import { listarJuegoAPI } from "../helpers/queries";
import { Container, Row, Form } from "react-bootstrap";
import CardJuego from "../pages/Juego/CardJuego";

const Inicio = () => {
  const [juegos, setJuegos] = useState([]);
  const [busqueda, setBusqueda] = useState(""); // Estado para la búsqueda

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

  // Filtrar juegos por nombre basándose en la búsqueda
  const juegosFiltrados = juegos.filter((juego) =>
    juego.nombreProducto.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Obtener categorías de los juegos filtrados
  const categoriasFiltradas = [
    ...new Set(juegosFiltrados.map((juego) => juego.categoria)),
  ];

  return (
    <Container className="my-4">
      <h2 className="text-dark text-center">Catálogo de Juegos</h2>

      {/* Barra de búsqueda */}
      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Buscar un juego..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </Form>

      {/* Mostrar solo las categorías que contienen juegos en la búsqueda */}
      {categoriasFiltradas.map((categoria, index) => {
        const juegosPorCategoria = juegosFiltrados.filter(
          (juego) => juego.categoria === categoria
        );

        return (
          juegosPorCategoria.length > 0 && (
            <div key={index}>
              <h1 className="text-dark mt-4">{categoria}</h1>
              <Row md={3} lg={4} className="g-4">
                {juegosPorCategoria.map((juego) => (
                  <CardJuego key={juego.id} juego={juego} />
                ))}
              </Row>
            </div>
          )
        );
      })}

      {juegosFiltrados.length === 0 && (
        <h5 className="text-dark text-center mt-3">
          No se encontraron juegos.
        </h5>
      )}
    </Container>
  );
};

export default Inicio;
