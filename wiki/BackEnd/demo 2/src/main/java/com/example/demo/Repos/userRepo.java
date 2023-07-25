package com.example.demo.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entities.user;

public interface userRepo extends JpaRepository<user, Integer> {
    
}
