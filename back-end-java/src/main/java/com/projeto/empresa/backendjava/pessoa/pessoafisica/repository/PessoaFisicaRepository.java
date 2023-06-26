package com.projeto.empresa.backendjava.pessoa.pessoafisica.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.empresa.backendjava.pessoa.pessoafisica.model.PessoaFisica;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaFisicaRepository extends JpaRepository <PessoaFisica, Long> {

    Optional<PessoaFisica> findByPessoaCpf(String cpf);
    Optional<PessoaFisica> findByPessoaEmail(String email);
    
}
