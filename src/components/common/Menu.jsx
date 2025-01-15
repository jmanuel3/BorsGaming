import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logoBors.png.png";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-success">
      <Container>
        <Link to={"/"} className="navbar-brand">
          <img
            src={logo}
            alt="logo BorsGaming"
            className="img-fluid"
            width={150}
          />
        </Link>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;
