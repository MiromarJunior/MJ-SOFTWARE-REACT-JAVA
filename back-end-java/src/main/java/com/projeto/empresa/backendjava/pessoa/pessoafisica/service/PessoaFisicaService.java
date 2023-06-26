package com.projeto.empresa.backendjava.pessoa.pessoafisica.service;

import java.util.List;
import java.util.Map;

import com.projeto.empresa.backendjava.pessoa.pessoafisica.dto.PessoaFisicaDTO;
import com.projeto.empresa.backendjava.pessoa.pessoafisica.dto.PessoaFisicaSimplesDTO;
import com.projeto.empresa.backendjava.pessoa.pessoafisica.dto.PessoaFisicaUpdateDTO;
import com.projeto.empresa.backendjava.pessoa.pessoafisica.model.PessoaFisica;

public interface PessoaFisicaService {

    List<PessoaFisicaSimplesDTO>  getSimpleDTO();

    List<PessoaFisica>  getAllPessoaFisica();

    PessoaFisica  getPessoaFisicaById(Long id);

    void validaCpf(String cpf);

    void validaEmail(String email, Long id);

    PessoaFisica createPessoaFisica(PessoaFisicaDTO dto);

    PessoaFisica updatePessoaFisica(Long id, PessoaFisicaUpdateDTO dto);

    Map<String, Object> deletePessoaFisica(Long id);

  
    
}
