// src/components/ItemListContainer/ItemListContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../../services/index.js";
import ItemList from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const request = categoryId
            ? services.products.getProductsByCategory(categoryId)
            : services.products.getProducts();

        request
            .then((data) => setItems(data))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <main className="ilc">
            <header className="ilc__header">
                <h1 className="ilc__title">{greeting}</h1>
                {categoryId ? (
                    <p className="ilc__subtitle">
                        Filtrando por categoría: <strong>{categoryId}</strong>
                    </p>
                ) : (
                    <p className="ilc__subtitle">Elegí una categoría desde el menú.</p>
                )}
            </header>

            {loading ? (
                <p className="ilc__loading">Cargando productos...</p>
            ) : items.length === 0 ? (
                <p className="ilc__empty">No hay productos para esta categoría.</p>
            ) : (
                <ItemList items={items} />
            )}
        </main>
    );
};

export default ItemListContainer;
