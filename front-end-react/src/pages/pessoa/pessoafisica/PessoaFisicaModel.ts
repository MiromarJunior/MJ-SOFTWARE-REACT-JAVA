
export interface PessoaFisicaModel {

  pessoaFisicaId: number;
  
  pessoaNome: string;

  pessoaFoneCelular: string;
  pessoaFoneCelularForm: string;

  pessoaFoneFixo: string;
  pessoaFoneFixoForm: string;

  pessoaEmail: string;

  pessoaDtCadastro: string;

  pessoaDtAtualizacao: string;

  pessoaCep: string;

  pessoaLogradouro: string;

  pessoaLogradouroNr: string;

  pessoaBairro: string;

  pessoaCidade: string;

  pessoaUf: string;

  pessoaCpf: string;
  pessoaCpfForm: string;

  pessoaDtNascimento: string;
  pessoaDtNascForm: string;

  pessoaComplemento:string;

  pessoaRefBancariaNome1 :string;

  pessoaRefBancariaFone1 :string;

  pessoaRefBancariaEmail1 :string;

  pessoaRefBancariaNome2 :string;

  pessoaRefBancariaFone2 :string;

  pessoaRefBancariaEmail2 :string;

  pessoaRefComercialNome1 :string;

  pessoaRefComercialFone1 :string;

  pessoaRefComercialEmail1 :string;

  pessoaRefComercialNome2 :string;

  pessoaRefComercialFone2 :string;

  pessoaRefComercialEmail2 :string;
  
  isFuncionario:boolean;

  pessoaFuncao:string;

  alteracao:any;
}

