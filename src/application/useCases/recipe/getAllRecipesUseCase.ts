import { Recipe } from "../../../modules/recipes/entities/Recipes";
import { IRecipeRepository } from "../../repositories/recipeRepository";

export class GetAllRecipes {
  constructor(
    private recipeRepository: IRecipeRepository
  ) {}

  async execute(qtdPage: number, currPage: number): Promise<Recipe[] | []> {
    return this.recipeRepository.getAllRecipes(qtdPage, currPage);
  }
}