package com.projeto.empresa.backendjava.pessoa;

import java.time.LocalDateTime;
import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@MappedSuperclass
public abstract class Pessoa {
    
    protected String pessoaNome;

    protected String pessoaFoneCelular;

    protected String pessoaFoneFixo;

    protected String pessoaEmail;

    protected LocalDateTime pessoaDtCadastro;

    protected LocalDateTime pessoaDtAtualizacao;

    protected String pessoaCep;

    protected String pessoaLogradouro;

    protected String pessoaLogradouroNr;

    protected String pessoaBairro;

    protected String pessoaCidade;

    protected String pessoaUf;

    protected String pessoaComplemento;

    protected String pessoaRefBancariaNome1;

    protected String pessoaRefBancariaFone1;

    protected String pessoaRefBancariaEmail1;

    protected String pessoaRefBancariaNome2;

    protected String pessoaRefBancariaFone2;

    protected String pessoaRefBancariaEmail2;

    protected String pessoaRefComercialNome1;

    protected String pessoaRefComercialFone1;

    protected String pessoaRefComercialEmail1;

    protected String pessoaRefComercialNome2;

    protected String pessoaRefComercialFone2;

    protected String pessoaRefComercialEmail2;

    
}
