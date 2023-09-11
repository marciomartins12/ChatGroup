/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./ItemCardapio.module.css";
import { useContext } from "react";
import { Carrinho } from "../../Contexts/CarrinhodeCompraContext";
import { MdAddShoppingCart } from "react-icons/md"

const ItemCardapio = ({ nome, id, descricao, preco }) => {
    const carrinho = useContext(Carrinho);
    console.log(carrinho, descricao)
    return (
        <li className={style.section}>
            {carrinho.carrinhovalor.length > 0 ? console.log("tem algo") : console.log("não tem nada")}
            <img src={`./imagem/${id}.png`} alt={nome} />
            <div className={style.container}>
                <div className={style.containerDiv}>
                    <div>
                        <h2>{nome}</h2>
                        <h3>Preço R${preco}</h3>
                        <p>
                            <Link className={style.link} to="/informacoes">ingredientes</Link>  
                        </p>

                    </div>
                    <MdAddShoppingCart className={style.icon} />
                </div>
            </div>
        </li>
    );
}
export default ItemCardapio;