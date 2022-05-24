import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css";

export default function Header() {
    const [activeTab, setActiveTab] = ("Home");

    return(
        <div className="header">
            <p className="logo">Frexco</p>
            <div className="header-right">
                <Link to="/">
                    <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}>Início</p>
                </Link>
                <Link to="/add">
                    <p className={`${activeTab === "AddProduct" ? "active" : ""}`} onClick={() => setActiveTab("AddProduct")}>Adicionar</p>
                </Link>
            </div>
        </div>
    )
}