import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="text-center bg-body-tertiary text-dark py-4">
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
        {/* Texto */}
        <p className="mb-0 me-md-3">&copy; Todos los derechos reservados</p>

        {/* Íconos */}
        <div className="d-flex gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={24} color="#4267B2" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={24} color="#1DA1F2" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={24} color="#E4405F" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
