package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.user;
import com.example.demo.Repos.userRepo;

@Service
public class userService {
    
    @Autowired
    userRepo UR ;

    public List<user> getUsers() {
        return UR.findAll();
    }

    public user adduser (String username, String password){
        user user = new user();

        user.setPassword(password);
        user.setUsername(username);
        UR.save(user);
        return  user;
    }
}
