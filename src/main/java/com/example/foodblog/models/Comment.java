package com.example.foodblog.models;

import javax.persistence.*;
import java.util.Date;

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

    public String getText() { return text; }

    public void setText(String text) {
        this.text = text;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
