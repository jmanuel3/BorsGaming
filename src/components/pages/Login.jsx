import { Button, Card, CardBody, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { login } from "../helpers/queries";
import Swal from "sweetalert2";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    const usuarioAutenticado = login(usuario);

    if (usuarioAutenticado) {
      setUsuarioLogueado(usuarioAutenticado);

      Swal.fire({
        title: "Bienvenido gamer!",
        text: "A disfrutar de la forma más barata.",
        imageUrl:
          "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });

      navegacion("/administrador");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El email o la contraseña son incorrectos",
      });
    }
  };

  return (
    <section className="mainSection align-content-center">
      <Container className="w-70">
        <Row className="justify-content-center">
          <Card>
            <CardBody>
              <div className="justify-content-center d-flex">
                <Card.Title>Login</Card.Title>
              </div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    {...register("email", {
                      required: "El email es obligatorio",
                    })}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    {...register("password", {
                      required: "La contraseña es obligatoria",
                    })}
                  />
                </Form.Group>

                <div className="justify-content-center">
                  <Button variant="dark" type="submit">
                    Enviar
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
