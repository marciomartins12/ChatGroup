import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/PageLogin";
import { UsuarioProvider } from "../Contexts/UsuarioContext";
import Cardapio from "../Pages/Cardapio";
import { MensagemProvider } from "../Contexts/MensagemDeErro";
function Routers() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <UsuarioProvider>
          <MensagemProvider>
          <Login />
          </MensagemProvider>
        </UsuarioProvider>
        } />
        <Route path="/cardapio" element={<Cardapio/>}/>
        {/* <Route path="/cardapio/carrinho" element={}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
