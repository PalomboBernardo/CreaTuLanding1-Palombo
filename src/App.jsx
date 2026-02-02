import { Route, Routes, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";

import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

import Home from "./pages/Home.jsx";
import StoreHub from "./pages/StoreHub.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./App.css";

function App() {
    // 📍 Ruta actual (para ocultar el NavBar en Home)
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    // 🛒 Estado del carrito
    const [cart, setCart] = useState([]);

    // 🔢 Cantidad total de ítems en el carrito
    const totalItems = useMemo(() => {
        return cart.reduce(
            (total, cartItem) => total + cartItem.qty,
            0
        );
    }, [cart]);

    // ➕ Agregar producto al carrito
    const addToCart = (item, quantity) => {
        setCart((previousCart) => {
            const existingItem = previousCart.find(
                (product) => product.id === item.id
            );

            if (existingItem) {
                return previousCart.map((product) =>
                    product.id === item.id
                        ? { ...product, qty: product.qty + quantity }
                        : product
                );
            }

            return [...previousCart, { ...item, qty: quantity }];
        });
    };

    // ❌ Quitar producto del carrito
    const removeFromCart = (id) => {
        setCart((previousCart) =>
            previousCart.filter(
                (product) => product.id !== id
            )
        );
    };

    // 🧹 Vaciar carrito
    const clearCart = () => {
        setCart([]);
    };

    // 🔄 Actualizar cantidad desde el carrito
    const updateQuantity = (id, newQuantity) => {
        setCart((previousCart) =>
            previousCart
                .map((product) =>
                    product.id === id
                        ? { ...product, qty: newQuantity }
                        : product
                )
                .filter((product) => product.qty > 0)
        );
    };

    return (
        <>
            {/* 🚫 Ocultamos NavBar solo en el Home */}
            {!isHomePage && (
                <NavBar totalItems={totalItems} />
            )}

            <Routes>
                {/* 🏠 Home */}
                <Route path="/" element={<Home />} />

                {/* 🛍️ Tienda (hub de categorías) */}
                <Route path="/tienda" element={<StoreHub />} />

                {/* 📦 Catálogo completo */}
                <Route
                    path="/tienda/productos"
                    element={
                        <ItemListContainer greeting="Catálogo de productos" />
                    }
                />

                {/* 🧩 Categorías */}
                <Route
                    path="/category/:categoryId"
                    element={
                        <ItemListContainer greeting="Productos por categoría" />
                    }
                />

                {/* 🔍 Detalle de producto */}
                <Route
                    path="/item/:itemId"
                    element={
                        <ItemDetailContainer onAddToCart={addToCart} />
                    }
                />

                {/* 📄 Páginas informativas */}
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />

                {/* 🛒 Carrito */}
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            onRemove={removeFromCart}
                            onClear={clearCart}
                            onUpdateQty={updateQuantity}
                        />
                    }
                />

                {/* ❓ Página no encontrada */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
