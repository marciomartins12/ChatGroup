/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./ItemCardapio.module.css";
import { useContext } from "react";
import { Carrinho } from "../../Contexts/CarrinhodeCompraContext";

const ItemCardapio = ({ nome, id, descricao, preco }) => {
const carrinho= useContext(Carrinho);
console.log(carrinho)
    return (
        <li className={style.section}>
            {carrinho.carrinhovalor.length>0? console.log("tem algo"): console.log("não tem nada")}
            <img src={`./imagem/${id}.png`} alt={nome} />
            <div>
                <h2>{nome}</h2>
                <p>{descricao}</p>
                <h3>Preço R${preco}</h3>
                <Link to="/informacoes">mais informações</Link>
                <button>adc carrinho setcarrinho </button>
            </div>
        </li>
    );
}
export default ItemCardapio;