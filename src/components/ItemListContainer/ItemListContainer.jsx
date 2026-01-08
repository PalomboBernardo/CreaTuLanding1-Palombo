import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
    return (
        <main className="ilc" id="inicio">
            <h2 className="ilc__title">{greeting}</h2>
            <p className="ilc__text">
                Acá en el futuro va el catálogo de productos (ItemList).
            </p>

            <section className="ilc__placeholder" id="productos">
                <div className="card">Producto 1 (placeholder)</div>
                <div className="card">Producto 2 (placeholder)</div>
                <div className="card">Producto 3 (placeholder)</div>
            </section>
        </main>
    );
};

export default ItemListContainer;
