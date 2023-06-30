import TextField from "@mui/material/TextField/TextField";
import "./LoginUsuario.css";
import imagem from "../../assets/engs.png";
import { createFormInput, validaCPF } from "../../services/utilServices";
import { postApiBackLogin } from "./loginService";

interface Login{
    usuario:string;
    password:string;
}
export const LoginUsuario = () => {

    const login =(e: React.FormEvent)=>{
        e.preventDefault();
        const data = createFormInput<Login>("#formLogin");
        console.log(data)
        postApiBackLogin(data,"pessoaFisica/login");

    }

    return (
        <>
            <div className="container loginUsuario formContainer ">

                <form onSubmit={login} id="formLogin">
                <div className="container centralizaDiv">
                    
                    <img src={imagem} alt="LogoEngs" height={"150px"} width={"200px"}/>
                </div>
                    <div >
                        <TextField id="usuario" defaultValue={""}
                            onKeyUp={()=>validaCPF("usuario")}
                            type="text"
                            label="CPF"
                            size="small"
                            required
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 14 }}
                            sx={{ margin: "0.5rem",minWidth:"20rem", borderRadius:"20px" }}

                        />

                    </div>
                    <div>
                        <TextField id="password" defaultValue={""}
                            type="password"
                            label="SENHA"
                            size="small"
                            required
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 20 , minLength:6}}
                            sx={{ margin: "0.5rem",minWidth:"20rem", borderRadius:"20px" }}

                        />

                    </div>
                    <div>
                        <button className="btn btn-outline-success btn-sm" style={{minWidth: "20rem", margin: "0.5rem", borderRadius:"15px"}} type="submit" form="formLogin"  >LOGIN</button>

                        {/* <button className="btn btn-outline-danger btn-sm" type="button" onClick={returnPage} >VOLTAR</button> */}


                    </div>


                </form>


            </div>
        </>
    )

}