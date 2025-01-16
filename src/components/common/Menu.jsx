import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link, NavLink } from "react-router";
import logo from "../../assets/borsLogo.png";
const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-2">
      <Container>
        <Link
          to={"/"}
          className="navbar-brand d-flex align-items-center justify-content-between"
        >
          <img
            src={logo}
            alt="logo BorsGaming"
            className="img-fluid"
            width={150}
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Administrador</Nav.Link>
            <Nav.Link href="#pricing">Acerca de nosotros</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
