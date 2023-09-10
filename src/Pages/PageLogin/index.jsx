import { Fragment, useContext } from "react";
import { UsuarioContext } from "../../Contexts/UsuarioContext";
import usuarioCadastradoNoSistema from "../../JSONCadastrados/UsuariosCadastrados.json"
import { CiPizza } from "react-icons/ci"
import { LuPizza } from "react-icons/lu"
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
                    else if (usuario.senha === senhaUsuario && usuario.nome === nomeUsuario) {
                        console.log("aaaaaaaaaaa")
                    } else if (usuario.senha !== senhaUsuario || usuario.nome !== nomeUsuario || id.nome !== nomeUsuario) {
                        console.log("ssssssssss")
                    }
                }
            }
            )

        }

    }
    return (
        <Fragment>

            <section className={style.containerLogin}>
                <form className={style.formulario}>
                    <h3 className={style.logoName}>
                       <LuPizza/> <span>Pizza </span>Divina<CiPizza className={style.iconPizza} />
                    </h3>
                    <h2 className={style.tituloLogin}>Login</h2>
                    <h2 className={style.labelSenhaUsuario}>
                        Úsuario:
                    </h2>
                    <input type="text"
                        className={style.inputs}
                        placeholder={`use: marciomartins12`}
                        value={nomeUsuario}
                        required={true}
                        onChange={(evento) =>
                            setNomeUsuario(evento.target.value)
                        }
                    />

                    <h3 className={style.labelSenhaUsuario}>
                        Senha:
                    </h3>
                    <input type="text"
                        className={style.inputs}
                        placeholder={`use: 1234`}
                        value={senhaUsuario}
                        required={true}
                        onChange={(evento) =>
                            setSenhaUsuario(evento.target.value)
                        } />
                        <div className={style.btnDiv}>

                    <button className={style.btn}
                        onClick={() => {
                            validaUsuario()
                        }}
                        >Entrar</button>
                        </div>
                </form>
            </section>
        </Fragment>
    );
};
export default Login;