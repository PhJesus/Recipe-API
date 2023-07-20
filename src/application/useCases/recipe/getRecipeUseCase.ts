import { ObjectId } from "mongodb";
import { Recipe } from "../../../domain/recipe";
import { IRecipeRepository } from "../../repositories/recipeRepository";

export class GetRecipeById {
  constructor(
    private recipeRepository: IRecipeRepository
  ) {}

  async execute(id: ObjectId): Promise<Recipe | null> {
    // code
    return this.recipeRepository.getRecipeByParameter(id);
  }
}