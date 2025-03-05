import { Col, Container, Row } from "react-bootstrap";
import auIMG from "../../assets/auIMG.webp";

const SobreNosotros = () => {
  return (
    <Container
      className="mainSection my-5"
      style={{
        background:
          "linear-gradient(180deg,rgb(216, 214, 214),rgb(255, 255, 255))",
        color: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Row className="align-items-center mb-5">
        <Col md={4} className="text-center">
          <img
            src={auIMG}
            alt="Imagen de perfil Jose Manuel Carrasco"
            className="img-fluid rounded shadow-sm"
          />
        </Col>
        <Col
          md={8}
          className="bg-secondary text-light p-4 rounded shadow-sm d-flex align-items-center justify-content-center"
        >
          <h4 className="text-center mb-0">
            "Donde jugar, soñar y divertirse se hace de manera económica"
          </h4>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4} className="bg-secondary text-light p-4 rounded shadow-sm">
          <h5 className="text-center mb-3">Sobre mí</h5>
          <p>
            Soy un programador apasionado por la tecnología y la innovación,
            dedicado a crear soluciones funcionales, escalables y centradas en
            el usuario. Este proyecto surgió de mi pasión por los videojuegos y
            mi deseo de combinar esa pasión con mi experiencia en desarrollo.
          </p>
        </Col>
        <Col md={1}></Col>
        <Col md={7} className="bg-secondary text-light p-4 rounded shadow-sm">
          <h5 className="text-center mb-3">Mi visión</h5>
          <p>
            Quise crear una plataforma que no solo sea funcional, sino también
            atractiva e intuitiva, diseñada específicamente para los amantes del
            gaming. Con este proyecto, busco conectar a las personas con
            productos, información y contenido relevante, brindando una
            experiencia única que resalte la emoción y la comunidad que rodea al
            mundo gamer. Mi objetivo es aportar al sector con un espacio que
            inspire y facilite el acceso a lo mejor del universo gaming.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SobreNosotros;
