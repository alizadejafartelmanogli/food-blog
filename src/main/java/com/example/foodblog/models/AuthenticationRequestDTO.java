package com.example.foodblog.models;


import lombok.Data;

@Data
public class AuthenticationRequestDTO {
    private String email;
    private String password;
}
