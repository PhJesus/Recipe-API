import { Recipe, TRecipe } from "../../../modules/recipes/entities/Recipes";
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