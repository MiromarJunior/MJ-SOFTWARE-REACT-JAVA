package com.projeto.empresa.backendjava.pessoa.pessoajuridica.service.imp;


import com.projeto.empresa.backendjava.pessoa.pessoajuridica.dto.PessoaJuridicaDTO;
import com.projeto.empresa.backendjava.pessoa.pessoajuridica.model.PessoaJuridica;
import com.projeto.empresa.backendjava.pessoa.pessoajuridica.repository.PessoaJuridicaRepository;
import com.projeto.empresa.backendjava.pessoa.pessoajuridica.service.PessoaJuridicaService;
import com.projeto.empresa.backendjava.serviceapi.ServiceAPI;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public class PessoaJuridicaServiceImp implements PessoaJuridicaService {

    @Autowired
    PessoaJuridicaRepository repo;

    @Override
    public List<PessoaJuridica> getAllPeju() {
        List<PessoaJuridica> pessoas = repo.findAll();
        Collections.sort(pessoas, Comparator.comparingLong(PessoaJuridica::getPessoaJuridicaId));
        return pessoas;
    }

    @Override
    public PessoaJuridica createPeju(PessoaJuridicaDTO dto) {
        validaCnpj(dto.getPessoaCnpj());
        PessoaJuridica pessoa = new PessoaJuridica();
        BeanUtils.copyProperties(dto, pessoa,"pessoaCnpj","pessoaFonecelular","pessoaDtCadastro","pessoaJuridicaId");
        pessoa.setPessoaCnpj(ServiceAPI.apenasNumeros(dto.getPessoaCnpj()));
        pessoa.setPessoaFoneCelular(ServiceAPI.apenasNumeros(dto.getPessoaFoneCelular()));
        pessoa.setPessoaDtCadastro(LocalDateTime.now());
        return repo.save(pessoa);
    }

    public void validaCnpj(String cnpj) {
        String cnpjString = cnpj.replaceAll("\\D+", "");
        if(repo.findByPessoaCnpj(cnpjString).isPresent()){
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Erro ao Cadastrar ou Atualizar Pessoa - CNPJ já Cadastrado: "+cnpj);
        }
    }

    @Override
    public PessoaJuridica getByPejuId(Long id) {
        return repo.findById(id)
        .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Registro não encontrado com o ID :"+ id));
    
    }

    @Override
    public PessoaJuridica updatePeju(Long id, PessoaJuridicaDTO dto) {
        PessoaJuridica pessoa = getByPejuId(id);
        BeanUtils.copyProperties(dto, pessoa,"pessoaCnpj","pessoaJuridicaId","pessoaFonecelular","pessoaFoneFixo","pessoaDtCadastro");          
        pessoa.setPessoaFoneCelular(ServiceAPI.apenasNumeros(dto.getPessoaFoneCelular()));
        pessoa.setPessoaFoneFixo(ServiceAPI.apenasNumeros(dto.getPessoaFoneFixo()));
        pessoa.setPessoaDtAtualizacao(LocalDateTime.now());
        return repo.save(pessoa);
    }

    @Override
    public Map<String, Object> deletePeju(Long id) {
        getByPejuId(id);
        repo.deleteById(id);
         Map<String, Object> resposta = new HashMap<>();
        resposta.put("mensagem", "Registro Excluído com Sucesso!");
       return resposta;
    }
}
