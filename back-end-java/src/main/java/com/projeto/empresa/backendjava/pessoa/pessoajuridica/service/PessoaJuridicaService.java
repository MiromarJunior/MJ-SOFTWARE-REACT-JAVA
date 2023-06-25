package com.projeto.empresa.backendjava.pessoa.pessoajuridica.service;

import com.projeto.empresa.backendjava.pessoa.pessoajuridica.dto.PessoaJuridicaDTO;
import com.projeto.empresa.backendjava.pessoa.pessoajuridica.model.PessoaJuridica;

import java.util.List;
import java.util.Map;

public interface PessoaJuridicaService {

    List<PessoaJuridica> getAllPeju();

    PessoaJuridica createPeju(PessoaJuridicaDTO pessoaJuridicaDTO);

    PessoaJuridica getByPejuId(Long id);

    PessoaJuridica updatePeju(Long id ,PessoaJuridicaDTO pessoaJuridicaDTO);

    Map<String, Object> deletePeju(Long id);
}
