import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/PageLogin";
import { UsuarioProvider } from "../Contexts/UsuarioContext";
import Cardapio from "../Pages/Cardapio";
import { MensagemProvider } from "../Contexts/MensagemDeErro";
import LogoFixed from "../Componests/LogoFixedePage";
import CarrinhoDeCompras from "../Pages/CarrinhoDeCompras";
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
