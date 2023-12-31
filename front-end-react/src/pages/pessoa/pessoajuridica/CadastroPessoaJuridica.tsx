import { Container, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import { apenasNr, buscaCnpjOnline, createFormInput, estadosBR, formataCNPJ, formataCelular, formataFoneFixo, validaCNPJ, validaCelular, validaFoneFIxo } from "../../../services/utilServices";

import { postApiBack, putApiBack } from "../../../services/crudService";
import { PessoaJuridicaModel } from "./PessoaJuridicaModel";


interface PessoaJuridicaProps {
    lista: PessoaJuridicaModel | null;

}

export const CadastroPessoaJuridica = () => {

    const location = useLocation();

    const { lista }: PessoaJuridicaProps = location?.state || null;
    const alteracaoDeRegistro = (lista?.pessoaJuridicaId ? lista?.pessoaJuridicaId > 0 : false);


    const cadastraEmpresa = (e: React.FormEvent) => {
        e.preventDefault();
        const data = createFormInput<PessoaJuridicaModel>("#formEmpresa");
        if (data.pessoaJuridicaId > 0) {
            putApiBack(data.pessoaJuridicaId, data, "pessoaJuridica").then((resp) => {
                if (resp === true) {
                    returnPage();
                    return null;
                }
            }).catch((error) => console.error(error));
            return null;
        }

        postApiBack(data, "pessoaJuridica").then((resp) => {
            if (resp === true) {
                returnPage();
            }
            return null;
        }).catch((error) => console.error(error));



    }
    const returnPage = () => {
        window.history.back();
    }



    const buscaCnpj = () => {
        buscaCnpjOnline({
            idBairro: "pessoaBairro",
            idCep: "pessoaCep",
            idCidade: "pessoaCidade",
            idLogradouro: "pessoaLogradouro",
            idUF: "pessoaUf",
            idCnpj: "pessoaCnpj",
            idComplemento: "pessoaComplemento",
            idLogradouroNr: "pessoaLogradouroNr",
            idEmail: "pessoaEmail",
            idRazaoSocial: "pessoaNome",
            idNomeFantasia: "pessoaNomeFantasia",
            idFoneFixo: "pessoaFoneFixo"


        }).catch(error => console.error(error));
    }

 
    return (
        <>

            <h1 className="titulo" >CADASTRO DE EMPRESA</h1>


            <Container>
                <form onSubmit={cadastraEmpresa} id="formEmpresa"  >


                    <div className="formContainer">
                        <input id="pessoaJuridicaId" hidden defaultValue={lista?.pessoaJuridicaId} />

                        <TextField id="pessoaCnpj" required defaultValue={formataCNPJ(lista?.pessoaCnpj)}
                            onKeyUp={() => validaCNPJ("pessoaCnpj")}

                            disabled={alteracaoDeRegistro}

                            label="Cnpj"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 18 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <button onClick={buscaCnpj} className="btn btn-outline-primary btn-sm" style={{ margin: "0.5rem", maxWidth: "11rem" }} type="button" disabled={alteracaoDeRegistro}   >BUSCA CNPJ</button>
                    </div>
                    <div className="formContainer">
                        <TextField id="pessoaNome" required defaultValue={lista?.pessoaNome}

                            label="Razão Social"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 150 }}
                            sx={{ margin: "0.5rem", minWidth: "46.5%" }}

                        />

                        <TextField id="pessoaNomeFantasia" defaultValue={lista?.pessoaNomeFantasia}

                            label="Nome Fantasia"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 150 }}
                            sx={{ margin: "0.5rem", minWidth: "45%" }}

                        />

                        <TextField id="pessoaEmail" required defaultValue={lista?.pessoaEmail}
                            type="email"

                            label="Email"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 64 }}
                            sx={{ margin: "0.5rem" }}

                        />






                        <TextField id="pessoaIE" defaultValue={lista?.pessoaIE}
                            onKeyUp={() => apenasNr("pessoaIE")}

                            label="Inscrição Estadual"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 20 }}
                            sx={{ margin: "0.5rem" }}

                        />
                        <TextField id="pessoaIM" defaultValue={lista?.pessoaIM}
                            onKeyUp={() => apenasNr("pessoaIM")}

                            label="Inscrição Municipal"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 20 }}
                            sx={{ margin: "0.5rem" }}

                        />
                        <TextField id="pessoaFoneFixo" defaultValue={(lista?.pessoaFoneFixo)}
                            onKeyUp={() => validaFoneFIxo("pessoaFoneFixo")}
                            label="Fone Fixo"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 14 }}
                            sx={{ margin: "0.5rem" }}
                            required

                        />



                        <TextField id="pessoaFoneCelular" defaultValue={formataCelular(lista?.pessoaFoneCelular)}
                            onKeyUp={() => validaCelular("pessoaFoneCelular")}
                            label="Celular"
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

                        {/* <button onClick={buscaCep} className="btn btn-outline-primary btn-sm" style={{ margin: "0.5rem", maxWidth: "10rem" }} type="button"   >BUSCA CEP</button> */}

                        {/* </div>
                    <div className="formContainer"> */}

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
                        <button className="btn btn-outline-primary btn-sm" style={{ margin: "0.5rem" }} type="submit" form="formEmpresa"  >SALVAR</button>

                        <button className="btn btn-outline-danger btn-sm" type="button" onClick={returnPage} >VOLTAR</button>


                    </div>

                </form>

            </Container>
        </>
    )
}