import { Button, Card, Col, Row } from "react-bootstrap";
import undisputed from "../../../assets/undisputed.webp";
import { Cart3, SuitHeartFill } from "react-bootstrap-icons";

const CardJuego = () => {
  return (
    <Row>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={undisputed} />
        <Card.Body>
          <Card.Title>Undisputed©</Card.Title>
          <Card.Text>
            Undisputed es un videojuego de boxeo realista que destaca por sus
            gráficos impresionantes, mecánicas estratégicas y físicas avanzadas,
            ofreciendo una experiencia auténtica del deporte con boxeadores y
            arenas oficiales. 🥊
          </Card.Text>
          <section className="align-items-center m-4">
            <Button variant="dark">
              Añadir al carrito <Cart3 className="m-1" />
            </Button>

            <Button variant="dark">
              Añadir a favoritos <SuitHeartFill />
            </Button>
            {/*Aquí se podrá añadir: Detalles de {juego.nombre}*/}
            <Button variant="dark">
              Detalles del Juego <Cart3 className="bi bi-cart3" />
            </Button>
          </section>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default CardJuego;
