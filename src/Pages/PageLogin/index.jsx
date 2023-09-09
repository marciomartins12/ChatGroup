import { useContext } from "react";
import { UsuarioContext} from "../../Contexts/UsuarioContext";


const Login = ()=>{
    const {nomeUsuario, setNomeUsuario} = useContext(UsuarioContext);
    return (
        <section>
            <h2>
                Úsuario:
            </h2>
            <input type="text" placeholder="Escreva o Nome de Úsuario ou Email" value={nomeUsuario} onChange={(evento)=>{
                setNomeUsuario(evento.target.value)
                console.log(nomeUsuario);
            } }/>

            <h3>
                Senha:
            </h3>
            <input type="text" placeholder="Senha" />
        </section>
    );
};
export default Login;