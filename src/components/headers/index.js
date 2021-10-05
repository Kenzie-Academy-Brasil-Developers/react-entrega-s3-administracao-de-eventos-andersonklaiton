import "./styles.css";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div className="container_links">
      <Link to="/">
        Home
      </Link>
      <Link to="/wedding">Casamento</Link>
      <Link to="/graduation">Formatura</Link>
      <Link to="confraternization">Confraternização</Link>
    </div>
  );
};
export default Headers;
