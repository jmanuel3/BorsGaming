//POST - Crear producto => 201
//GET - Obtener producto/s => 200. En su función solo recibe un parámetro
//DELETE - Borrar 1 producto
// PUT o PATCH - Put edita todo el objeto. Patch edita solo una parte del objeto
export const crearJuegoAPI = async (juegoNuevo) => {
  try {
    const respuesta = await fetch("http://localhost:3000/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(juegoNuevo),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const listarJuegoAPI = async () => {
  try {
    const respuesta = await fetch("http://localhost:3000/productos");
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const obtenerJuegoAPI = async (id) => {
  try {
    const respuesta = await fetch("http://localhost:3000/productos/" + id);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const borrarJuegoAPI = async (id) => {
  try {
    const respuesta = await fetch("http://localhost:3000/productos/" + id, {
      method: "DELETE",
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const editarJuegoAPI = async (juegoEditado, id) => {
  try {
    const respuesta = await fetch(`http://localhost:3000/productos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(juegoEditado),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//usuario administrador
const adminUsuario = {
  email: "admin@borsgaming.com",
  password: "12345678",
};

export const login = (usuario) => {
  if (
    usuario.email === adminUsuario.email &&
    usuario.password === adminUsuario.password
  ) {
    localStorage.setItem("userKey", JSON.stringify(adminUsuario.email));
    return true;
  } else {
    return false;
  }
};
