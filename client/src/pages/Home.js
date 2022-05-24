import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import axios from 'axios';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await axios.get("http://localhost:3333/products")
        if(response.status === 200) {
            setData(response.data);
        }
    }

    console.log("data => ", data)

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
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}