package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserManagementRepository;

@Service
public class UserService {

	@Autowired
    private UserManagementRepository userRepository;

    public User login(String userName, String password) {
        User user = userRepository.findByUserName(userName);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
    
}
