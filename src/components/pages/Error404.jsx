import error from "../../assets/error404.webp";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <section className="mainSection text-center m-2">
      <img src={error} width={500} alt="Error404" />
      <div className="m-4">
        <Link className="btn btn-dark" to={"/"}>
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default Error404;
