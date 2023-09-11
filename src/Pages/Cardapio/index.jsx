import style from "./Cardapio.module.css";
import listaCardapio from "./Cardapio.json";
import ItemCardapio from "../../Componests/ItensCardapio";
import {TbShoppingBag} from "react-icons/tb"
import { CarrinhoProvider } from "../../Contexts/CarrinhodeCompraContext";

const Cardapio = () => {
    return (
        <section className={style.section}>
            <TbShoppingBag className={style.iconcarrinho}/>

            <p className={style.p2}>Fique a vontade para escolher!</p>

            <CarrinhoProvider>
            <ul>
            {
                listaCardapio.map((item)=>{
                    return <ItemCardapio
                    key={item.id}
                    id={item.id}
                    nome={item.nome}
                    preco = {item.preco}
                    />
                    
                })
            }
            </ul>
            </CarrinhoProvider>

        </section>
    )
}
export default Cardapio;