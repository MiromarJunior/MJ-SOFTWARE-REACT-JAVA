import { Container, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import { apenasNr, buscaCepOnline, createFormInput, dataInput, estadosBR, formataCPF, formataCelular, validaCPF, validaCelular } from "../../../services/utilServices";

import { postApiBack, putApiBack } from "../../../services/crudService";
import { PessoaFisicaModel } from "./PessoaFisicaModel";

interface PessoaFisicaProps {
    lista: PessoaFisicaModel | null;

}

export const CadastroPessoaFisica = () => {

    const location = useLocation();
  
    const { lista }: PessoaFisicaProps = location?.state || null;


    const cadastraUsuario = (e: React.FormEvent) => {
        e.preventDefault();
        const data = createFormInput("#formUsuario");
        if (parseInt(data.pessoaFisicaId) > 0) {
            putApiBack(parseInt(data.pessoaFisicaId), data, "pessoaFisica").then((resp) => {              
                if (resp === true) {
                    returnPage();
                    return null;
                }
            }).catch((error) => console.error(error));          
            return null;
        }

        postApiBack(data, "pessoaFisica").then((resp) => {        
            if (resp === true) {
                returnPage();
            }
            return null;
        }).catch((error) => console.error(error));



    }
    const returnPage = () => {
        window.history.back();
    }

    const buscaCep = () => {
        buscaCepOnline({
            idBairro: "pessoaBairro",
            idCep: "pessoaCep",
            idCidade: "pessoaCidade",
            idLogradouro: "pessoaLogradouro",
            idUF: "pessoaUf"

        }).catch(error => console.error(error));
    }

console.log(lista)

    return (
        <>

            <h1 className="titulo" >CADASTRO DE USUÁRIO</h1>


            <Container>
                <form onSubmit={cadastraUsuario} id="formUsuario"  >

                    <div className="formContainer">
                        <input id="pessoaFisicaId" hidden defaultValue={lista?.pessoaFisicaId} />
                        <TextField id="pessoaNome" required defaultValue={lista?.pessoaNome}

                            label="Nome"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 150 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        

                        <TextField id="pessoaEmail" required defaultValue={lista?.pessoaEmail}
                            type="email"

                            label="Email"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 64 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="pessoaCpf" required defaultValue={formataCPF(lista?.pessoaCpf)}
                            onKeyUp={() => validaCPF("pessoaCpf")}

                            label="Cpf"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 14 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="pessoaDtNascimento" required defaultValue={lista?.pessoaDtNascimento}

                            label="Data de Nascimento"
                            type="date"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ max: dataInput(new Date().toString()) }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="pessoaFoneCelular" required defaultValue={formataCelular(lista?.pessoaFoneCelular)}
                            onKeyUp={() => validaCelular("pessoaFoneCelular")}
                            label="Celular"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 15 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="pessoaFoneFixo" defaultValue={(lista?.pessoaFoneFixo)}
                            onKeyUp={() => validaCelular("pessoaFoneFixo")}

                            label="Fone Fixo"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 15 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="pessoaCep" defaultValue={(lista?.pessoaCep)}

                            onKeyUp={() => apenasNr("pessoaCep")}
                            label="Cep"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 8 }}
                            sx={{ margin: "0.5rem" }}

                        />
                       
                        <button onClick={buscaCep} className="btn btn-outline-primary btn-sm" style={{ margin: "0.5rem" ,maxWidth :"10rem"}} type="button"   >BUSCA CEP</button>
                      
                        </div>
                        <div className="formContainer">

                        <TextField id="pessoaLogradouro" defaultValue={lista?.pessoaLogradouro}
                            label="Logradouro"
                            color="info"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 150 }}
                            sx={{ margin: "0.5rem", }}

                        />

                        <TextField id="pessoaLogradouroNr" defaultValue={lista?.pessoaLogradouroNr}
                            type="text"
                            label="Nr"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 7 }}
                            sx={{ margin: "0.5rem" }}
                        />

<TextField id="pessoaComplemento" defaultValue={lista?.pessoaComplemento}
                type="text"            
                label="Complemento"
                variant="outlined" InputLabelProps={{ shrink: true }}
                inputProps={{ maxLength: 150 }}
                sx={{ margin: "0.5rem" }}

            />


                        {/* <TextField id="usroComplemento" defaultValue={lista?.}
                type="text"
                size="small"
                label="Complemento"
                variant="outlined" InputLabelProps={{ shrink: true }}
                inputProps={{ maxLength: 150 }}
                sx={{ margin: "0.5rem", minWidth: "20rem" }}

            /> */}

                        <TextField id="pessoaBairro" defaultValue={lista?.pessoaBairro}
                            type="text"
                            label="Bairro"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 100 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="pessoaCidade" defaultValue={lista?.pessoaCidade}
                            type="text"
                            label="Cidade"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 100 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="pessoaUf" defaultValue={lista?.pessoaUf}
                            select
                            SelectProps={{ native: true }}
                            label="UF"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            sx={{ margin: "0.5rem", minWidth: "5rem" }}>
                            <option value={""}></option>
                            {estadosBR.map((l) =>
                                <option key={l} value={l}>{l}</option>
                            )}

                        </TextField>

                    </div>



                    <div>
                        <button className="btn btn-outline-primary btn-sm" style={{ margin: "0.5rem" }} type="submit" form="formUsuario"  >SALVAR</button>

                        <button className="btn btn-outline-danger btn-sm" type="button" onClick={returnPage} >VOLTAR</button>


                    </div>

                </form>

            </Container>
        </>
    )
}