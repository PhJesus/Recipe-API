import { ObjectId } from "mongodb";
import { Recipe, TRecipe } from "../../../entities/Recipes"

export interface IRecipeRepository {
  getAllRecipes(qtdPage: number, currPage: number): Promise<Recipe[] | []>;

  insertRecipe(recipe: TRecipe): Promise<void>;

  getRecipeByParameter(id: Number | ObjectId): Promise<Recipe | null>;

  insertManyRecipes(recipe: TRecipe[]): Promise<void>;
  
  updateRecipe(id: Number | ObjectId, recipe: TRecipe): Promise<Recipe>;
}