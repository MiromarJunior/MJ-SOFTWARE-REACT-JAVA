package com.projeto.empresa.backendjava.pessoa.pessoafisica.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class PessoaFisicaUpdateDTO {

    private Long pessoaFisicaId;

    @NotBlank(message ="Campo obrigatório")
    @Size(min = 3, max = 150, message = "'${validatedValue}' precisa estar entre {min} e {max} caracteres.")
    private String pessoaNome;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaFoneCelular;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaFoneFixo;

    @Email
    @NotBlank(message ="Campo obrigatório")
    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaEmail;
    
    private LocalDateTime pessoaDtAtualizacao;

    @Size(max = 8, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaCep;

    @Size(max = 200, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaLogradouro;

    @Size(max = 10, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaLogradouroNr;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaBairro;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaCidade;

    @Size(max = 2, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaUf;

    @Past(message = "Data não pode ser hoje!")
    private LocalDate pessoaDtNascimento;

    @Size(max = 200, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaComplemento;

    @Size(max = 100, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaRefBancariaNome1;

    @Size(max = 20, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaRefBancariaFone1;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaRefBancariaEmail1;

    @Size(max = 100, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaRefBancariaNome2;

    @Size(max = 20, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaRefBancariaFone2;
    
    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaRefBancariaEmail2;


    @Size(max = 100, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaRefComercialNome1;

    @Size(max = 20, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaRefComercialFone1;

    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaRefComercialEmail1;

    @Size(max = 100, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaRefComercialNome2;

    @Size(max = 20, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaRefComercialFone2;
    
    @Size(max = 150, message = "'${validatedValue}' Tamanho máximo {max} caracteres.")
    private String pessoaRefComercialEmail2;

    private Boolean isFuncionario;

    private String pessoaFuncao;


    
}
