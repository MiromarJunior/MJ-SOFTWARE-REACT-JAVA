package com.projeto.empresa.backendjava.pessoa.pessoajuridica;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.projeto.empresa.backendjava.pessoa.pessoajuridica.controller.PessoaJuridicaController;
import com.projeto.empresa.backendjava.pessoa.pessoajuridica.dto.PessoaJuridicaDTO;
import com.projeto.empresa.backendjava.pessoa.pessoajuridica.model.PessoaJuridica;
import com.projeto.empresa.backendjava.pessoa.pessoajuridica.service.imp.PessoaJuridicaServiceImp;

@SpringBootTest
class TestePessoaJuridicaController {

    @Mock
    private PessoaJuridicaServiceImp service;

    @InjectMocks
    private PessoaJuridicaController controller;

    @Test
    void testGetAllPeju() {
        List<PessoaJuridica> pessoas = new ArrayList<>();
        pessoas.add(new PessoaJuridica());
        when(service.getAllPeju()).thenReturn(pessoas);
        ResponseEntity<List<PessoaJuridica>> response = controller.getAllPeju();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(pessoas, response.getBody());
        verify(service, times(1)).getAllPeju();
    }

    @Test
    void testSaveEntity() {
        PessoaJuridicaDTO dto = new PessoaJuridicaDTO();
        PessoaJuridica pessoa = new PessoaJuridica();
        pessoa.setPessoaJuridicaId(1L);
        when(service.createPeju(any(PessoaJuridicaDTO.class))).thenReturn(pessoa);

        ResponseEntity<PessoaJuridica> response = controller.saveEntity(dto);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(pessoa, response.getBody());
        verify(service, times(1)).createPeju(any(PessoaJuridicaDTO.class));
    }

    @Test
    void testUpdateEntity() {
        Long id = 1L;
        PessoaJuridicaDTO dto = new PessoaJuridicaDTO();
        PessoaJuridica pessoa = new PessoaJuridica();
        when(service.updatePeju(eq(id), any(PessoaJuridicaDTO.class))).thenReturn(pessoa);

        ResponseEntity<PessoaJuridica> response = controller.updateEntity(id, dto);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(pessoa, response.getBody());
        verify(service, times(1)).updatePeju(eq(id), any(PessoaJuridicaDTO.class));
    }

    @Test
    void testFindByIdEntity() {
        Long id = 1L;
        PessoaJuridica pessoa = new PessoaJuridica();
        when(service.getByPejuId(eq(id))).thenReturn(pessoa);

        ResponseEntity<PessoaJuridica> response = controller.findByIdEntity(id);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(pessoa, response.getBody());
        verify(service, times(1)).getByPejuId(eq(id));
    }

    @Test
    void testDeleteEntity() {
        Long id = 1L;
        Map<String, Object> resposta = Map.of("message", "Success");
        when(service.deletePeju(id)).thenReturn(resposta);

        ResponseEntity<Map<String, Object>> response = controller.deleteEntity(id);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(resposta, response.getBody());
        verify(service, times(1)).deletePeju(eq(id));
    }

}
