import { ObjectId } from "mongodb";
import { Recipe } from "../../entities/Recipes";
import { IRecipeRepository } from "../../infra/mongodb/repositories/IRecipeRepository";

export class GetRecipeByIdService {
  constructor(
    private recipeRepository: IRecipeRepository
  ) {}

  async execute(id: ObjectId): Promise<Recipe | null> {
    return this.recipeRepository.getRecipeByParameter(id);
  }
}