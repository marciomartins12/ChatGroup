import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/PageLogin";
import { UsuarioProvider } from "../Contexts/UsuarioContext";
import Cardapio from "../Pages/Cardapio";
function Routers() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <UsuarioProvider>
          <Login />
        </UsuarioProvider>
        } />
        <Route path="/cardapio" element={<Cardapio/>}/>
        {/* <Route path="/cardapio/carrinho" element={}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
