import { Recipe } from "../../../domain/recipe";
import { IRecipeRepository } from "../../repositories/recipeRepository";

export class GetAllRecipes {
  constructor(
    private recipeRepository: IRecipeRepository
  ) {}

  async execute(): Promise<Recipe[] | []> {
    // code
    return this.recipeRepository.getAllRecipes();
  }
}