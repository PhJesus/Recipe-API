import { Recipe } from "../../../domain/recipe";
import { IRecipeRepository } from "../../repositories/recipeRepository";

export class GetAllRecipes {
  constructor(
    private recipeRepository: IRecipeRepository
  ) {}

  async execute(id: Number): Promise<Recipe | null> {
    // code
    return this.recipeRepository.getRecipeByParameter(id);
  }
}