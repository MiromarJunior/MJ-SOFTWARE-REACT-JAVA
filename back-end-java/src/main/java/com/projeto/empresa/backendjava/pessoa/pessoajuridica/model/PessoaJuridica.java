package com.projeto.empresa.backendjava.pessoa.pessoajuridica.model;

import com.projeto.empresa.backendjava.pessoa.Pessoa;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@AttributeOverride(name = "pessoaNome", column = @Column(name = "peju_razao_social", length = 150, nullable = false))
@AttributeOverride(name = "pessoaFoneCelular", column = @Column(name = "peju_fone_celular", length = 20))
@AttributeOverride(name = "pessoaFoneFixo", column = @Column(name = "peju_fone_fixo", length = 20))
@AttributeOverride(name = "pessoaEmail", column = @Column(name = "peju_email", length = 150, nullable = false))
@AttributeOverride(name = "pessoaCep", column = @Column(name = "peju_cep", length = 8))
@AttributeOverride(name = "pessoaLogradouro", column = @Column(name = "peju_logradouro", length = 200))
@AttributeOverride(name = "pessoaLogradouroNr", column = @Column(name = "peju_logradouro_nr", length = 10))
@AttributeOverride(name = "pessoaBairro", column = @Column(name = "peju_bairro", length = 150))
@AttributeOverride(name = "pessoaCidade", column = @Column(name = "peju_cidade", length = 150))
@AttributeOverride(name = "pessoaUf", column = @Column(name = "peju_uf", length = 2))
@AttributeOverride(name = "pessoaDtCadastro", column = @Column(name = "peju_dt_cadastro", length = 2))
@AttributeOverride(name = "pessoaDtAtualizacao", column = @Column(name = "peju_dt_atualizacao", length = 2))
@AttributeOverride(name = "pessoaComplemento", column = @Column(name = "peju_complemento", length = 200))

@AttributeOverride(name = "pessoaRefBancariaNome1", column = @Column(name = "peju_ref_banc_nome1", length = 100))
@AttributeOverride(name = "pessoaRefBancariaFone1", column = @Column(name = "peju_ref_banc_fone1", length = 20))
@AttributeOverride(name = "pessoaRefBancariaEmail1", column = @Column(name = "peju_ref_banc_email1", length = 150))

@AttributeOverride(name = "pessoaRefBancariaNome2", column = @Column(name = "peju_ref_banc_nome2", length = 100))
@AttributeOverride(name = "pessoaRefBancariaFone2", column = @Column(name = "peju_ref_banc_fone2", length = 20))
@AttributeOverride(name = "pessoaRefBancariaEmail2", column = @Column(name = "peju_ref_banc_email2", length = 150))

@AttributeOverride(name = "pessoaRefComercialNome1", column = @Column(name = "peju_ref_comerc_nome1", length = 100))
@AttributeOverride(name = "pessoaRefComercialFone1", column = @Column(name = "peju_ref_comerc_fone1", length = 20))
@AttributeOverride(name = "pessoaRefComercialEmail1", column = @Column(name = "peju_ref_comerc_email1", length = 150))

@AttributeOverride(name = "pessoaRefComercialNome2", column = @Column(name = "peju_ref_comerc_nome2", length = 100))
@AttributeOverride(name = "pessoaRefComercialFone2", column = @Column(name = "peju_ref_comerc_fone2", length = 20))
@AttributeOverride(name = "pessoaRefComercialEmail2", column = @Column(name = "peju_ref_comerc_email2", length = 150))

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class PessoaJuridica extends Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pessoaJuridicaId;

    @Column(name = "peju_cnpj", length = 14, unique = true, nullable = false)
    private String pessoaCnpj;

    @Column(name = "peju_nome_fantasia", length = 150)
    private String pessoaNomeFantasia;

    @Column(name = "peju_inscricao_estadual", length = 20)
    private String pessoaIE;

    @Column(name = "peju_inscricao_municipal", length = 20)
    private String pessoaIM;

    @Override
    public void setPessoaEmail(String pessoaEmail) {
        super.setPessoaEmail(pessoaEmail.toLowerCase());
    }
}