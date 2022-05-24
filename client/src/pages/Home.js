import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const response = await axios.get("http://localhost:3333/products")
        if(response.status === 200) {
            setData(response.data);
        }
    }

    const onDeleteItem = async (id) => {
        if(window.confirm("Tem certeza que deseja deletar este item?")) {
            const response = await axios.delete(`http://localhost:3333/product/${id}`)
            if(response.status === 200) {
                toast.success(response.data)
                getProducts();
            }
        }
    }

    return(
        <div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>Nº</th>
                        <th style={{textAlign: "center"}}>Nome</th>
                        <th style={{textAlign: "center"}}>Quantidade</th>
                        <th style={{textAlign: "center"}}>Preço</th>
                        <th style={{textAlign: "center"}}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => {
                        return(
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{parseFloat(item.quantity)} Kg</td>
                                <td>{parseFloat(item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button className="btn btn-edit">Editar</button>
                                    </Link>
                                    <button className="btn btn-delete" onClick={() => onDeleteItem(item.id)}>Deletar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}