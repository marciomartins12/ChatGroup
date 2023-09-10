import style from "./Cardapio.module.css";
import { LuPizza } from "react-icons/lu";
import { CiPizza } from "react-icons/ci";
import listaCardapio from "./Cardapio.json";
import ItemCardapio from "../../Componests/ItensCardapio";

const Cardapio = () => {
    return (
        <section className={style.section}>
            <p className={style.p2}>Fique a vontade para escolher!</p>
            <h3 className={style.logoName}>
                <LuPizza /> <span>Pizza </span>Divina<CiPizza className={style.iconPizza} />
            </h3>
            {
                listaCardapio.map((item)=>{
                    return <ItemCardapio
                    key={item.id}
                    nome={item.nome}
                    descricao={item.descricao}
                    />

                })
            }
        </section>
    )
}
export default Cardapio;