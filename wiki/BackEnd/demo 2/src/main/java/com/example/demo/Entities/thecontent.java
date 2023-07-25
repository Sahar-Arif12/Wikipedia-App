package com.example.demo.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class thecontent {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ID;

    private String header;
    private String body;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private user user;


    public long getID() {
        return ID;
    }
    public void setID(long iD) {
        ID = iD;
    }
    public String getHeader() {
        return header;
    }
    public void setHeader(String header) {
        this.header = header;
    }
    public String getBody() {
        return body;
    }
    public void setBody(String body) {
        this.body = body;
    }
    public user getUser() {
        return user;
    }
    public void setUser(user user) {
        this.user = user;
    }
    

}
