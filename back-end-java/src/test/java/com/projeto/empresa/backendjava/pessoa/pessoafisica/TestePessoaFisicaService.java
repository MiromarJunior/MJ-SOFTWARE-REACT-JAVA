package com.projeto.empresa.backendjava.pessoa.pessoafisica;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.projeto.empresa.backendjava.pessoa.pessoafisica.repository.PessoaFisicaRepository;
import com.projeto.empresa.backendjava.pessoa.pessoafisica.service.imp.PessoaFisicaServiceImp;

@SpringBootTest
class TestePessoaFisicaService {

    @Mock
    private PessoaFisicaRepository repository;

    @InjectMocks
    private PessoaFisicaServiceImp service;

    @Test
    void testApenasNr(){          
        String resp = service.apenasNumeros(null);
        assertEquals(null,resp);

        resp = service.apenasNumeros("null");
        assertEquals("",resp);

                resp = service.apenasNumeros("nu1l2l69");
        assertEquals("1269",resp);
    }

       
  
    
    
}
