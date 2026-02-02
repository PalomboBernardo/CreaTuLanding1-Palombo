// src/services/products.js
import { DATA } from "./mocks/products.js";

const delay = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

export const products = {
    getProducts: async () => {
        await delay(600);
        return DATA;
    },

    getProductsByCategory: async (categoryId) => {
        await delay(600);
        return DATA.filter((product) => product.category === categoryId);
    },

    getProductById: async (id) => {
        await delay(600);
        return DATA.find((product) => product.id === id) || null;
    },
};
