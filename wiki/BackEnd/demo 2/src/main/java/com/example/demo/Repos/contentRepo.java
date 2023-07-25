package com.example.demo.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entities.thecontent;

public interface contentRepo extends JpaRepository <thecontent, Integer>{
    
}
