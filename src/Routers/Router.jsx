import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/PageLogin";
import { UsuarioProvider } from "../Contexts/UsuarioContext";
function Routers() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <UsuarioProvider>
          <Login />
        </UsuarioProvider>
        } />
        {/* <Route path="/produtos" element={}/>
        <Route path="/produtos/carrinho" element={}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
