package com.projeto.empresa.backendjava.serviceapi;

public class ServiceAPI {
    public static String apenasNumeros(String value){
        if(value != null){
            return value.replaceAll("\\D+", "");
        }else{
            return value;
        }

    }
}
