import { Route, Routes } from "react-router-dom";
import { useMemo, useState } from "react";

import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./App.css";

function App() {
    const [cart, setCart] = useState([]);

    const totalItems = useMemo(
        () => cart.reduce((acc, it) => acc + it.qty, 0),
        [cart]
    );

    // ✅ agrega (desde detalle)
    const addToCart = (item, qty) => {
        setCart((prev) => {
            const existing = prev.find((p) => p.id === item.id);
            if (existing) {
                return prev.map((p) =>
                    p.id === item.id ? { ...p, qty: p.qty + qty } : p
                );
            }
            return [...prev, { ...item, qty }];
        });
    };

    // ✅ quita item completo
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((p) => p.id !== id));
    };

    const clearCart = () => setCart([]);

    // ✅ NUEVO: actualiza cantidad desde el carrito (+ / -)
    const updateQty = (id, nextQty) => {
        setCart((prev) =>
            prev
                .map((p) => (p.id === id ? { ...p, qty: nextQty } : p))
                .filter((p) => p.qty > 0)
        );
    };

    return (
        <>
            <NavBar totalItems={totalItems} />

            <Routes>
                <Route
                    path="/"
                    element={<ItemListContainer greeting="Bienvenido a AgroStore" />}
                />
                <Route
                    path="/tienda"
                    element={<ItemListContainer greeting="Catálogo de productos" />}
                />

                <Route
                    path="/category/:categoryId"
                    element={<ItemListContainer greeting="Productos por categoría" />}
                />

                <Route
                    path="/item/:itemId"
                    element={<ItemDetailContainer onAddToCart={addToCart} />}
                />

                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />

                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            onRemove={removeFromCart}
                            onClear={clearCart}
                            onUpdateQty={updateQty}
                        />
                    }
                />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
