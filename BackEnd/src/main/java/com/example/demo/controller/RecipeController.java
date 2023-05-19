package com.example.demo.controller;

import java.util.List;

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
import com.example.demo.model.Recipe;
import com.example.demo.repository.RecipeRepository;


@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/v1/")
public class RecipeController {
	
	@Autowired
	private RecipeRepository RecipeRepository;
		
	@GetMapping("/RecipeRepository")
	public List<Recipe> getAllRecipes(){
		return RecipeRepository.findAll();
	}
	
	// create recipe rest API
	@PostMapping("/Recipe")
	public Recipe createRecipe(@RequestBody Recipe recipe) {
		return RecipeRepository.save(recipe);
	
	}
	
	//get recipe by id rest API
	@GetMapping("/Recipe/{recipeId}")
	public ResponseEntity<Recipe> getRecipeById(@PathVariable Long recipeId) {
		Recipe recipe = RecipeRepository.findById(recipeId).orElseThrow(()-> new ResourceNotFoundException("Did not have Recipe ID : " + recipeId));
		return ResponseEntity.ok(recipe);
	}
	
	
	//Update recipe rest API
	@PutMapping("/Recipe/{recipeId}")
	public ResponseEntity<Recipe> updateRecipe(@PathVariable Long recipeId, @RequestBody Recipe recipes){
		
		Recipe recipe = RecipeRepository.findById(recipeId).orElseThrow(()-> new ResourceNotFoundException("Did not have Recipe ID : " + recipeId));

		recipe.setRecipeId(recipes.getRecipeId());
		recipe.setImages(recipe.getImages());
		recipe.setTitle(recipes.getTitle());
		recipe.setContent(recipes.getContent());
		recipe.setAuthor(recipes.getAuthor());
		
		
		Recipe updatedRecipe = RecipeRepository.save(recipe);
		return ResponseEntity.ok(updatedRecipe);
	}

	// Delete recipe
	@DeleteMapping("/Recipe/{recipeId}")
	public ResponseEntity<Recipe> deleteRecipe(@PathVariable Long recipeId) {

		Recipe recipe = RecipeRepository.findById(recipeId)
				.orElseThrow(() -> new ResourceNotFoundException("Did not have id : " + recipeId));
		RecipeRepository.delete(recipe);
		return ResponseEntity.ok(recipe);

	}
	
	
	
}
