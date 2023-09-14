/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./ItemCardapio.module.css";
import { useContext } from "react";
import { Carrinho } from "../../Contexts/CarrinhodeCompraContext";
import { GiShoppingCart } from "react-icons/gi";
import { PiCookieDuotone,  PiCookingPotBold  } from "react-icons/pi";
import Cardapio from "../../Pages/Cardapio/Cardapio.json";

const ItemCardapio = ({ nome, id, descricao, preco, tamanho, adicionado }) => {
    const carrinho = useContext(Carrinho);
    console.log(descricao)
    const modificarjson = (item)=>{
    Cardapio.map((pizza)=>{
        console.log(pizza)
        pizza == item? {...pizza, adicionado: true}: console.log("não deu")
    })

    }

    return (
        <li className={style.item}>
            {carrinho.carrinhovalor.length > 0 ? console.log("tem algo") : console.log("não tem nada")}
            <img src={`./imagem/${id}.png`} alt={nome} />
            <div className={style.container}>
                <div>
                    <h2>{nome}</h2>
                    <h3>{tamanho}</h3>
                    <h3 className={style.preco}>R${preco}</h3>

                </div>
                    <p className={style.ingredientes}>
                        <Link className={style.link} to="/informacoes"><PiCookingPotBold/>ingredientes<PiCookieDuotone /></Link>
                    </p>
            </div>
            <div className={style.divIcons}>
                {
                (adicionado != true)?  <>
                    <h5>Adicionar</h5>
                <button onClick={()=> modificarjson(nome)}>
            <GiShoppingCart/>
                </button> 
                </>
                : console.log("aaaaaaaaaaaaaaa")
                }
            </div>
        </li>
    );
}
export default ItemCardapio;