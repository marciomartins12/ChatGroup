/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const Carrinho = createContext();
Carrinho.displayName = "carrinho de compras";

export const CarrinhoProvider = ({children}) => {
const [carrinhovalor, setCarrinho] = useState([]);

    return (
        <Carrinho.Provider value={{ carrinhovalor, setCarrinho}}>
            {children}
        </Carrinho.Provider>
    )
}