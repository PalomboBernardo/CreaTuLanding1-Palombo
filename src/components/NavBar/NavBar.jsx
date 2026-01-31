import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";
import "./NavBar.css";

const NavBar = ({ totalItems = 0 }) => {
    const linkClass = ({ isActive }) => (isActive ? "nav__link nav__link--active" : "nav__link");

    return (
        <header className="nav">
            <div className="container nav__inner">
                <div className="nav__left">
                    <NavLink to="/" className="nav__brand">
                        AgroStore
                    </NavLink>

                    <NavLink to="/tienda" className={linkClass}>
                        Tienda
                    </NavLink>

                    <NavLink to="/services" className={linkClass}>
                        Servicios
                    </NavLink>

                    <NavLink to="/contact" className={linkClass}>
                        Contacto
                    </NavLink>
                </div>

                <div className="nav__right">
                    <NavLink to="/category/fertilizantes" className={linkClass}>
                        Fertilizantes
                    </NavLink>
                    <NavLink to="/category/herbicidas" className={linkClass}>
                        Herbicidas
                    </NavLink>
                    <NavLink to="/category/insecticidas" className={linkClass}>
                        Insecticidas
                    </NavLink>
                    <NavLink to="/category/fungicidas" className={linkClass}>
                        Fungicidas
                    </NavLink>
                    <NavLink to="/category/bioestimulantes" className={linkClass}>
                        Bioestimulantes
                    </NavLink>

                    <CartWidget totalItems={totalItems} />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
