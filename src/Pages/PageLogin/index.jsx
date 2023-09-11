import { Fragment, useContext } from "react";
import { UsuarioContext } from "../../Contexts/UsuarioContext";
import usuarioCadastradoNoSistema from "../../JSONCadastrados/UsuariosCadastrados.json"
import style from "./login.module.css"
import { useNavigate } from "react-router-dom";
import Menasagem from "../../Componests/Mensagens/MensagemErroUsuario.jsx";
import { MensagemContext } from "../../Contexts/MensagemDeErro";

const Login = () => {
    const { nomeUsuario, setNomeUsuario, senhaUsuario, setSenhaUsuario } = useContext(UsuarioContext);
    const { mensagem, setMensagem } = useContext(MensagemContext);
    const navegate = useNavigate()


    function validaUsuario() {
        const id = usuarioCadastradoNoSistema.find((usuario) =>
            usuario.nome == nomeUsuario ? usuario.id : "not"
        )

        if (id != "not") {
            usuarioCadastradoNoSistema.map((usuario) => {
                if (parseInt(id.id) === parseInt(usuario.id)) {
                    if (usuario.senha != senhaUsuario) {
                        setMensagem('displayOn');
                    }
                    else if (usuario.senha !== senhaUsuario || usuario.nome !== nomeUsuario || id.nome !== nomeUsuario) {
                        setMensagem('displayOn');
                    }
                    else if (usuario.senha === senhaUsuario && usuario.nome === nomeUsuario) {
                        navegate("./cardapio");
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
                            onClick={(evento) => {
                                evento.preventDefault();
                                validaUsuario();
                            }}
                        >Entrar</button>
                    </div>
                    <Menasagem
                        valorMensagem={mensagem}
                        enviarMensagem={() => setMensagem('displayNone')}
                    />
                </form>
            </section>
        </Fragment>
    );
};
export default Login;