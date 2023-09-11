/* eslint-disable react/prop-types */
import style from "./ItemCardapio.module.css";

const ItemCardapio = ({ nome, id, descricao }) => {

    return (
        <li className={style.section}>
            <img src={`./imagem/${id}.png`} alt={nome} />
            <div>

            <h2>{nome}</h2>
            <p>{id}</p>
            <p>{descricao}</p>
            </div>
        </li>
    );
}
export default ItemCardapio;