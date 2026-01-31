import { useEffect, useState } from "react";
import "./ItemCount.css";

/**
 * Reglas:
 * - El contador NO suma de a 1 fijo.
 * - Suma/resta por "step" (ej: 10 L o 1 tn), y muestra la unidad.
 *
 * Props:
 * - stock: máximo
 * - initial: valor inicial (si no viene, usa step)
 * - step: paso (10 o 1)
 * - unit: "L" o "tn"
 * - onAdd(qty): callback para agregar al carrito
 */

const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

const ItemCount = ({ stock = 1000, initial, step = 1, unit = "u", onAdd }) => {
    const safeStep = Number(step) > 0 ? Number(step) : 1;
    const safeInitial = initial ?? safeStep;

    const [count, setCount] = useState(safeInitial);

    // si cambia el producto (step/unit), resetea el contador
    useEffect(() => {
        setCount(safeInitial);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [safeStep, unit]);

    const handleMinus = () => setCount((prev) => clamp(prev - safeStep, safeStep, stock));
    const handlePlus = () => setCount((prev) => clamp(prev + safeStep, safeStep, stock));

    const handleAdd = () => {
        if (typeof onAdd === "function") onAdd(count);
    };

    return (
        <div className="itemCount">
            <div className="qty">
                <button
                    className="qty__btn"
                    onClick={handleMinus}
                    disabled={count <= safeStep}
                    type="button"
                    aria-label="Restar"
                >
                    −
                </button>

                <div className="qty__center">
                    <span className="qty__value">
                        {count} <span className="qty__unit">{unit}</span>
                    </span>
                    <span className="qty__hint">paso {safeStep} {unit}</span>
                </div>

                <button
                    className="qty__btn"
                    onClick={handlePlus}
                    disabled={count >= stock}
                    type="button"
                    aria-label="Sumar"
                >
                    +
                </button>
            </div>

            <button className="btnAdd" onClick={handleAdd} disabled={stock <= 0} type="button">
                Agregar al carrito
            </button>

            <p className="stockText">
                Stock disponible: {stock} {unit}
            </p>
        </div>
    );
};

export default ItemCount;
