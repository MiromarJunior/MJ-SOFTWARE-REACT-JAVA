package com.projeto.empresa.backendjava.pessoa.pessoafisica.service.imp;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.projeto.empresa.backendjava.pessoa.pessoafisica.dto.PessoaFisicaDTO;
import com.projeto.empresa.backendjava.pessoa.pessoafisica.dto.PessoaFisicaSimplesDTO;
import com.projeto.empresa.backendjava.pessoa.pessoafisica.dto.PessoaFisicaUpdateDTO;
import com.projeto.empresa.backendjava.pessoa.pessoafisica.model.PessoaFisica;
import com.projeto.empresa.backendjava.pessoa.pessoafisica.repository.PessoaFisicaRepository;
import com.projeto.empresa.backendjava.pessoa.pessoafisica.service.PessoaFisicaService;


@Service
public class PessoaFisicaServiceImp implements PessoaFisicaService {

    @Autowired
    private PessoaFisicaRepository repository;

    public String apenasNumeros(String value){
        if(value != null){
            return value.replaceAll("\\D+", "");
        }else{
            return value;
        }

    }

    @Override
    public List<PessoaFisicaSimplesDTO> getSimpleDTO() {
        List<PessoaFisica> pessoas = repository.findAll();
        return pessoas.stream()
                .map(PessoaFisicaSimplesDTO::new)
                .collect(Collectors.toList());
            
            }

    @Override
    public PessoaFisica createPessoaFisica(PessoaFisicaDTO dto) {
        validaCpf(dto.getPessoaCpf());
      
        PessoaFisica pessoa = new PessoaFisica();
        BeanUtils.copyProperties(dto, pessoa,"pessoaCpf","pessoaFonecelular","pessoaFisicaId","pessoaDtCadastro","pessoaDtAtualizacao");       
        pessoa.setPessoaCpf(apenasNumeros(dto.getPessoaCpf()));      
        pessoa.setPessoaFoneCelular(apenasNumeros(dto.getPessoaFoneCelular()));      
        pessoa.setPessoaDtCadastro(LocalDateTime.now());
        return repository.save(pessoa);

    }

    @Override
    public List<PessoaFisica> getAllPessoaFisica() {
        return repository.findAll();
    }

    @Override
    public PessoaFisica getPessoaFisicaById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Usuário não encontrado com o ID: " + id));
    }

    @Override
    public PessoaFisica updatePessoaFisica(Long id,PessoaFisicaUpdateDTO dto) {
       
        
        PessoaFisica pessoa = getPessoaFisicaById(id);
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.map(dto, pessoa);

        pessoa.setPessoaFisicaId(id);

        pessoa.setPessoaFoneCelular(apenasNumeros(dto.getPessoaFoneCelular()));
       
        pessoa.setPessoaDtAtualizacao(LocalDateTime.now());
       
        pessoa.setPessoaCep(apenasNumeros(dto.getPessoaCep()));
      
        pessoa.setPessoaFoneFixo(apenasNumeros(dto.getPessoaFoneFixo()));

        

   
        return repository.save(pessoa);
    }

    @Override
    public void validaCpf(String cpf) {
        String cpfString = cpf.replaceAll("\\D+", "");        
        if(repository.findByPessoaCpf(cpfString).isPresent()){
           throw new ResponseStatusException(HttpStatus.CONFLICT,
            "Erro ao Cadastrar ou Atualizar Pessoa - CPF já Cadastrado: ");
        }
    }

    @Override
    public Map<String, Object> deletePessoaFisica(Long id) {
        getPessoaFisicaById(id);
        repository.deleteById(id);
        Map<String, Object> resposta = new HashMap<>();
        resposta.put("mensagem", "Registro Excluído com Sucesso!");
       return resposta;
    }

}
