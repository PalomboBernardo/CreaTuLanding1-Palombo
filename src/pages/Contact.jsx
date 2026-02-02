import { useState } from "react";
import "./Contact.css";

const WHATSAPP_NUMBER = "5493472580898"; // +54 9 3472 580898

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        topic: "consulta",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(
            `¡Mensaje enviado!\n\nNombre: ${form.name}\nEmail: ${form.email}\nTema: ${form.topic}\n\nMensaje:\n${form.message}`
        );

        setForm({ name: "", email: "", topic: "consulta", message: "" });
    };

    const openWhatsapp = () => {
        const text =
            "Hola! Estoy visitando AgroStore y quiero hacer una consulta.";
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            text
        )}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <main className="page contactPage">
            <section className="contactHero container">
                <h1 className="page__title">Contacto</h1>
                <p className="page__text">
                    Podés escribirnos por el formulario o contactarnos
                    directamente por WhatsApp.
                </p>
            </section>

            <section className="container contactGrid">
                {/* FORMULARIO */}
                <div className="contactCard">
                    <h2 className="sectionTitle">Escribinos</h2>

                    <form className="form" onSubmit={handleSubmit}>
                        <div className="row2">
                            <label className="field">
                                <span className="label">Nombre</span>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Tu nombre"
                                    required
                                />
                            </label>

                            <label className="field">
                                <span className="label">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="tu@email.com"
                                    required
                                />
                            </label>
                        </div>

                        <label className="field">
                            <span className="label">Tema</span>
                            <select
                                name="topic"
                                value={form.topic}
                                onChange={handleChange}
                            >
                                <option value="consulta">
                                    Consulta general
                                </option>
                                <option value="asesoramiento">
                                    Asesoramiento
                                </option>
                                <option value="presupuesto">
                                    Presupuesto
                                </option>
                                <option value="postventa">
                                    Postventa
                                </option>
                            </select>
                        </label>

                        <label className="field">
                            <span className="label">Mensaje</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Contanos cultivo, zona y objetivo..."
                                rows={6}
                                required
                            />
                        </label>

                        <button className="btnPrimary" type="submit">
                            Enviar mensaje
                        </button>
                    </form>
                </div>

                {/* LATERAL */}
                <aside className="side">
                    <div className="infoCards">
                        <div className="infoCard">
                            <p className="infoTitle">📱 WhatsApp directo</p>
                            <p className="infoText">
                                Respuesta rápida para consultas comerciales y
                                técnicas.
                            </p>

                            <button
                                className="btnWhatsapp"
                                type="button"
                                onClick={openWhatsapp}
                            >
                                Escribir por WhatsApp
                            </button>
                        </div>

                        <div className="infoCard">
                            <p className="infoTitle">🕒 Horarios</p>
                            <p className="infoText">
                                Lunes a Viernes — 8:00 a 18:00
                            </p>
                        </div>

                        <div className="infoCard">
                            <p className="infoTitle">⚡ Tiempo de respuesta</p>
                            <p className="infoText">
                                Normalmente dentro de 24–48 hs
                            </p>
                        </div>
                    </div>

                    <div className="faq">
                        <h2 className="sectionTitle">Preguntas rápidas</h2>

                        <details className="faqItem">
                            <summary>
                                ¿Puedo pedir presupuesto por WhatsApp?
                            </summary>
                            <p>
                                Sí. Usá el botón de WhatsApp y comentanos qué
                                producto o categoría te interesa.
                            </p>
                        </details>

                        <details className="faqItem">
                            <summary>
                                ¿Hacen recomendaciones por cultivo?
                            </summary>
                            <p>
                                Sí. Indicá cultivo, zona, etapa y objetivo, y te
                                armamos una propuesta.
                            </p>
                        </details>
                    </div>
                </aside>
            </section>
        </main>
    );
};

export default Contact;

