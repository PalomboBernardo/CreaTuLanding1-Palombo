import { Link } from "react-router-dom";
import "./Services.css";

const SERVICES = [
    {
        title: "Asesoramiento técnico",
        desc: "Te ayudamos a elegir el producto y el momento de aplicación según cultivo, ambiente y objetivo.",
        points: ["Diagnóstico rápido", "Recomendación por etapa", "Seguimiento"],
        icon: "🧑‍🌾",
    },
    {
        title: "Plan de nutrición y rendimiento",
        desc: "Armamos una estrategia de nutrición (base + foliar) para sostener potencial y estabilidad.",
        points: ["Objetivo de rinde", "Estrategia por lote", "Eficiencia de inversión"],
        icon: "📈",
    },
    {
        title: "Manejo sanitario",
        desc: "Propuesta de protección del cultivo para reducir pérdidas por enfermedades y plagas.",
        points: ["Prevención", "Monitoreo", "Ventana de control"],
        icon: "🛡️",
    },
];

const STEPS = [
    { title: "1) Contanos tu situación", desc: "Cultivo, zona, objetivo y qué problema querés resolver." },
    { title: "2) Armamos la propuesta", desc: "Producto + dosis + momento + recomendaciones clave." },
    { title: "3) Acompañamiento", desc: "Ajustes y seguimiento para que tenga sentido en campo." },
];

const Services = () => {
    return (
        <main className="page servicesPage">
            <section className="servicesHero container">
                <h1 className="page__title">Servicios</h1>
                <p className="page__text">
                    En AgroStore no solo vendemos productos: te damos una propuesta clara para decidir
                    rápido y aplicar mejor.
                </p>

                <div className="servicesCtas">
                    <Link className="btnLink btnLink--primary" to="/tienda">
                        Ir a Tienda
                    </Link>
                    <Link className="btnLink" to="/contact">
                        Pedir asesoramiento
                    </Link>
                </div>
            </section>

            <section className="container">
                <h2 className="sectionTitle">Qué hacemos</h2>

                <div className="servicesGrid">
                    {SERVICES.map((s) => (
                        <article key={s.title} className="card">
                            <div className="cardTop">
                                <span className="cardIcon" aria-hidden="true">
                                    {s.icon}
                                </span>
                                <div>
                                    <h3 className="cardTitle">{s.title}</h3>
                                    <p className="cardText">{s.desc}</p>
                                </div>
                            </div>

                            <ul className="bullets">
                                {s.points.map((p) => (
                                    <li key={p}>{p}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="container">
                <h2 className="sectionTitle">Cómo trabajamos</h2>

                <div className="steps">
                    {STEPS.map((step) => (
                        <div className="step" key={step.title}>
                            <h3 className="stepTitle">{step.title}</h3>
                            <p className="stepText">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="noteBox">
                    <p className="noteTitle">Tip</p>
                    <p className="noteText">
                        Si ya tenés una idea del producto, igual te conviene consultarnos por el momento
                        de aplicación: muchas veces el “cuándo” vale más que el “qué”.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Services;
