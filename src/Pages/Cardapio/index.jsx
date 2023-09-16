import style from "./Cardapio.module.css";
import listaCardapio from "./Cardapio";
import ItemCardapio from "../../Componests/ItensCardapio";
import { TbShoppingBag } from "react-icons/tb"
import { CarrinhoProvider } from "../../Contexts/CarrinhodeCompraContext"
import img from "../../assets/imgs/carregando.png"
import { Link } from "react-router-dom";

const Cardapio = () => {
    return (

        <section className={style.section}>
            <div className={style.img}>
                <img src={img} alt="comendo" />
            </div>
            <div className={style.div}>
                {/* <-incone do carrinho-> */}
                <Link to="/carrinho">
                    <TbShoppingBag className={style.iconcarrinho} />
                </Link>
                <CarrinhoProvider>
                    <ul>
                        {
                            listaCardapio.map((item) => {
                                return <ItemCardapio
                                    key={item.id}

                                    id={item.id}
                                    nome={item.nome}
                                    tamanho={item.tamanho}
                                    preco={item.preco}
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