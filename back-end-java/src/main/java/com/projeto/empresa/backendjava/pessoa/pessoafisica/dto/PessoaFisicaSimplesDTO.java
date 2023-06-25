package com.projeto.empresa.backendjava.pessoa.pessoafisica.dto;

import java.time.LocalDate;
import org.hibernate.validator.constraints.br.CPF;
import com.projeto.empresa.backendjava.pessoa.pessoadto.PessoaDTO;
import com.projeto.empresa.backendjava.pessoa.pessoafisica.model.PessoaFisica;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
@EqualsAndHashCode(callSuper=false)
//@JsonInclude(JsonInclude.Include.NON_NULL)
public class PessoaFisicaSimplesDTO extends PessoaDTO {

    private Long pessoaFisicaId;



    @NotBlank(message ="Campo obrigatório")
    @CPF
    private String pessoaCpf;

    @Past(message = "Data não pode ser hoje!")
    private LocalDate pessoaDtNascimento;

    public PessoaFisicaSimplesDTO(PessoaFisica pessoa){
        this.pessoaFisicaId = pessoa.getPessoaFisicaId();
        this.pessoaNome = pessoa.getPessoaNome();
        this.pessoaFoneCelular = pessoa.getPessoaFoneCelular();
        this.pessoaEmail = pessoa.getPessoaEmail();
        this.pessoaDtCadastro = pessoa.getPessoaDtCadastro();
        this.pessoaDtAtualizacao = pessoa.getPessoaDtAtualizacao();
        this.pessoaCpf = pessoa.getPessoaCpf();
        this.pessoaDtNascimento= pessoa.getPessoaDtNascimento();

    }



    
    
}
