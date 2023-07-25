package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.content;
import com.example.demo.Entities.thecontent;
import com.example.demo.Entities.user;
import com.example.demo.Repos.contentRepo;
import com.example.demo.Repos.userRepo;

@Service
public class contentService {
    
    @Autowired
    contentRepo CR;

    @Autowired
    userRepo UR;

    public List<thecontent> getall(){
        return CR.findAll();
    }

    public thecontent Post(String head, String body, int id)
    {
        thecontent post = new thecontent();
        user user = new user();

        user = UR.findById(id).orElse(null);

        post.setBody(body);
        post.setHeader(head);
        post.setUser(user);
        CR.save(post);
        return post;
    }

    public thecontent delete(int id)
    {
        thecontent post = new thecontent();
        CR.deleteById(id);
        return post;
    }

    public thecontent update(String body, String head, int id)
    {
        thecontent post = new thecontent();
        post = CR.findById(id).orElse(null);
        post.setBody(body);
        post.setHeader(head);
        CR.save(post);
        return post;
    }
}
