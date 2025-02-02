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
  const navegacion = useNavigate();

  useEffect(() => {
    if (crearJuego === false) {
      cargarJuego();
    }
  }, []);

  const cargarJuego = async () => {
    const respuesta = await obtenerJuegoAPI(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos);
      setValue("nombreProducto", datos.nombreProducto);
      setValue("precio", datos.precio);
      setValue("precio", datos.categoria);
      setValue("precio", datos.descripcion_breve);
      setValue("precio", datos.descripcion_amplia);
      setValue("precio", datos.imagen);
    }
  };

  const onSubmit = async (juego) => {
    if (crearJuego === true) {
      console.log(juego);
      const respuesta = await crearJuegoAPI(juego);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "¡Bien hecho!",
          text: "Has añadido un producto con éxito",
          icon: "success",
        });
        reset();
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
          text: "El juego se ha actualizado con éxito",
          icon: "success",
        });
        //redireccionar
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
        <Form.Group className="mb-3" controlId="formDescripcionBreve">
          <Form.Label>Descripción breve</Form.Label>
          <Form.Control
            type="text"
            placeholder="Por ejemplo: Videojuego de acción ambientado en el año 2609..."
            as="textarea"
            {...register("descripcion_breve", {
              required: "La descripcion breve es ogligatoria",
              minLength: {
                value: 5,
                message:
                  "Debe ingresar como minimo una descripcion de 5 caracteres",
              },
              maxLength: {
                value: 50,
                message:
                  "Debe ingresar como maximo una descripcion de 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripcionAmplia">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Por ejemplo: Chronos Reborn es un videojuego de rol y acción en mundo abierto que combina una narrativa profunda con mecánicas innovadoras. Ambientado en un universo steampunk postapocalíptico, los jugadores asumen el papel de un exiliado que debe manipular el tiempo para restaurar la civilización. El juego ofrece una experiencia inmersiva con paisajes detallados, desde ciudades flotantes hasta desiertos mecanizados, habitados por criaturas creadas con una mezcla de biología y tecnología. Con un sistema de combate dinámico que mezcla habilidades temporales, armas personalizables y tácticas estratégicas, Chronos Reborn permite a los jugadores tomar decisiones que afectan la historia y el mundo que los rodea. Su estilo artístico, inspirado en la ilustración victoriana, y su banda sonora épica orquestal complementan la experiencia, convirtiéndolo en una aventura inolvidable para los amantes de la fantasía y la ciencia ficción.  "
            as="textarea"
            {...register("descripcion_amplia", {
              required: "La descripcion amplia es ogligatoria",
              minLength: {
                value: 10,
                message:
                  "Debe ingresar como minimo una descripcion de 10 caracteres",
              },
              maxLength: {
                value: 250,
                message:
                  "Debe ingresar como maximo una descripcion de 250 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_amplia?.message}
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
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioJuego;
