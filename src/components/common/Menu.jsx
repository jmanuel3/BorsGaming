import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router";
import logo from "../../assets/borsLogo.png";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
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
            width={100}
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <NavLink end className="nav-link" to={"/"}>
              Inicio
            </NavLink>

            {usuarioLogueado.lenght > 0 ? (
              <>
                <NavDropdown end className="nav-link" to={"/administrador"}>
                  <NavLink end className="nav-link" to={"/administrador"}>
                    Gestionar juegos
                  </NavLink>
                  <NavLink
                    end
                    className="nav-link"
                    to={"/administrador/usuarios"}
                  >
                    Gestionar usuarios
                  </NavLink>
                  <Button className="nav-link" variant="link" onClick={logout}>
                    Logout
                  </Button>
                </NavDropdown>
              </>
            ) : (
              <>
                <NavLink end className="nav-link" to="/sobrenosotros">
                  Acerca de nosotros
                </NavLink>
                <NavLink end className="nav-link" to="/login">
                  Login
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
