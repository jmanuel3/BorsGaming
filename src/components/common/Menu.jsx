import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/borsLogo.png";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {


  const logout = () => {
    localStorage.removeItem("userKey");
    setUsuarioLogueado(null);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-2">
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="logo BorsGaming"
            className="img-fluid"
            width={100}
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <NavLink end className="nav-link" to="/">
              Inicio
            </NavLink>

            {usuarioLogueado?.rol === "admin" && (
              <NavDropdown title="Administración">
                <NavDropdown.Item as={NavLink} to="/administrador">
                  Gestionar juegos
                </NavDropdown.Item>
              </NavDropdown>
            )}

            <NavLink end className="nav-link" to="/sobrenosotros">
              Acerca de nosotros
            </NavLink>

            {usuarioLogueado ? (
              <Button
                variant="link"
                className="nav-link text-danger"
                onClick={logout}
              >
                Logout
              </Button>
            ) : (
              <NavLink end className="nav-link" to="/login">
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
