package com.projeto.empresa.backendjava.pessoa.pessoafisica.dto;

import java.time.LocalDate;

import org.hibernate.validator.constraints.br.CPF;

import com.projeto.empresa.backendjava.pessoa.pessoadto.PessoaDTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@EqualsAndHashCode(callSuper = false)
public class PessoaFisicaDTO extends PessoaDTO {

    private Long pessoaFisicaId;

    @NotBlank(message = "Campo obrigatório")
    @CPF
    private String pessoaCpf;

    @Past(message = "Data não pode ser hoje!")
    private LocalDate pessoaDtNascimento;

    private String pessoaFuncao;

    private Boolean isFuncionario;

    private String pessoaSenha;

}
