// src/services/products.js
import { DATA } from "./mocks/products.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const products = {
    getProducts: async () => {
        await delay(600);
        return DATA;
    },

    getProductsByCategory: async (categoryId) => {
        await delay(600);
        return DATA.filter((p) => p.category === categoryId);
    },

    getProductById: async (id) => {
        await delay(600);
        return DATA.find((p) => p.id === id) || null;
    },
};
