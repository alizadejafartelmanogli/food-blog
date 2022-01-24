package com.example.foodblog.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class User extends AbstractModel {

    private String name;
    private String email;
    private String password;
    @ManyToMany (fetch = FetchType.LAZY)
    private List<Post> posts;
    @Enumerated(value = EnumType.STRING)
    private Role role;
    @Enumerated(value = EnumType.STRING)
    private Status status;
}
