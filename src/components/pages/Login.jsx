import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <section className="d-flex justify-content-center align-items-center vh-100 text-light">
      <Form
        className="p-4 rounded bg-secondary w-100"
        style={{ maxWidth: "400px" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            className="text-dark"
            type="email"
            placeholder="Ingrese su correo electrónico"
          />
          <Form.Text className="text-light">
            Nunca compartiremos tu dirección de correo electrónico con terceros.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            className="
            text-dark"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recordar credenciales" />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="dark" type="submit" className="w-100">
            Enviar
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Login;
