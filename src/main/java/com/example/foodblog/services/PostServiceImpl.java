package com.example.foodblog.services;

import com.example.foodblog.models.Post;
import com.example.foodblog.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements BaseService<Post> {

    @Autowired
    private PostRepository postRepository;

    @Override
    public List<Post> getAll() {
        return postRepository.findAll();
    }

    public Post getPostById(long id){
        return postRepository.getById(id);
    }

    @Override
    public void add(Post post) {
        postRepository.save(post);
    }

    @Override
    public void remove(Post post) {
        postRepository.delete(post);
    }


}
