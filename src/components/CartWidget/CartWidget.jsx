// src/components/CartWidget/CartWidget.jsx
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = ({ totalItems = 0 }) => {
    return (
        <Link
            to="/cart"
            className="cartWidget"
            aria-label="Ir al carrito"
        >
            <span aria-hidden="true">🛒</span>
            <span className="cartCount">{totalItems}</span>
        </Link>
    );
};

export default CartWidget;
