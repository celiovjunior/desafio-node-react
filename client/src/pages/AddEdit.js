import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import "./AddEdit.css"

const initialState = {
    name: "",
    quantity: null,
    price: null
}

export default function AddEdit() {
    const [state, setState] = useState(initialState);

    const { name, quantity, price } = state;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value})
    }

    return(
        <div>
            <h2>Formulário de edição.</h2>
            <form style={{margin: "auto", padding: "15px", maxWidth: "1400px", alignCenter: "center"}} onSubmit={handleSubmit}>
                <label htmlFor="name">Nome do produto</label>
                <input type="text" id="name" name="name" placeholder="Insira o nome do produto" onChange={handleInputChange} value={name} />
                <label htmlFor="quantity">Quantidade (em Quilos)</label>
                <input type="number" id="quantity" name="quantity" placeholder="Quantidade em quilos (KG)" onChange={handleInputChange} value={quantity} />
                <label htmlFor="name">Preço</label>
                <input type="number" id="price" name="price" placeholder="Insira o preço do produto" onChange={handleInputChange} value={price} />
            </form>
        </div>
    )
}
