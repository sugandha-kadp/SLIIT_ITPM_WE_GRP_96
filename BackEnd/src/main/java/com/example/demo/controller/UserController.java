package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.User;
import com.example.demo.repository.UserManagementRepository;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

	@Autowired
	private UserManagementRepository UserManagementRepository;

	// get all Users
	@GetMapping("/Users")
	public List<User> getAllUsers() {
		return UserManagementRepository.findAll();
	}

	// create a new User
	@PostMapping("/User")
	public User createSupplyRequest(@RequestBody User user) {
		return UserManagementRepository.save(user);

	}

	// get User by ID
	@GetMapping("/User/{userID}")
	public ResponseEntity<User> getUserById(@PathVariable Long userID) {
		User user = UserManagementRepository.findById(userID).orElseThrow(
				() -> new ResourceNotFoundException("Did not have Supply Request ID : " + userID));
		return ResponseEntity.ok(user);
	}

	// Update User
	@PutMapping("/User/{userID}")
	public ResponseEntity<User> updateUser(@PathVariable Long userID,
			@RequestBody User user) {

		User user1 = UserManagementRepository.findById(userID).orElseThrow(
				() -> new ResourceNotFoundException("Did not have User ID : " + userID));

		user1.setUserID(user1.getUserID());
		user1.setType(user1.getType());
		user1.setFirstName(user1.getFirstName());
		user1.setLastName(user1.getLastName());
		user1.setContactNumber(user1.getContactNumber());
		user1.setEmail(user1.getEmail());
		user1.setProfilePic(user1.getProfilePic());
		user1.setUserName(user1.getUserName());
		user1.setPassword(user1.getPassword());

		User updatedUser = UserManagementRepository.save(user1);
		return ResponseEntity.ok(updatedUser);
	}

	// Delete Supply Request
	@DeleteMapping("/User/{userID}")
	public ResponseEntity<User> deleteUser(@PathVariable Long userID) {

		User user = UserManagementRepository.findById(userID)
				.orElseThrow(() -> new ResourceNotFoundException("Did not have userID : " + userID));
		UserManagementRepository.delete(user);
		return ResponseEntity.ok(user);

	}
	
	 @Autowired
	    private UserService userService;

	    @PostMapping("/login")
	    public ResponseEntity<User> login(@RequestParam String userName, @RequestParam String password) {
	        User user = userService.login(userName, password);
	        if (user != null) {
	            return ResponseEntity.ok(user);
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	        }
	    }
	
}
