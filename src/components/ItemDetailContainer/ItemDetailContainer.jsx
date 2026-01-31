import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../../services/index.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ onAddToCart }) => {
    const { itemId } = useParams();

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        services.products
            .getProductById(itemId)
            .then((data) => setItem(data))
            .catch(() => setItem(null))
            .finally(() => setLoading(false));
    }, [itemId]);

    if (loading) return <p className="idcMessage">Cargando detalle...</p>;
    if (!item) return <p className="idcMessage">Producto no encontrado.</p>;

    return <ItemDetail item={item} onAddToCart={onAddToCart} />;
};

export default ItemDetailContainer;
