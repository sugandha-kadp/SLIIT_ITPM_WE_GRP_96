package com.example.demo.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "recipe")
public class Recipe {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long recipeId;

	@Column(name = "title")
	private String title;

	@Column(name = "content")
	private String content;

	@Column(name = "author")
	private String author;


	public Recipe() {

	}


	public Recipe(long recipeId, String title, String content, String author) {
		super();
		this.recipeId = recipeId;
		this.title = title;
		this.content = content;
		this.author = author;
	}


	public long getRecipeId() {
		return recipeId;
	}


	public void setRecipeId(long recipeId) {
		this.recipeId = recipeId;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}



}