package com.example.foodblog.services;

import java.util.List;

public interface BaseService<T> {

    List<T> getAll();

    void add(T t);
}
