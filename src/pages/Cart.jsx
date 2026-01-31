import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const IVA_BY_CATEGORY = {
    fertilizantes: 0.105,
    bioestimulantes: 0.105,
    herbicidas: 0.21,
    insecticidas: 0.21,
    fungicidas: 0.21,
};

const getUnitAndStep = (category) => {
    if (category === "fertilizantes") return { unit: "tn", step: 1 };
    if (category === "bioestimulantes") return { unit: "L", step: 10 };
    if (category === "herbicidas") return { unit: "L", step: 10 };
    if (category === "insecticidas") return { unit: "L", step: 10 };
    if (category === "fungicidas") return { unit: "L", step: 10 };
    return { unit: "u", step: 1 };
};

const money = (n) => new Intl.NumberFormat("es-AR").format(Math.round(n));
const onlyDigits = (s) => (s || "").replace(/\D/g, "");

const Cart = ({ cart, onRemove, onClear, onUpdateQty }) => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");

    const rows = useMemo(() => {
        return cart.map((p) => {
            const ivaRate = IVA_BY_CATEGORY[p.category] ?? 0.21;
            const { unit, step } = getUnitAndStep(p.category);

            const net = p.price * p.qty;
            const iva = net * ivaRate;
            const total = net + iva;

            return { ...p, ivaRate, unit, step, net, iva, total };
        });
    }, [cart]);

    const subtotal = rows.reduce((acc, r) => acc + r.net, 0);
    const ivaTotal = rows.reduce((acc, r) => acc + r.iva, 0);
    const grandTotal = rows.reduce((acc, r) => acc + r.total, 0);

    const handleMinus = (p) => {
        const { step } = getUnitAndStep(p.category);
        const next = Math.max(0, p.qty - step);
        onUpdateQty(p.id, next);
    };

    const handlePlus = (p) => {
        const { step } = getUnitAndStep(p.category);
        const next = p.qty + step;
        onUpdateQty(p.id, next);
    };

    const buildWhatsappText = () => {
        const lines = [];

        lines.push("Hola! Quiero confirmar un pedido en AgroStore:");
        lines.push("");

        rows.forEach((r) => {
            lines.push(
                `• ${r.title} — ${r.qty} ${r.unit} — Neto: $ ${money(r.net)} — IVA ${(r.ivaRate * 100).toFixed(
                    1
                )}%`
            );
        });

        lines.push("");
        lines.push(`Subtotal (neto): $ ${money(subtotal)}`);
        lines.push(`IVA total: $ ${money(ivaTotal)}`);
        lines.push(`TOTAL: $ ${money(grandTotal)}`);
        lines.push("");
        lines.push("Gracias!");

        return lines.join("\n");
    };

    const openWhatsapp = () => {
        if (cart.length === 0) return;

        let normalized = onlyDigits(phone);

        if (normalized.startsWith("0")) normalized = normalized.slice(1);
        if (!normalized.startsWith("54")) normalized = "549" + normalized;

        if (normalized.length < 10) {
            alert("Ingresá un número válido para confirmar por WhatsApp.");
            return;
        }

        const text = buildWhatsappText();
        const url = `https://wa.me/${normalized}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const handleConfirm = () => {
        // ✅ CTA principal: confirmar compra
        openWhatsapp();
    };

    const handleWhatsappForm = (e) => {
        e.preventDefault();
        openWhatsapp();
    };

    return (
        <main className="cartPage">
            <header className="cartHeader">
                <div>
                    <h1 className="cartTitle">Carrito</h1>
                    <p className="cartSubtitle">Revisá cantidades, IVA y totales por producto.</p>
                </div>

                {cart.length > 0 && (
                    <button className="btn btn--ghost" onClick={onClear} type="button">
                        Vaciar carrito
                    </button>
                )}
            </header>

            {cart.length === 0 ? (
                <div className="cartEmpty">
                    <h2>Tu carrito está vacío</h2>
                    <p>Agregá productos desde Tienda o desde el detalle.</p>

                    <div style={{ marginTop: 12 }}>
                        <button className="btn btn--primary" onClick={() => navigate("/tienda")} type="button">
                            Ir a Tienda
                        </button>
                    </div>
                </div>
            ) : (
                <div className="cartGrid">
                    <section className="cartList">
                        {rows.map((p) => (
                            <article key={p.id} className="cartItem">
                                <div className="cartItem__imgWrap">
                                    <img className="cartItem__img" src={p.image} alt={p.title} loading="lazy" />
                                </div>

                                <div className="cartItem__info">
                                    <h3 className="cartItem__name">{p.title}</h3>

                                    <div className="cartItem__meta">
                                        <span className="pill">{p.category}</span>
                                        <span className="muted">
                                            Precio neto: <strong>$ {money(p.price)}</strong> / {p.unit}
                                        </span>
                                        <span className="muted">
                                            IVA: <strong>{(p.ivaRate * 100).toFixed(1)}%</strong>
                                        </span>
                                    </div>

                                    <div className="cartItem__controls">
                                        <div className="qty">
                                            <button
                                                className="qty__btn"
                                                onClick={() => handleMinus(p)}
                                                aria-label="Restar"
                                                type="button"
                                            >
                                                −
                                            </button>

                                            <span className="qty__value">
                                                {p.qty} {p.unit}
                                            </span>

                                            <button
                                                className="qty__btn"
                                                onClick={() => handlePlus(p)}
                                                aria-label="Sumar"
                                                type="button"
                                            >
                                                +
                                            </button>

                                            <span className="qty__hint">
                                                (paso {p.step} {p.unit})
                                            </span>
                                        </div>

                                        <button className="btn btn--danger" onClick={() => onRemove(p.id)} type="button">
                                            Quitar
                                        </button>
                                    </div>
                                </div>

                                <div className="cartItem__totals">
                                    <div className="row">
                                        <span>Subtotal (neto)</span>
                                        <strong>$ {money(p.net)}</strong>
                                    </div>
                                    <div className="row">
                                        <span>IVA</span>
                                        <strong>$ {money(p.iva)}</strong>
                                    </div>
                                    <div className="row row--total">
                                        <span>Total</span>
                                        <strong>$ {money(p.total)}</strong>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </section>

                    <aside className="cartSummary">
                        <h2 className="summaryTitle">Resumen</h2>

                        <div className="summaryRow">
                            <span>Subtotal (neto)</span>
                            <strong>$ {money(subtotal)}</strong>
                        </div>

                        <div className="summaryRow">
                            <span>IVA total</span>
                            <strong>$ {money(ivaTotal)}</strong>
                        </div>

                        <div className="summaryRow summaryRow--grand">
                            <span>Total</span>
                            <strong>$ {money(grandTotal)}</strong>
                        </div>

                        {/* ✅ CTA PRINCIPAL */}
                        <button className="btn btn--primary" type="button" onClick={handleConfirm}>
                            Confirmar compra
                        </button>

                        {/* ✅ CTA SECUNDARIO */}
                        <button className="btn btn--ghost" type="button" onClick={() => navigate("/tienda")}>
                            Continuar comprando
                        </button>

                        <div className="waBox">
                            <h3 className="waTitle">Enviar presupuesto por WhatsApp</h3>
                            <p className="waHint">
                                Ingresá tu número y te abrimos WhatsApp con el pedido listo para enviar.
                            </p>

                            <form onSubmit={handleWhatsappForm} className="waForm">
                                <input
                                    className="waInput"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Ej: 351 555 1234 o 5493515551234"
                                    inputMode="numeric"
                                />

                                <button className="btn btn--whatsapp" type="submit">
                                    Enviar por WhatsApp
                                </button>
                            </form>
                        </div>

                        <p className="summaryNote">
                            * Demo. IVA calculado por categoría según consigna. Precios estimados.
                        </p>
                    </aside>
                </div>
            )}
        </main>
    );
};

export default Cart;
