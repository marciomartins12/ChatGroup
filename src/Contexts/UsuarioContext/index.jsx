import { createContext, useState } from "react";

export const UsuarioContext = createContext();
UsuarioContext.displayName="Usuario";

export const UsuarioProvider = (children)=>{
const [nomeUsuario, setNomeUsuario] = useState("");
const [senhaUsuario, setSenhaUsuario] = useState("");
    return (
        <UsuarioContext.Provider value={{nomeUsuario, setNomeUsuario, senhaUsuario, setSenhaUsuario}}>
            {children.children}
        </UsuarioContext.Provider>
    );
};