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
const adminUsuario = {
  email: "admin@borsgaming.com",
  password: "12345678",
  rol: "admin",
};

export const login = (usuario) => {
  if (
    usuario.email === adminUsuario.email &&
    usuario.password === adminUsuario.password
  ) {
    localStorage.setItem("userKey", JSON.stringify(adminUsuario));
    return adminUsuario;
  } else {
    return false;
  }
};
