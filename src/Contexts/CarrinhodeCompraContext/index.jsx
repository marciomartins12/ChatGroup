import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "carrinho de compras";


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
        }
    ])
    return (
        <CarrinhoContext.Provider value={{ itemSelecionado, setItemselecionado }}>
            {children}
        </CarrinhoContext.Provider>
    )
}
CarrinhoProvider.propTypes = {
    children: PropTypes.node.isRequired,
};