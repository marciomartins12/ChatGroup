/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./ItemCardapio.module.css";

const ItemCardapio = ({ nome, id, descricao, preco }) => {

    return (
        <li className={style.section}>
            <img src={`./imagem/${id}.png`} alt={nome} />
            <div>
                <h2>{nome}</h2>
                <p>{descricao}</p>
                <h3>Preço R${preco}</h3>
                <Link to="/informacoes">mais informações</Link>
                <button>adc carrinho</button>
            </div>
        </li>
    );
}
export default ItemCardapio;