import { useEffect, useState } from "react"
import { UsuarioModel } from "./usuarioModel"
import { deleteApiBack, getApiBack } from "./usuarioService"
import { IconButton, Paper } from "@mui/material";
import { confirmaDel, dataBR } from "../../services/utilServices";
import { ButtonDel, ButtonEdit } from "../../services/ButtonService";
import { UsuarioCadastro } from "./UsuarioCadastro";




export const Usuario = () => {

    const [rows, setRows] = useState<UsuarioModel[] | null>();
    const [cadastro, setCadastro] = useState<boolean>(false);
    const [cadastroAlterado, setCadastroAlterado] = useState<boolean>(false);
    const [lista, setLista] = useState<UsuarioModel | null>(null);



    const busca = () => {
        getApiBack({}, 'usuario', setRows).catch((error) => console.error(error));

    }

    useEffect(() => {
        busca();
    }, [])

    useEffect(() => {
        if(cadastroAlterado){
            busca();
            setCadastroAlterado(false)
        }
       
    }, [cadastroAlterado])




    const alteraUsuario = (lista: UsuarioModel) => {
        setLista(lista);
        setCadastro(true);
    }

    const novoCadastro = () => {
        setLista(null);
        setCadastro(true);
    }

    const excluirCadastro = (usuarioId:number)=>{

        confirmaDel().then((response)=>{
            if(response.isConfirmed){
                deleteApiBack(usuarioId,"usuario").then((resp)=>{
                    if(resp === true){
                        busca();
                    }
                }).catch((error) => console.error(error));
            }
        }).catch((error) => console.error(error));


       
        

    }

    const botaoAdd = (
        <IconButton onClick={novoCadastro}>
            <i className="fa-solid fa-circle-plus"></i>
        </IconButton>
    )


    return (
        <div>
            <div hidden={cadastro} >
                <h1 className="titulo" >USUÁRIO</h1>
                <div className="centralizaDiv" >
                    <Paper sx={{ width: "80%" }} >

                        <table className="  table table-hover table-sm  table-bordered">
                            <thead>
                                <tr>
                                    <th>{botaoAdd}</th>
                                    <th>ID</th>
                                    <th>NOME</th>
                                    <th>USUARIO</th>
                                    <th>DATA NASCIMENTO</th>

                                </tr>

                            </thead>
                            <tbody>
                                {rows?.map((l) =>
                                    <tr key={l.usuarioId}>
                                        <td align="center">

                                            <IconButton onClick={() => alteraUsuario(l)} className="iconButtonEdit">
                                                <ButtonEdit />
                                            </IconButton>
                                            <IconButton  onClick={()=>excluirCadastro(l.usuarioId)} className="iconButtonEdit"
                                           
                                            >
                                                <ButtonDel />
                                            </IconButton>


                                        </td>
                                        <td>{l.usuarioId}</td>
                                        <td>{l.usroNome}</td>
                                        <td>{l.usroUsuario}</td>
                                        <td>{dataBR(l.usroDtNascimento)}</td>


                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </Paper>
                </div>


            </div>
            <div>
                {cadastro ?
                    <UsuarioCadastro lista={lista} setCadastro={setCadastro} setCadastroAlterado={setCadastroAlterado}  />
                    : <></>}

            </div>




        </div>
    )
}