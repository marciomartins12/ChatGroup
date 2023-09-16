/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const Carrinho = createContext();
Carrinho.displayName = "carrinho de compras";

export const CarrinhoProvider = ({ children }) => {
    const [itemSelecionado, setItemselecionado] = useState([
        {
            id: 1,
            selecionado: false
        },
        {
            id: 2,
            selecionado: false
        },
        {
            id: 3,
            selecionado: false
        },
        {
            id: 4,
            selecionado: false
        },
        {
            id: 5,
            selecionado: false
        },
        {
            id: 6,
            selecionado: false
        },
        {
            id: 7,
            selecionado: false
        },
        {
            id: 8,
            selecionado: false
        },
        {
            id: 9,
            selecionado: false
        },
    ])
    const [carrinhovalor, setCarrinho] = useState([]);

    return (
        <Carrinho.Provider value={{ carrinhovalor, setCarrinho, itemSelecionado, setItemselecionado }}>
            {children}
        </Carrinho.Provider>
    )
}