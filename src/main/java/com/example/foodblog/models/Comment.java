package com.example.foodblog.models;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
public class Comment extends AbstractModel {

    private String text;
    @ManyToOne
    @JoinColumn(name = "postId")
    private Post post;
    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    public Comment() {
    }

    public Comment(String text, Post post, User user) {
        this.text = text;
        this.post = post;
        this.user = user;
    }
}
