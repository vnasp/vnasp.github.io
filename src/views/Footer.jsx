import ContactLinks from "../components/ContactLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
        <p>© {currentYear} Todos los derechos reservados</p>
        <p>
          Sitio creado con <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> ReactJS</a> y <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"
          >TailwindCSS</a>
        </p>
    </footer>
  );
};

export default Footer;