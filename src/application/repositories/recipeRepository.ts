import { Recipe, TRecipe } from "../../domain/recipe"

export interface IRecipeRepository {
  getAllRecipes(): Promise<Recipe[] | []>;
  insertRecipe(recipe: Recipe): Promise<void>;
  getRecipeById(id: Number): Promise<Recipe | null>;
  insertManyRecipes(recipe: TRecipe[]): Promise<void>;
}