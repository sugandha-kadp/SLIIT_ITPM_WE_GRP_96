package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "userTbl")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long userID;
	
	@Column(name = "type")
	private String type;

	@Column(name = "firstName")
	private String firstName;

	@Column(name = "lastName")
	private String lastName;

	@Column(name = "contactNumber")
	private String contactNumber;

	@Column(name = "email")
	private String email;

	@Column(name = "profilePic")
	private String profilePic;

	@Column(name = "userName")
	private String userName;

	@Column(name = "password")
	private String password;


	public User() {

	}


	public User(long userID, String type, String firstName, String lastName, String contactNumber, String email,
			String profilePic, String userName, String password) {
		super();
		this.userID = userID;
		this.type = type;
		this.firstName = firstName;
		this.lastName = lastName;
		this.contactNumber = contactNumber;
		this.email = email;
		this.profilePic = profilePic;
		this.userName = userName;
		this.password = password;
	}


	public long getUserID() {
		return userID;
	}


	public void setUserID(long userID) {
		this.userID = userID;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getContactNumber() {
		return contactNumber;
	}


	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getProfilePic() {
		return profilePic;
	}


	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
	
}