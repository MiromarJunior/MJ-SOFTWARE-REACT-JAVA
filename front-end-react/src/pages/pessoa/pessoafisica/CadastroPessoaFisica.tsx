import { Container, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import { apenasNr, buscaCepOnline, createFormInput, dataInput, estadosBR, formataCPF, formataCelular, formataFoneFixo, validaCPF, validaCelular, validaFoneFIxo } from "../../../services/utilServices";

import { postApiBack, putApiBack } from "../../../services/crudService";
import { PessoaFisicaModel } from "./PessoaFisicaModel";
import { useState } from "react";

interface PessoaFisicaProps {
    lista: PessoaFisicaModel | null;

}

export const CadastroPessoaFisica = () => {
    const location = useLocation();
    const { lista }: PessoaFisicaProps = location?.state || null;
    const [isFuncionario, setIsFuncionario] = useState<boolean>(lista?.isFuncionario || false);


    const cadastraUsuario = (e: React.FormEvent) => {
        e.preventDefault();
        const data = createFormInput<PessoaFisicaModel>("#formUsuario");
        data.isFuncionario = isFuncionario;
        if (data.pessoaFisicaId > 0) {
            putApiBack(data.pessoaFisicaId, data, "pessoaFisica").then((resp) => {
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

    const handleFuncaoUser = () => {
        setIsFuncionario(!isFuncionario);
    }

    return (
        <>

            <h1 className="titulo" >CADASTRO DE PESSOA FÍSICA</h1>


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

                        <TextField id="pessoaFoneFixo" defaultValue={formataFoneFixo(lista?.pessoaFoneFixo)}
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

                        <button onClick={buscaCep} className="btn btn-outline-primary btn-sm" style={{ margin: "0.5rem", maxWidth: "10rem" }} type="button"   >BUSCA CEP</button>

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
                        <div style={{ display: "flex" }}>

                            



                        </div>

                    </div>
                    <div className="formContainer">
                   
                         <div>
                              
                         <label htmlFor="isFuncionario" style={{ marginRight: '10px' }}>
                         Funcionário
                         </label>
                         <input 
                          style={{ transform: 'scale(1.2)', marginRight: '10px' }}
                         id="isFuncionario" onChange={handleFuncaoUser} type="checkbox" defaultChecked={lista?.isFuncionario} />

                         </div>  

                       

                    </div>
                    <div >
                        <hr />
                        <h6 style={{ color: "GrayText" }} className="subTitulo" >REFERÊNCIAS BANCÁRIAS</h6>
                        <div className="formContainer">
                            <TextField id="pessoaRefBancariaNome1" defaultValue={lista?.pessoaRefBancariaNome1}
                                type="text"
                                label="Referencia Bancária Nome"
                                variant="outlined" InputLabelProps={{ shrink: true }}
                                inputProps={{ maxLength: 100 }}
                                sx={{ margin: "0.5rem" }}

                            />

                            <TextField id="pessoaRefBancariaFone1" defaultValue={formataFoneFixo(lista?.pessoaRefBancariaFone1)}
                                onKeyUp={() => validaFoneFIxo("pessoaRefBancariaFone1")}
                                type="text"
                                label="Referencia Bancária Fone"
                                variant="outlined" InputLabelProps={{ shrink: true }}
                                inputProps={{ maxLength: 15 }}
                                sx={{ margin: "0.5rem" }}

                            />

                            <TextField id="pessoaRefBancariaEmail1" defaultValue={lista?.pessoaRefBancariaEmail1}
                                type="email"
                                label="Referencia Bancária Email"
                                variant="outlined" InputLabelProps={{ shrink: true }}
                                inputProps={{ maxLength: 150 }}
                                sx={{ margin: "0.5rem" }}

                            />


                            <TextField id="pessoaRefBancariaNome2" defaultValue={lista?.pessoaRefBancariaNome2}
                                type="text"
                                label="Referencia Bancária Nome"
                                variant="outlined" InputLabelProps={{ shrink: true }}
                                inputProps={{ maxLength: 100 }}
                                sx={{ margin: "0.5rem" }}
                            />

                            <TextField id="pessoaRefBancariaFone2" defaultValue={formataFoneFixo(lista?.pessoaRefBancariaFone2)}
                                onKeyUp={() => validaFoneFIxo("pessoaRefBancariaFone2")}
                                type="text"
                                label="Referencia Bancária Fone"
                                variant="outlined" InputLabelProps={{ shrink: true }}
                                inputProps={{ maxLength: 15 }}
                                sx={{ margin: "0.5rem" }}
                            />

                            <TextField id="pessoaRefBancariaEmail2" defaultValue={lista?.pessoaRefBancariaEmail2}
                                type="email"
                                label="Referencia Bancária Email"
                                variant="outlined" InputLabelProps={{ shrink: true }}
                                inputProps={{ maxLength: 150 }}
                                sx={{ margin: "0.5rem" }}
                            />
                        </div>

                        <h6 style={{ color: "GrayText" }} className="subTitulo" >REFERÊNCIAS COMERCIAIS</h6>
                        <div className="formContainer">

                            <TextField id="pessoaRefComercialNome1" defaultValue={lista?.pessoaRefComercialNome1}
                                type="text"
                                label="Referencia Comercial Nome"
                                variant="outlined" InputLabelProps={{ shrink: true }}
                                inputProps={{ maxLength: 100 }}
                                sx={{ margin: "0.5rem" }}
                            />

                            <TextField id="pessoaRefComercialFone1" defaultValue={formataFoneFixo(lista?.pessoaRefComercialFone1)}
                                onKeyUp={() => validaFoneFIxo("pessoaRefComercialFone1")}
                                type="text"
                                label="Referencia Comercial Fone"
                                variant="outlined" InputLabelProps={{ shrink: true }}
                                inputProps={{ maxLength: 15 }}
                                sx={{ margin: "0.5rem" }}
                            />

                            <TextField id="pessoaRefComercialEmail1" defaultValue={lista?.pessoaRefComercialEmail1}
                                type="email"
                                label="Referencia Comercial Email"
                                variant="outlined" InputLabelProps={{ shrink: true }}
                                inputProps={{ maxLength: 150 }}
                                sx={{ margin: "0.5rem" }}
                            />


                            <TextField id="pessoaRefComercialNome2" defaultValue={lista?.pessoaRefComercialNome2}
                                type="text"
                                label="Referencia Comercial Nome"
                                variant="outlined" InputLabelProps={{ shrink: true }}
                                inputProps={{ maxLength: 100 }}
                                sx={{ margin: "0.5rem" }}
                            />

                            <TextField id="pessoaRefComercialFone2" defaultValue={formataFoneFixo(lista?.pessoaRefComercialFone2)}
                                onKeyUp={() => validaFoneFIxo("pessoaRefComercialFone2")}
                                type="text"
                                label="Referencia Comercial Fone"
                                variant="outlined" InputLabelProps={{ shrink: true }}
                                inputProps={{ maxLength: 15 }}
                                sx={{ margin: "0.5rem" }}
                            />

                            <TextField id="pessoaRefComercialEmail2" defaultValue={lista?.pessoaRefComercialEmail2}
                                type="email"
                                label="Referencia Comercial Email"
                                variant="outlined" InputLabelProps={{ shrink: true }}
                                inputProps={{ maxLength: 150 }}
                                sx={{ margin: "0.5rem" }}
                            />

                        </div>


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