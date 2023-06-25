import { useEffect, useState } from "react"
import { deleteApiBack, getApiBack } from "../../../services/crudService";
import { PessoaFisicaModel } from "./PessoaFisicaModel";
import { ColumnTable, TableSimple } from "../../../components/table/TableSimple";
import { confirmaDel, dataBR, formataCelular } from "../../../services/utilServices";



import { ButtonDel, ButtonEdit } from "../../../components/buttons/ButtonAction";
import { useNavigate } from "react-router-dom";



export const PessoaFisica = () =>{
    const navigate = useNavigate();

    const [rows,setRows] = useState<PessoaFisicaModel[]>([]);

    const buscaPessoa = () =>{
        getApiBack({},"pessoaFisica",setRows).catch(error=>console.error(error));
    }

    useEffect(()=>{
        buscaPessoa();
    },[]);


    const updatePessoaFisica = (lista: PessoaFisicaModel) => {     
      
      delete lista.alteracao;
        navigate("/cadastroPessoaFisica",{state:{lista}})
      
    }

    const savePessoaFisica = () => {     
        navigate("/cadastroPessoaFisica",{state:{lista : null}});      
    }






    const deletePessoa = (pessoaId:number)=>{
        confirmaDel().then((response)=>{
            if(response.isConfirmed){
                deleteApiBack(pessoaId,"pessoaFisica").then((resp)=>{
                    if(resp === true){
                       buscaPessoa();
                    }
                }).catch(error=>console.error(error));
            }
        }).catch(error=>console.error(error));
    }

    const columns:ColumnTable[] = ([
      
        {id:0,value:"pessoaNome",title:"NOME", width:"",alignTitle:"",align:""},
        {id:1,value:"pessoaEmail",title:"EMAIL", width:"",alignTitle:"",align:""},
        {id:2,value:"pessoaDtNascForm",title:"DATA DE NASCIMENTO", width:"",alignTitle:"",align:""},
        {id:3,value:"pessoaFoneCelularForm",title:"CELULAR", width:"",alignTitle:"",align:""},
        {id:4,value:"alteracao",title:"ALTERAÇÃO", width:"50",alignTitle:"",align:""},
    ]);
    const tableColumnFormat = (rowSelExt:PessoaFisicaModel[]) => {
  
        if (rowSelExt.length > 0) {
            rowSelExt.forEach((rowSel)=>{       
                rowSel.pessoaDtNascForm = dataBR(rowSel.pessoaDtNascimento);    
                rowSel.pessoaFoneCelularForm = formataCelular(rowSel.pessoaFoneCelular);
                rowSel.alteracao = (
                    <div style={{display : "flex", textAlign : "center"}}>
                        <ButtonEdit  updateFunction={updatePessoaFisica} updateParam={rowSel} />
                        <ButtonDel deleteFunction={deletePessoa} deleteParam={rowSel.pessoaFisicaId}/>
    
    
                    </div>
                )
                
            })
    
        }
    
    }



    return(
        <div>

<h1 className="titulo" >LISTA DE USUÁRIOS</h1>

            <div>
                <TableSimple saveRow={savePessoaFisica} rowId={"pessoaFisicaId"} columns={columns} rows={rows} tableColumnFormat={tableColumnFormat}/>
            </div>

        </div>
    )



}