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
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    if (login(usuario)) {
      setUsuarioLogueado(usuario);
      Swal.fire({
        title: "Bienvenido gamer!",
        text: "A disfrutar de la forma más barata.",
        imageUrl:
          "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      <Container className="w-80">
        <Row className="justify-content-center">
          <Card>
            <CardBody>
              <div className="justify-content-center d-flex">
                <Card.Title>Login</Card.Title>
              </div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="juegos@baratisimos.com"
                    {...register("email", {
                      required: "El email es obligatorio",
                      minLength: {
                        value: 11,
                        message: "Debe ingresar como mínimo 11 caracteres",
                      },
                      maxLength: {
                        value: 50,
                        message: "Debe ingresar como máximo 50 caracteres",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formGroupPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Quierojuegosbaratos1"
                    {...register("password", {
                      required: "La contraseña es un campo obligatorio",
                      minLength: {
                        value: 8,
                        message: "Debe ingresar como minimo 8 caracteres",
                      },
                      maxLength: {
                        value: 20,
                        message: "Debe ingresar como maximo 20 caracteres",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.password?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Recordar credenciales" />
                </Form.Group>

                <div className=" justify-content-center">
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
