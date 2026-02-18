import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login/login";
import { Home } from "./pages/home/home";
import { Perfil } from "./pages/perfil/perfil";
import { Historico } from "./pages/historico/historico";
import { Menu } from "./pages/menu/menu";
import { Pagamento } from "./pages/pagamento/pagamento";
import { Page404 } from "./pages/404";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/inicio' element={<Home />}></Route>
        <Route path='/cardapio' element={<Menu />}></Route>
        <Route path='*' element={<Page404 />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/perfil' element={<Perfil />} >  </Route>
        <Route path='/historico' element={<Historico />}></Route>
        <Route path='/pagamento' element={<Pagamento />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
