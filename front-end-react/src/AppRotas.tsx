import { BrowserRouter,Routes ,Route} from "react-router-dom"

import { CadastroPessoaFisica } from "./pages/pessoa/pessoafisica/CadastroPessoaFisica"
import Menu from "./Menu"
import { HomeInit } from "./pages/home/HomeInit"
import { PessoaFisica } from "./pages/pessoa/pessoafisica/PessoaFisica"
import { PessoaJuridica } from "./pages/pessoa/pessoajuridica/PessoaJuridica"
import { CadastroPessoaJuridica } from "./pages/pessoa/pessoajuridica/CadastroPessoaJuridica"




export const AppRotas = ()=>{
    return(
        <BrowserRouter>
         <Menu>
        <Routes>
        <Route path="/*" element={<HomeInit/>}  /> 
            <Route path="/pessoaFisica" element={<PessoaFisica/>}  />         
            <Route path="/cadastroPessoaFisica" element={<CadastroPessoaFisica/>}  />         
            <Route path="/pessoaJuridica" element={<PessoaJuridica/>}  />         
            <Route path="/cadastroPessoaJuridica" element={<CadastroPessoaJuridica/>}  />         
          
        </Routes>
        </Menu>
        
        </BrowserRouter>
    )
}