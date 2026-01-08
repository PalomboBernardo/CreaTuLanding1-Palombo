import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx"

const NavBar = () => {
    return (
        <header className="nav">
            <div className="nav__brand">
                <span className="nav__logo">🛍️</span>
                <h1 className="nav__title">Mi Tienda</h1>
            </div>

            <nav className="nav__links">
                <a href="#inicio">Inicio</a>
                <a href="#productos">Productos</a>
                <a href="#ofertas">Ofertas</a>
                <a href="#contacto">Contacto</a>
            </nav>

            <CartWidget />
        </header>
    );
};

export default NavBar;
