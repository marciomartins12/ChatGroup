import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MensagemContext = createContext();
MensagemContext.displayName="mensagem de erro de login"


export const MensagemProvider = ({children})=>{
    const [ mensagem, setMensagem] = useState("displayNone")
return (
    <MensagemContext.Provider value={{ mensagem, setMensagem}}>
        {children}
    </MensagemContext.Provider>
)
}
MensagemProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };