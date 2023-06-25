package com.projeto.empresa.backendjava.pessoa.pessoajuridica.controller;

import com.projeto.empresa.backendjava.pessoa.pessoajuridica.dto.PessoaJuridicaDTO;
import com.projeto.empresa.backendjava.pessoa.pessoajuridica.model.PessoaJuridica;
import com.projeto.empresa.backendjava.pessoa.pessoajuridica.service.imp.PessoaJuridicaServiceImp;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/pessoaJuridica")
public class PessoaJuridicaController {

    @Autowired
    PessoaJuridicaServiceImp service;

    @GetMapping
    public ResponseEntity<List<PessoaJuridica>> getAllPeju() {
        List<PessoaJuridica> pessoas = service.getAllPeju();
        return ResponseEntity.status(200).body(pessoas);
    }

    @PostMapping
    public ResponseEntity<PessoaJuridica> saveEntity(@Valid @RequestBody PessoaJuridicaDTO dto) {
        PessoaJuridica pessoa = service.createPeju(dto);
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(pessoa.getPessoaJuridicaId())
                .toUri();
        return ResponseEntity.created(uri).body(pessoa);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PessoaJuridica> updateEntity(@Valid @PathVariable Long id,
            @RequestBody PessoaJuridicaDTO dto) {
        PessoaJuridica pessoa = service.updatePeju(id, dto);
        return ResponseEntity.ok().body(pessoa);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PessoaJuridica> findByIdEntity(@PathVariable Long id) {
        PessoaJuridica pessoa = service.getByPejuId(id);
        return ResponseEntity.ok().body(pessoa);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deleteEntity(@PathVariable Long id) {
        Map<String, Object> resposta = service.deletePeju(id);
        return ResponseEntity.ok().body(resposta);

    }

}
