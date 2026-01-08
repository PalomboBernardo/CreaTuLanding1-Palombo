import "./CartWidget.css";

const CartWidget = () => {
    return (
        <button className="cartWidget" aria-label="Carrito de compras">
            🛒 <span className="cartCount">0</span>
        </button>
    );
};

export default CartWidget;
