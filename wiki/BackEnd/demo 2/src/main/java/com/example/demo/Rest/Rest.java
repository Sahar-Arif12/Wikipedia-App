package com.example.demo.Rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entities.content;
import com.example.demo.Entities.thecontent;
import com.example.demo.Entities.user;
import com.example.demo.Repos.contentRepo;
import com.example.demo.Services.contentService;
import com.example.demo.Services.userService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/Sabki/Jaan/Sehar/Khan")
public class Rest {
    
    @Autowired
    contentService CS;

    @Autowired
    userService US;


    @GetMapping("/allcontent")
    public List<thecontent> getAllContent ()
    {
        return CS.getall();
    }

    @GetMapping("/alluser")
    public List<user> getAllUsers ()
    {
        return US.getUsers();
    }
    @PostMapping("/addUser")
    public user adduser (@RequestParam String username , @RequestParam String password)
    {
        return US.adduser(username, password);
        }


    @PostMapping("/post")
    public thecontent post (@RequestParam String head , @RequestParam String body, @RequestParam int id)
    {
        return CS.Post(head, body, id);
        }

    @DeleteMapping("/delete")
    public thecontent post (@RequestParam int id){
        return CS.delete(id);
    }
    @PutMapping("/update")
    public thecontent update(@RequestParam String head, @RequestParam String body, @RequestParam int id) {
        
        return CS.update(body, head, id);
    }

}
