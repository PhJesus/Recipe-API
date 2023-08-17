import { ObjectId } from "mongodb";
import { Recipe, TRecipe } from "../../../entities/Recipes"

export interface IRecipeRepository {
  getRecipeByPagination(qtdPage: number, currPage: number): Promise<Recipe[] | []>;

  insertRecipe(recipe: TRecipe): Promise<void>;

  getRecipeById(id: Number | ObjectId): Promise<Recipe | null>;

  insertManyRecipes(recipe: TRecipe[]): Promise<void>;
}