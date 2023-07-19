import { BrowserRouter,Routes ,Route, Navigate} from "react-router-dom"

import { CadastroPessoaFisica } from "./pages/pessoa/pessoafisica/CadastroPessoaFisica"
import Menu, { ChildrenProps } from "./Menu"
import { HomeInit } from "./pages/home/HomeInit"
import { PessoaFisica } from "./pages/pessoa/pessoafisica/PessoaFisica"
import { PessoaJuridica } from "./pages/pessoa/pessoajuridica/PessoaJuridica"
import { CadastroPessoaJuridica } from "./pages/pessoa/pessoajuridica/CadastroPessoaJuridica"
import { LoginUsuario } from "./pages/login/LoginUsuario"

const Private = ({children}:ChildrenProps)=>{
    const log = sessionStorage.getItem("log");
    if(log === "sim"){
        return (
            <div>
                {children}
            </div>
        )
        
    }
    return  <Navigate to="/"></Navigate>;

}



export const AppRotas = ()=>{
    return(
        <BrowserRouter>
        
        <Routes>
        <Route path="/" element={<LoginUsuario/>}  /> 
 
        <Route path="/*" element={<Private><Menu><HomeInit/></Menu></Private>}  /> 
       
            <Route path="/pessoaFisica" element={ <Private><Menu><PessoaFisica/></Menu></Private>}  />         
            <Route path="/cadastroPessoaFisica" element={<Private><Menu><CadastroPessoaFisica/></Menu></Private>}  />         
            <Route path="/pessoaJuridica" element={<Private><Menu><PessoaJuridica/></Menu></Private>}  />         
            <Route path="/cadastroPessoaJuridica" element={<Private><Menu><CadastroPessoaJuridica/></Menu></Private>}  />         
          
        </Routes>
        
        
        </BrowserRouter>
    )
}