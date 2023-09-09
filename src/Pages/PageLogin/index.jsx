import { useContext } from "react";
import { UsuarioContext } from "../../Contexts/UsuarioContext";


const Login = () => {
    const { nomeUsuario, setNomeUsuario, senhaUsuario, setSenhaUsuario } = useContext(UsuarioContext);
    return (
        <form>
            <h2>Login</h2>
            <h2>
                Úsuario:
            </h2>
            <input type="text" placeholder={`use: marciomartins12`}
                value={nomeUsuario}
                required={true}
                onChange={(evento) =>
                    setNomeUsuario(evento.target.value)
                }
            />

            <h3>
                Senha:
            </h3>
            <input type="text" placeholder={`use: 1234`}
             value={senhaUsuario}
             required={true}
             onChange={(evento) =>
                 setSenhaUsuario(evento.target.value)
             } />
             <button
             onClick={(event)=>{event.preventDefault()}}
             >Fazer login</button>
        </form>
    );
};
export default Login;