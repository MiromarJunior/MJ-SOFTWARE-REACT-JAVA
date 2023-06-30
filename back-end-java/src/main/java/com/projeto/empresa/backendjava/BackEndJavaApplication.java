package com.projeto.empresa.backendjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class BackEndJavaApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndJavaApplication.class, args);
		


	}

}
