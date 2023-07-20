import { ObjectId } from "mongodb";
import { Recipe, TRecipe } from "../../domain/recipe"

export interface IRecipeRepository {
  getAllRecipes(qtdPage: number, currPage: number): Promise<Recipe[] | []>;
  insertRecipe(recipe: Recipe): Promise<void>;
  getRecipeByParameter(id: Number | ObjectId): Promise<Recipe | null>;
  insertManyRecipes(recipe: TRecipe[]): Promise<void>;
}