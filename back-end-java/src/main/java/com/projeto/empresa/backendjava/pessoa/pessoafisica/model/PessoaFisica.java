package com.projeto.empresa.backendjava.pessoa.pessoafisica.model;

import java.time.LocalDate;

import com.projeto.empresa.backendjava.pessoa.Pessoa;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@EqualsAndHashCode(callSuper=false)


    @AttributeOverride(name = "pessoaNome", column = @Column(name = "pefi_nome", length = 150, nullable = false))
    @AttributeOverride(name = "pessoaFoneCelular", column = @Column(name = "pefi_fone_celular",length = 20))
    @AttributeOverride(name = "pessoaFoneFixo", column = @Column(name = "pefi_fone_fixo", length = 20))
    @AttributeOverride(name = "pessoaEmail", column = @Column(name = "pefi_email",length = 150,nullable = false,unique = true))
    @AttributeOverride(name = "pessoaCep", column = @Column(name = "pefi_cep", length = 8))
    @AttributeOverride(name = "pessoaLogradouro", column = @Column(name = "pefi_logradouro", length = 200))
    @AttributeOverride(name = "pessoaLogradouroNr", column = @Column(name = "pefi_logradouro_nr", length = 10))
    @AttributeOverride(name = "pessoaBairro", column = @Column(name = "pefi_bairro",length = 150))
    @AttributeOverride(name = "pessoaCidade", column = @Column(name = "pefi_cidade",length = 150))
    @AttributeOverride(name = "pessoaUf", column = @Column(name = "pefi_uf",length = 2))
    @AttributeOverride(name = "pessoaDtCadastro", column = @Column(name = "pefi_dt_cadastro",length = 2))
    @AttributeOverride(name = "pessoaDtAtualizacao", column = @Column(name = "pefi_dt_atualizacao",length = 2))
    @AttributeOverride(name = "pessoaComplemento", column = @Column(name = "pefi_complemento", length = 200))

public class PessoaFisica extends Pessoa{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pessoaFisicaId;

    @Column(name = "pefi_cpf", length = 11, unique = true, nullable = false)
    private String pessoaCpf;

    @Column(name = "pefi_dt_nascimento")
    private LocalDate pessoaDtNascimento;

    @Override
    public void setPessoaEmail(String pessoaEmail) {       
        super.setPessoaEmail(pessoaEmail.toLowerCase());
    }

    


   
}
