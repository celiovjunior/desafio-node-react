import { v4 as uuid } from "uuid";

let products = [];

export const getProducts = (req, res) => {
    res.send(products);
}

export const createProduct = (req, res) => {
    const product = req.body;

    products.push({...product, id: uuid()})
    res.send("Produto registrado com sucesso.")
}

export const getProduct = (req, res) => {
    const singleProduct = products.filter((product) => product.id === req.params.id)

    res.send(singleProduct)
}