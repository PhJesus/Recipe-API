import { Recipe, TRecipe } from "../../../domain/recipe";
import { IRecipeRepository } from "../../repositories/recipeRepository";

export class CreateRecipe {
  constructor(
    private recipeRepository: IRecipeRepository
  ) {}

  async execute(recipe: TRecipe): Promise<void> {
    // Validação ...
    await this.recipeRepository.insertRecipe(recipe);
  }
}