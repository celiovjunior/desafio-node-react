import express from "express";

import { getProducts, createProduct, getProduct } from "../controllers/products.js"

const router = express.Router();

router.get("/products", getProducts);
router.post("/product", createProduct);
router.get("/product/:id", getProduct);

export default router