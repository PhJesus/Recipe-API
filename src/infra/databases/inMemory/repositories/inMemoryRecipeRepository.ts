import { Recipe } from "../models/Recipe";

export class InMemoryRecipeRepository {
  public data: Recipe[];
  
  async getAllRecipes(): Promise<Recipe [] | null> {
    return this.data;
  }

  async insertRecipe(recipe: Recipe): Promise<void> {
    this.data.push(recipe);
  }
}
