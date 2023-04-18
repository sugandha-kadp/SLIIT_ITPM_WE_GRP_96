package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.User;
import com.example.demo.repository.UserManagementRepository;

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
	@PostMapping("/AddUser")
	public User createSupplyRequest(@RequestBody User user) {
		return UserManagementRepository.save(user);

	}

	// get User by ID
	@GetMapping("/User/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		User user = UserManagementRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Did not have User ID : " + id));
		return ResponseEntity.ok(user);
	}
	
//	// get User Name
//	@GetMapping("/User/{userName}")
//	public ResponseEntity<User> findByUserName(@PathVariable Long userName) {
//		User user = UserManagementRepository.findById(userName).orElseThrow(
//				() -> new ResourceNotFoundException("Did not have User ID : " + userName));
//		return ResponseEntity.ok(user);
//	}
//	

	// Update User
	@PutMapping("/User/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id,
			@RequestBody User user) {

		User user1 = UserManagementRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Did not have User ID : " + id));

		user1.setFirstName(user1.getFirstName());
		user1.setLastName(user1.getLastName());
		user1.setPhoneNumber(user1.getPhoneNumber());
		user1.setEmail(user1.getEmail());
		user1.setProfilePic(user1.getProfilePic());
		user1.setUserName(user1.getUserName());
		user1.setPassword(user1.getPassword());

		User updatedUser = UserManagementRepository.save(user1);
		return ResponseEntity.ok(updatedUser);
	}

	// Delete Supply Request
	@DeleteMapping("/User/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable Long id) {

		User user = UserManagementRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Did not have id : " + id));
		UserManagementRepository.delete(user);
		return ResponseEntity.ok(user);

	}
	
	@GetMapping("/login/{userId}")
	public Optional<User> getUsers(@PathVariable long userId){
		return UserManagementRepository.findById(userId);
		
	}

}
