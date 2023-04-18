import axios from 'axios';

const RECIPE_API_BASE_URL = "http://localhost:8087/api/v1/Recipe";

class RecipeService {

    getRecipe() {
        return axios.get(RECIPE_API_BASE_URL);
    }

    addRecipe(recipe) {
        return axios.post(RECIPE_API_BASE_URL, recipe)
    }

    getRecipeById(recipeId) {
        return axios.get(RECIPE_API_BASE_URL + '/' + recipeId);
    }

    updateRecipe(recipe, recipeId) {
        return axios.put(RECIPE_API_BASE_URL + '/' + recipeId, recipe);
    }

}

export default new RecipeService()