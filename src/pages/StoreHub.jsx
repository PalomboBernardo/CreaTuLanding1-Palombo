import { Link } from "react-router-dom";
import "./StoreHub.css";

const CATEGORIES = [
    { id: "fertilizantes", title: "Fertilizantes", desc: "Nutrición y rendimiento." },
    { id: "herbicidas", title: "Herbicidas", desc: "Manejo de malezas." },
    { id: "fungicidas", title: "Fungicidas", desc: "Sanidad y protección." },
    { id: "insecticidas", title: "Insecticidas", desc: "Control de plagas." },
    { id: "bioestimulantes", title: "Bioestimulantes", desc: "Vigor, raíces y estrés." },
];

const StoreHub = () => {
    return (
        <main className="storeHub container">
            <header className="storeHeader">
                <div>
                    <h1 className="storeTitle">Tienda</h1>
                    <p className="storeSubtitle">
                        Entrá por categoría o mirá el catálogo completo.
                    </p>
                </div>

                <div className="storeActions">
                    <Link to="/tienda/productos" className="storeBtn storeBtn--primary">
                        Ver todos los productos
                    </Link>
                    <Link to="/cart" className="storeBtn">
                        Ir al carrito
                    </Link>
                </div>
            </header>

            <section className="storeGrid">
                {CATEGORIES.map((cat) => (
                    <Link key={cat.id} to={`/category/${cat.id}`} className="storeCard">
                        <h2>{cat.title}</h2>
                        <p>{cat.desc}</p>
                        <span className="storeCardLink">Ver productos →</span>
                    </Link>
                ))}
            </section>
        </main>
    );
};

export default StoreHub;
