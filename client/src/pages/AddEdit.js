import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import "./AddEdit.css"

const initialState = {
    name: "",
    quantity: null,
    price: null
}

export default function AddEdit() {
    const [state, setState] = useState(initialState);

    const { name, quantity, price } = state;

    const addItem = async (data) => {
        const response = await axios.post("http://localhost:3333/product", data)
        if(response.status === 200) {
            toast.success(response.data)
        }
    }

    const updateItem = async (data, id) => {
        const response = await axios.put(`http://localhost:3333/product/${id}`, data)
        if(response.status === 200) {
            toast.success(response.data)
        }
    }

    const navigate = useNavigate()

    const { id } = useParams();

    useEffect(() => {
        if(id) {
            getSingleItem(id)
        }
    }, [id])

    const getSingleItem = async (id) => {
        const response = await axios.get(`http://localhost:3333/product/${id}`)
        if(response.status === 200) {
            setState({...response.data[0]})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !quantity || !price) {
            toast.error("Por favor, preencha todos os campos.")
        } else {
            if(!id) {
                addItem(state);
            } else {
                updateItem(state, id)
            }
            setTimeout(() => navigate("/"), 1000)
            ;
        }

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
                <input type="number" step="0.01" id="quantity" name="quantity" placeholder="Use ponto (.) para números quebrados" onChange={handleInputChange} value={quantity} />
                <label htmlFor="price">Preço</label>
                <input type="number" step="0.01" id="price" name="price" placeholder="Use ponto (.) para números quebrados" onChange={handleInputChange} value={price} />
                <input type="submit" value={id ? "Editar" : "Registrar"}></input>
            </form>
        </div>
    )
}
