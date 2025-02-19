import { useForm } from "react-hook-form";
import { Button, Form, FormControl } from "react-bootstrap";
import {
  crearJuegoAPI,
  editarJuegoAPI,
  obtenerJuegoAPI,
} from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const FormularioJuego = ({ crearJuego }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();
  console.log("ID del juego recibido:", id);
  const navegacion = useNavigate();

  useEffect(() => {
    if (crearJuego === false) {
      cargarJuego();
    }
  }, []);

  const cargarJuego = async () => {
    //pedir a la api un producto
    const respuesta = await obtenerJuegoAPI(id);
    if (respuesta.status === 200) {
      //dibujar el producto en el form
      const datos = await respuesta.json();
      console.log(datos);
      setValue("nombreProducto", datos.nombreProducto);
      setValue("precio", datos.precio);
      setValue("imagen", datos.imagen);
      setValue("categoria", datos.categoria);
      setValue("requisitos_sistema", datos.requisitosSistema);
      setValue("desarrollador", datos.desarrollador);
      setValue("reseñas", datos.reseñas);
    }
  };

  const onSubmit = async (juego) => {
    if (crearJuego) {
      console.log(juego);
      const respuesta = await crearJuegoAPI(juego);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "¡Bien hecho!",
          text: "Has añadido un producto con éxito",
          icon: "success",
        });
        reset();
        navegacion("/administrador");
      } else {
        Swal.fire({
          icon: "error",
          title: "Uy...",
          text: "Parece que ha ocurrido un error...",
        });
      }
    } else {
      const respuesta = await editarJuegoAPI(juego, id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "¡Bien hecho!",
          text: "Has editado el juego con éxito",
          icon: "success",
        });
        navegacion("/administrador");
      } else {
        Swal.fire({
          icon: "error",
          title: "Uy...",
          text: "Parece que ha ocurrido un error...",
        });
      }
    }
  };
  return (
    <section className="container mainSection">
      <h1 className="display-2 mt-5">Administrar producto</h1>
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreJuego">
          <Form.Label>Juego</Form.Label>
          <Form.Control
            type="text"
            placeholder="Por ejemplo: Call of Duty"
            {...register("nombreProducto", {
              required: "El nombre del producto es un dato obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres inclusive",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreJuego?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Por ejemplo: 70"
            {...register("precio", {
              required: "El precio es un valor obligatorio",
              min: {
                value: 1,
                message: "Como mínimo, el precio debe superar $1",
              },
              max: {
                value: 120,
                message: "Como máximo, el precio no podrá superar $120",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoría</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
          >
            <option value="">Seleccione una opción</option>
            <option value="Bélico">Bélico</option>
            <option value="Deportes">Deportes</option>
            <option value="Accion">Acción</option>
            <option value="Aventuras">Aventuras</option>
            <option value="Terror">Terror</option>
            <option value="Estrategia">Estrategia</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRequisitosSistema">
          <Form.Label>Requisitos del sistema</Form.Label>
          <Form.Control
            type="text"
            placeholder="Por ejemplo: NVIDIA GEFORCE RTX..."
            as="textarea"
            {...register("requisitos_sistema", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 2,
                message:
                  "Debe ingresar como minimo una descripcion de 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.requisitos_sistema?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDesarrollador">
          <Form.Label>Desarrollador</Form.Label>
          <Form.Control
            type="text"
            placeholder="Por ejemplo: EA Sports  "
            as="textarea"
            {...register("Desarrollador", {
              required: "Este campo es oblligatorio",
              minLength: {
                value: 2,
                message:
                  "Debe ingresar como minimo una descripcion de 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.desarrollador?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label> Imagen del juego</Form.Label>
          <FormControl
            type="text"
            placeholder="Por ejemplo: https://upload.wikimedia.org/wikipedia/en/3/34/Fight_Night_Champion.jpg"
            {...register("imagen", {
              required: "Debes añadir una imagen",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message: "Formatos admitidos: (jpg|jpeg|gif|png) ",
              },
            })}
          ></FormControl>
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formReseñas">
          <Form.Label> Reseñas</Form.Label>
          <FormControl
            type="number"
            placeholder="0-5"
            {...register("reseñas", {
              required: "Debes añadir un número",
            })}
          ></FormControl>
          <Form.Text className="text-danger">
            {errors.reseñas?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioJuego;
