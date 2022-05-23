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

export const deleteProduct = (req, res) => {
    products = products.filter((product) => product.id !== req.params.id)
    res.send("Produto removido com sucesso.")
}

export const updateProduct = (req, res) => {
    const product = products.find((product) => product.id === req.params.id);
    product.name = req.body.name
    product.quantity = req.body.quantity
    product.price = req.body.price

    res.send("Dados do produto atualizados.")
}