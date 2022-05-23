import express from "express";

import { getProducts, createProduct, getProduct, deleteProduct } from "../controllers/products.js"

const router = express.Router();

router.get("/products", getProducts);
router.post("/product", createProduct);
router.get("/product/:id", getProduct);
router.delete("/product/:id", deleteProduct);

export default router