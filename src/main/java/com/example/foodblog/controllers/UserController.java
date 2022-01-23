package com.example.foodblog.controllers;

import com.example.foodblog.models.User;
import com.example.foodblog.services.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserServiceImpl userService;

    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List> getAllUsers(){
        List<User> allUsers = userService.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(allUsers);
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user){
        userService.add(user);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
