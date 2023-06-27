import { Recipe } from "../../../domain/recipe";
import { IRecipeRepository } from "../../repositories/recipeRepository";

export class CreateRecipe {
  constructor(
    private recipeRepository: IRecipeRepository
  ) {}

  async execute(recipe: Recipe): Promise<void> {
    // Validação ...

    await this.recipeRepository.insertRecipe(recipe);
  }
}