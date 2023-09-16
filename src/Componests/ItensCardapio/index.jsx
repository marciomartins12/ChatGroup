/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./ItemCardapio.module.css";
import { GiShoppingCart } from "react-icons/gi";
import { PiCookieDuotone, PiCookingPotBold } from "react-icons/pi";
import { MdOutlineDoneOutline } from "react-icons/md";

import { CarrinhoContext } from "../../Contexts/CarrinhodeCompraContext"
import { useContext } from "react";
const ItemCardapio = ({ nome, id, preco, tamanho }) => {
    
    const { itemSelecionado, setItemselecionado } = useContext(CarrinhoContext)

    const adicionarIDDoItemNoCarrinho = (itemId) => {

        const updatedItems = itemSelecionado.map((item) => {
            if (item.id === itemId) {

                return {
                    ...item,
                    selecionado: !item.selecionado,
                };
            }
            return item;
        });

        setItemselecionado(updatedItems);
        console.log(itemSelecionado)
    };


    return (
        <li className={style.item}>
            {itemSelecionado.length > 0 ? console.log("tem algo") : console.log("não tem nada")}
            <img src={`./imagem/${id}.png`} alt={nome} />
            <div className={style.container}>
                <div>
                    <h2>{nome}</h2>
                    <h3>{tamanho}</h3>
                    <h3 className={style.preco}>R${preco}</h3>

                </div>
                <p className={style.ingredientes}>
                    <Link className={style.link} to="/informacoes"><PiCookingPotBold />ingredientes<PiCookieDuotone /></Link>
                </p>
            </div>
            <div className={style.divIcons}>
               
            {
  itemSelecionado.map((itemMap) => {
    if (itemMap.id === id) {
      return itemMap.selecionado ? (
        <>
      
        <MdOutlineDoneOutline key={itemMap.id} />
        <h5>no carrinho</h5>
        </>
      ) : (
        <>
          <h5>Adicionar</h5>
          <button onClick={() => adicionarIDDoItemNoCarrinho(id)}>
            <GiShoppingCart />
          </button>
        </>
      );
    }
    return null; // Certifique-se de retornar null para evitar erros de renderização
  })
}





            </div>
        </li>
    );
}
export default ItemCardapio;