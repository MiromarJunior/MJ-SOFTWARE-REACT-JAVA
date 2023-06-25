import { Container, TextField } from "@mui/material";
import { createFormInput, dataBR, dataInput, estadosBR, formataCPF, formataCelular, validaCPF, validaCelular } from "../../services/utilServices"
import { UsuarioModel } from "./usuarioModel";
import { postApiBack, putApiBack } from "./usuarioService";


interface UsuarioCadastroProps {
    lista: UsuarioModel | null;
    setCadastro: (value: boolean) => void;
    setCadastroAlterado: (value: boolean) => void;
}
export const UsuarioCadastro = ({ lista, setCadastro, setCadastroAlterado }: UsuarioCadastroProps) => {

    const cadastraUsuario = (e: React.FormEvent) => {
        e.preventDefault();
        const data = createFormInput("#formUsuario");
        if (parseInt(data.usuarioId) > 0) {
            putApiBack(parseInt(data.usuarioId), data, "usuario").then((resp) => {
                console.log(resp);
                if (resp === true) {
                    setCadastro(false);
                    setCadastroAlterado(true);
                    return null;
                }
            }).catch((error) => console.error(error));
            console.log("Atualizando", data);
            return null;
        }

        postApiBack(data, "usuario").then((resp) => {
            console.log(resp);
            if (resp === true) {
                setCadastro(false);
                setCadastroAlterado(true);
            }
            return null;
        }).catch((error) => console.error(error));



    }
    const returnPage = () => {
        setCadastro(false);

    }

    return (
        <div>
            <h1 className="titulo" >CADASTRO DE USUÁRIO</h1>


            <Container>
                <form onSubmit={cadastraUsuario} id="formUsuario">
                    <div>
                        <input id="usuarioId" hidden defaultValue={lista?.usuarioId} />
                        <TextField id="usroNome" required defaultValue={lista?.usroNome}
                            size="small"
                            label="Nome"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 128 }}
                            sx={{ margin: "0.5rem" }}

                        />
                        <TextField id="usroUsuario" required defaultValue={lista?.usroUsuario}
                            size="small"
                            label="Usuário"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 64 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="usroEmail" required defaultValue={lista?.usroEmail}
                            type="email"
                            size="small"
                            label="Email"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 64 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="usroCpf" required defaultValue={formataCPF(lista?.usroCpf)}
                            onKeyUp={() => validaCPF("usroCpf")}
                            size="small"
                            label="Cpf"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 14 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="usroDtNascimento" required defaultValue={lista?.usroDtNascimento}

                            size="small"
                            label="Data de Nascimento"
                            type="date"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ max: dataInput(new Date().toString()) }}
                            sx={{ margin: "0.5rem" }}

                        />

                    </div>
                    <div>
                        <TextField id="usroCelular1" required defaultValue={formataCelular(lista?.usroCelular1)}
                            onKeyUp={() => validaCelular("usroCelular1")}
                            size="small"
                            label="Celular"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 15 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="usroCelular2" defaultValue={formataCelular(lista?.usroCelular2)}
                            onKeyUp={() => validaCelular("usroCelular2")}
                            size="small"
                            label="Celular 2"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 15 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        {/* <TextField id="usroWhatsapp" defaultValue={lista?.usroWhatsapp}
                            select
                            SelectProps={{ native: true }}
                            size="small"
                            label="WhatsApp"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 15 }}
                            sx={{ margin: "0.5rem", minWidth: "12rem" }}>
                            <option value={""}></option>
                            <option value={lista?.usroCelular1}>{formataCelular(lista?.usroCelular1)}</option>
                            <option value={""}></option>
                        </TextField> */}



                    </div>
                    <div>
                        <TextField id="usroLogradouro" defaultValue={lista?.usroLogradouro}

                            size="small"
                            label="Logradouro"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 150 }}
                            sx={{ margin: "0.5rem", minWidth: "20rem" }}

                        />

                        <TextField id="usroLogradouroNr" defaultValue={lista?.usroLogradouroNr}
                            type="text"
                            size="small"
                            label="Nr"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 7 }}
                            sx={{ margin: "0.5rem", maxWidth: "5rem" }}

                        />


                        <TextField id="usroComplemento" defaultValue={lista?.usroComplemento}
                            type="text"
                            size="small"
                            label="Complemento"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 150 }}
                            sx={{ margin: "0.5rem", minWidth: "20rem" }}

                        />

                        <TextField id="usroBairro" defaultValue={lista?.usroBairro}
                            type="text"
                            size="small"
                            label="Bairro"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 100 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="usroCidade" defaultValue={lista?.usroCidade}
                            type="text"
                            size="small"
                            label="Cidade"
                            variant="outlined" InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 100 }}
                            sx={{ margin: "0.5rem" }}

                        />

                        <TextField id="usroUF" defaultValue={lista?.usroUF}
                            select
                            SelectProps={{ native: true }}
                            size="small"
                            label="UF"
                            variant="outlined" InputLabelProps={{ shrink: true }}

                            sx={{ margin: "0.5rem", minWidth: "5rem" }}>
                            <option value={""}></option>
                            {estadosBR.map((l) =>
                                <option key={l} value={lista?.usroUF}>{l}</option>
                            )}

                        </TextField>

                    </div>



                    <div>
                        <button className="btn btn-outline-primary btn-sm" style={{ margin: "0.5rem" }} type="submit" form="formUsuario"  >SALVAR</button>

                        <button className="btn btn-outline-danger btn-sm" type="button" onClick={returnPage} >VOLTAR</button>


                    </div>

                </form>

            </Container>
        </div>
    )

}