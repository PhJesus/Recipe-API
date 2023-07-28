import { Recipe } from "../../../domain/recipe";
import { IRecipeRepository } from "../../repositories/recipeRepository";

export class GetAllRecipes {
  constructor(
    private recipeRepository: IRecipeRepository
  ) {}

  async execute(qtdPage: number, currPage: number): Promise<Recipe[] | []> {
    return this.recipeRepository.getAllRecipes(qtdPage, currPage);
  }
}