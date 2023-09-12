import style from "./CarrinhoDeCompras.module.css";
import img from "../../../public/imagem/1.png";

const CarrinhoDeCompras = () => {
    return (
        <section className={style.section}>
            <div className={style.item}>

            <img src={img} className={style.img} alt="nome" />
            <div>

            <h6>nome da pizza</h6>
            <span>adicionar algo?</span>
            </div>
            <span>escolher metade</span>
            <select>
                <option name="refri" id="">pizza</option>
                <option name="refri" id="">pizza q</option>
                <option name="refri" id="">aaaaaaaaa1</option>
            </select>
            </div>
        </section>


    )
}
export default CarrinhoDeCompras;