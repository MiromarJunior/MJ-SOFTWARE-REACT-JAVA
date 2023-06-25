package com.projeto.empresa.backendjava.pessoa.pessoajuridica.repository;

import com.projeto.empresa.backendjava.pessoa.pessoajuridica.model.PessoaJuridica;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PessoaJuridicaRepository extends JpaRepository<PessoaJuridica,Long> {
    Optional<PessoaJuridica> findByPessoaCnpj(String cnpj);
}
