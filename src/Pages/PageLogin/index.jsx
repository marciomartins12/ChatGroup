import { useContext } from "react";
import { UsuarioContext } from "../../Contexts/UsuarioContext";
import usuarioCadastradoNoSistema from "../../JSONCadastrados/UsuariosCadastrados.json"
import style from "./login.module.css"

const Login = () => {
    const { nomeUsuario, setNomeUsuario, senhaUsuario, setSenhaUsuario } = useContext(UsuarioContext);
    function validaUsuario() {
        const id = usuarioCadastradoNoSistema.find((usuario) =>
            usuario.nome == nomeUsuario ? usuario.id : "not"
        )
        console.log(id)
        if (id != "not") {
            usuarioCadastradoNoSistema.map((usuario) => {
                if (parseInt(id.id) === parseInt(usuario.id)) {
                    if (usuario.senha != senhaUsuario) {
                        console.log("aaaaaaaaaaaaaaaaaaa")
                    }
                    else if (usuario.senha === senhaUsuario && usuario.nome === nomeUsuario ) {
                        console.log("aaaaaaaaaaa")
                    }else if (usuario.senha !== senhaUsuario || usuario.nome !== nomeUsuario || id.nome !== nomeUsuario) {
                    console.log("ssssssssss")
                    }
                }
            }
            )
           
        }

    }
    return (
        <section className={style.containerLogin}>
        <form className={style.formulario}>
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
                onClick={(event) => {
                    event.preventDefault()
                    validaUsuario()
                }}
            >Fazer login</button>
        </form>
      
        </section>
    );
};
export default Login;