package com.projeto.empresa.backendjava.pessoa.pessoafisica;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.projeto.empresa.backendjava.pessoa.pessoafisica.controller.PessoaFisicaController;
import com.projeto.empresa.backendjava.pessoa.pessoafisica.dto.PessoaFisicaDTO;
import com.projeto.empresa.backendjava.pessoa.pessoafisica.model.PessoaFisica;
import com.projeto.empresa.backendjava.pessoa.pessoafisica.service.imp.PessoaFisicaServiceImp;

@SpringBootTest
class TestePessoaFisicaController {

    @Mock
    private PessoaFisicaServiceImp service;

    @InjectMocks
    private PessoaFisicaController controller;

    @Test
    void testGetAll() {
        List<PessoaFisica> pessoas = new ArrayList<>();
        pessoas.add(new PessoaFisica());
        when(service.getAllPessoaFisica()).thenReturn(pessoas);
        ResponseEntity<List<PessoaFisica>> response = controller.getAll();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(pessoas, response.getBody());
        verify(service, times(1)).getAllPessoaFisica();

    }

    @Test
    void testGetById() {
        PessoaFisica pessoa = new PessoaFisica();
        Long id = 1L;
        when(service.getPessoaFisicaById(id)).thenReturn(pessoa);
        ResponseEntity<PessoaFisica> response = controller.getbyId(id);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(pessoa, response.getBody());
        verify(service, times(1)).getPessoaFisicaById(id);

    }

    @Test
    void testSave() {
        PessoaFisica pessoa = new PessoaFisica();
        PessoaFisicaDTO dto = new PessoaFisicaDTO();
        pessoa.setPessoaFisicaId(1L);
        when(service.createPessoaFisica(dto)).thenReturn(pessoa);

        ResponseEntity<PessoaFisica> response = controller.savEntity(dto);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(pessoa, response.getBody());
        verify(service, times(1)).createPessoaFisica(any(PessoaFisicaDTO.class));

    }

}
