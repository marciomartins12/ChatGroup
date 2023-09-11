/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai"
import style from "./Mensagem.module.css"
const Menasagem = (props) => {

    return (
        <div className={style[props.valorMensagem]}>
            <span>
                Úsuario ou Senha inválidos!
            </span>
            <AiOutlineClose size={25} onClick={() => {
                props.enviarMensagem();
            }} />
        </div>
    )
}
export default Menasagem