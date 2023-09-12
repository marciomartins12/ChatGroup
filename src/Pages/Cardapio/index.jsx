import style from "./Cardapio.module.css";
import listaCardapio from "./Cardapio.json";
import ItemCardapio from "../../Componests/ItensCardapio";
import {TbShoppingBag} from "react-icons/tb"
import { CarrinhoProvider } from "../../Contexts/CarrinhodeCompraContext";
import img from "../../assets/imgs/carregando.png"

const Cardapio = () => {
    return (
        <section className={style.section}>
            
            <div className={style.img}>
                <img src={img} alt="comendo"/>
            </div>
            
            <div className={style.div}>
            <TbShoppingBag className={style.iconcarrinho}/>
         

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

            </div>
        </section>
    )
}
export default Cardapio;