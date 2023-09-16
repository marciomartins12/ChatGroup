import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogoFixed from "../Componests/LogoFixedePage";
import Login from "../Pages/PageLogin";
import Cardapio from "../Pages/Cardapio";
import CarrinhoDeCompras from "../Pages/CarrinhoDeCompras";
import { UsuarioProvider } from "../Contexts/UsuarioContext";
import { MensagemProvider } from "../Contexts/MensagemDeErro";
function Routers() {

  return (
      <UsuarioProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogoFixed />} >
              <Route index element={
                <MensagemProvider>
                  <Login />
                </MensagemProvider>
              }>
              </Route>
              <Route path="/cardapio" element={<Cardapio />} />
              <Route path="/carrinho" element={<CarrinhoDeCompras />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UsuarioProvider> 
  )
}

export default Routers
