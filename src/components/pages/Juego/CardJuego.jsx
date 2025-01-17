import { Button, Card, Col, Row, Container } from "react-bootstrap";
import undisputed from "../../../assets/undisputed.webp";
import tekken from "../../../assets/tekken.webp";
import hellLetLoose from "../../../assets/hellLetLoose.webp";
import {
  Cart3,
  PlusCircle,
  SuitHeart,
  SuitHeartFill,
} from "react-bootstrap-icons";

const CardJuego = () => {
  return (
    <Container className="my-4">
      <Row md={4} lg={3} className="g-4">
        {/* Card 1 */}
        <Col>
          <Card className="h-100 bg-secondary">
            <Card.Img
              variant="top"
              src={undisputed}
              className="img-fluid rounded"
              alt="Imagen de videojuego Undisputed©"
            />
            <Card.Body className="text-light d-flex flex-column">
              <Card.Title>
                <strong>Undisputed©</strong>
              </Card.Title>
              <Card.Text>
                Undisputed es un videojuego de boxeo realista que destaca por
                sus gráficos impresionantes, mecánicas estratégicas y físicas
                avanzadas, ofreciendo una experiencia auténtica del deporte con
                boxeadores y arenas oficiales. 🥊
              </Card.Text>
              <section className="d-flex gap-2 mt-auto">
                <Button variant="dark" size="md" className="w-100">
                  Añadir al carrito <Cart3 />
                </Button>
                <Button variant="dark" size="md" className="w-100">
                  Añadir a favoritos <SuitHeart />
                </Button>
                <Button variant="dark" size="md" className="w-100">
                  Detalles del Juego <PlusCircle />
                </Button>
              </section>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col>
          <Card className="h-100 bg-secondary">
            <Card.Img
              variant="top"
              src={tekken}
              className="img-fluid rounded"
              alt="Imagen de videojuego Tekken"
            />
            <Card.Body className="text-light d-flex flex-column">
              <Card.Title>
                <strong>Tekken</strong>
              </Card.Title>
              <Card.Text>
                Tekken es un icónico videojuego de lucha desarrollado por Bandai
                Namco. Destaca por su elenco de personajes únicos, combates
                dinámicos en 3D y un enfoque en la estrategia y los combos. Es
                uno de los pilares del género de juegos de pelea desde su debut
                en 1994. 🥋🎮
              </Card.Text>
              <section className="d-flex gap-2 mt-auto">
                <Button variant="dark" size="md" className="w-100">
                  Añadir al carrito <Cart3 />
                </Button>
                <Button variant="dark" size="md" className="w-100">
                  Añadir a favoritos <SuitHeart />
                </Button>
                <Button variant="dark" size="md" className="w-100">
                  Detalles del Juego <PlusCircle />
                </Button>
              </section>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col>
          <Card className="h-100 bg-secondary">
            <Card.Img
              variant="top"
              src={hellLetLoose}
              className="img-fluid rounded"
              alt="Imagen de videojuego Hell Let Loose"
            />
            <Card.Body className="text-light d-flex flex-column">
              <Card.Title>
                <strong>Hell Let Loose</strong>
              </Card.Title>
              <Card.Text>
                Hell Let Loose es un videojuego de disparos táctico ambientado
                en la Segunda Guerra Mundial. Ofrece batallas masivas con hasta
                100 jugadores por partida, combinando estrategia en tiempo real
                y combates intensos en mapas realistas basados en campos de
                batalla históricos. Su enfoque en el trabajo en equipo y la
                autenticidad lo distingue en el género. 🎖️
              </Card.Text>
              <section className="d-flex gap-2 mt-auto">
                <Button variant="dark" size="md" className="w-100">
                  Añadir al carrito <Cart3 />
                </Button>
                <Button variant="dark" size="md" className="w-100">
                  Añadir a favoritos <SuitHeart />
                </Button>
                <Button variant="dark" size="md" className="w-100">
                  Detalles del Juego <PlusCircle />
                </Button>
              </section>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardJuego;
