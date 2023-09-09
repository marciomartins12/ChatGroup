import { useContext } from "react";
import { UsuarioContext } from "../../Contexts/UsuarioContext";


const Login = () => {
    const { nomeUsuario, setNomeUsuario, senhaUsuario, setSenhaUsuario } = useContext(UsuarioContext);
    return (
        <section>
            <h2>Login</h2>
            <h2>
                Úsuario:
            </h2>
            <input type="text" placeholder={`use: marciomartins12`}
                value={nomeUsuario}
                onChange={(evento) =>
                    setNomeUsuario(evento.target.value)
                }
            />

            <h3>
                Senha:
            </h3>
            <input type="text" placeholder={`use: 1234`}
             value={senhaUsuario}
             onChange={(evento) =>
                 setSenhaUsuario(evento.target.value)
             } />
             <button>Fazer login</button>
        </section>
    );
};
export default Login;