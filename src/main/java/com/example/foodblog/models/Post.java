package com.example.foodblog.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
public class Post extends AbstractModel {

    private String header;
    private String anons;
    private String text;
    private int views;
    @ElementCollection
    private List<String> comments;
    @ElementCollection
    private List<Double> ratings;
    @ManyToMany
    private List<User> users;

}
