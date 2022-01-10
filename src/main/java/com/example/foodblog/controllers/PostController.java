package com.example.foodblog.controllers;

import com.example.foodblog.models.Post;
import com.example.foodblog.services.PostServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostServiceImpl postService;

    public PostController(PostServiceImpl postService) {
        this.postService = postService;
    }


    @GetMapping
    public ResponseEntity<List> getAllPosts(){
        List<Post> posts = postService.getAll();
        if (posts == null)
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return ResponseEntity.status(HttpStatus.OK).body(posts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable long id){
        Post post = postService.getPostById(id);
        return ResponseEntity.status(HttpStatus.OK).body(post);
    }

    @PostMapping("/add")
    public ResponseEntity.BodyBuilder addPost(@RequestBody Post post){
        postService.add(post);
        return ResponseEntity.status(HttpStatus.OK);
    }
}
