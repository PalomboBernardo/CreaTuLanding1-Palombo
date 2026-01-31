import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <main className="page">
            <h1 className="page__title">404</h1>
            <p className="page__text">Ruta no encontrada.</p>

            <Link className="backLink" to="/">
                Volver al inicio
            </Link>
        </main>
    );
};

export default NotFound;
