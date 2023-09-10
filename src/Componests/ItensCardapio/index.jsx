/* eslint-disable react/prop-types */
import style from "./ItemCardapio.module.css";
const ItemCardapio = ({nome, id, descricao}) =>{
    return (
        <section
        className={style.section}>
            <h2>{nome}</h2>
            <p>{id}</p>
            <p>{descricao}</p>
        </section>
    );
}
export default ItemCardapio;