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

    
}
