import express from "express";

import { getProducts, createProduct } from "../controllers/products.js"

const router = express.Router();

router.get("/products", getProducts);
router.post("/product", createProduct);

export default router