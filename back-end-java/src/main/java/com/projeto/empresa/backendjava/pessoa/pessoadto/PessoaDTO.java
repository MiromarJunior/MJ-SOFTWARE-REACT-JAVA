package com.projeto.empresa.backendjava.pessoa.pessoadto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public abstract class PessoaDTO {

    @NotBlank(message = "Campo obrigatório")
    @Size(min = 3, max = 150, message = "'${validatedValue}' precisa estar entre {min} e {max} caracteres.")
    protected String pessoaNome;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaFoneCelular;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaFoneFixo;

    @Email
    @NotBlank(message = "Campo obrigatório")
    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaEmail;

    protected LocalDateTime pessoaDtCadastro;

    protected LocalDateTime pessoaDtAtualizacao;

    @Size(max = 8, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaCep;

    @Size(max = 200, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaLogradouro;

    @Size(max = 10, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaLogradouroNr;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaBairro;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaCidade;

    @Size(max = 2, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaUf;

    @Size(max = 200, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaComplemento;

    @Size(max = 100, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaRefBancariaNome1;

    @Size(max = 20, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaRefBancariaFone1;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaRefBancariaEmail1;

    @Size(max = 100, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaRefBancariaNome2;

    @Size(max = 20, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaRefBancariaFone2;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaRefBancariaEmail2;

    @Size(max = 100, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaRefComercialNome1;

    @Size(max = 20, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaRefComercialFone1;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaRefComercialEmail1;

    @Size(max = 100, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaRefComercialNome2;

    @Size(max = 20, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaRefComercialFone2;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    protected String pessoaRefComercialEmail2;
}
