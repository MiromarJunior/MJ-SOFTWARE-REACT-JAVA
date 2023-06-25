import { useEffect, useState } from "react"
import { deleteApiBack, getApiBack } from "../../../services/crudService";
import { ColumnTable, TableSimple } from "../../../components/table/TableSimple";
import { confirmaDel, formataCNPJ, formataCelular, formataFoneFixo } from "../../../services/utilServices";
import { ButtonDel, ButtonEdit } from "../../../components/buttons/ButtonAction";
import { useNavigate } from "react-router-dom";
import { PessoaJuridicaModel } from "./PessoaJuridicaModel";



export const PessoaJuridica = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState<PessoaJuridicaModel[]>([]);

    const buscaPessoa = () => {
        getApiBack({}, "pessoaJuridica", setRows).catch(error => console.error(error));
    }

    useEffect(() => {
        buscaPessoa();
    }, []);


    const updatePessoaJuridica = (lista: PessoaJuridicaModel) => {

        delete lista.alteracao;
        navigate("/cadastroPessoaJuridica", { state: { lista } })

    }

    const savePessoaJuridica = () => {
        navigate("/cadastroPessoaJuridica", { state: { lista: null } });
    }

    const deletePessoa = (pessoaId: number) => {
        confirmaDel().then((response) => {
            if (response.isConfirmed) {
                deleteApiBack(pessoaId, "pessoaJuridica").then((resp) => {
                    if (resp === true) {
                        buscaPessoa();
                    }
                }).catch(error => console.error(error));
            }
        }).catch(error => console.error(error));
    }

    const columns: ColumnTable[] = ([

        { id: 0, value: "pessoaNome", title: "RAZÃO SOCIAL", width: "", alignTitle: "", align: "" },
        { id: 1, value: "pessoaCnpjForm", title: "CNPJ", width: "", alignTitle: "", align: "" },
        { id: 2, value: "pessoaEmail", title: "EMAIL", width: "", alignTitle: "", align: "" },
        { id: 3, value: "pessoaFoneFixoForm", title: "FONE FIXO", width: "", alignTitle: "", align: "" },
        { id: 4, value: "pessoaFoneCelularForm", title: "CELULAR", width: "", alignTitle: "", align: "" },
        { id: 5, value: "alteracao", title: "ALTERAÇÃO", width: "50", alignTitle: "", align: "" },
       
    ]);
    const tableColumnFormat = (rowSelExt: PessoaJuridicaModel[]) => {

        if (rowSelExt.length > 0) {
            rowSelExt.forEach((rowSel) => {
                rowSel.pessoaCnpjForm = formataCNPJ(rowSel.pessoaCnpj);
                rowSel.pessoaFoneFixoForm = formataFoneFixo(rowSel.pessoaFoneFixo);
                rowSel.pessoaFoneCelularForm = formataCelular(rowSel.pessoaFoneCelular);
                rowSel.alteracao = (
                    <div style={{ display: "flex", textAlign: "center" }}>
                        <ButtonEdit updateFunction={updatePessoaJuridica} updateParam={rowSel} />
                        <ButtonDel deleteFunction={deletePessoa} deleteParam={rowSel.pessoaJuridicaId} />
                    </div>
                )

            })

        }

    }



    return (
        <div>

            <h1 className="titulo" >LISTA DE EMPRESAS</h1>

            <div>
                <TableSimple saveRow={savePessoaJuridica} rowId={"pessoaJuridicaId"} columns={columns} rows={rows} tableColumnFormat={tableColumnFormat} />
            </div>

        </div>
    )



}