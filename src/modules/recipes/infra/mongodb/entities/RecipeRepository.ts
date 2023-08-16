import { Collection, Db, MongoClient, MongoClientOptions, ObjectId, ServerApiVersion } from "mongodb";
import { IRecipeRepository } from "../repositories/IRecipeRepository";
import { Recipe, TRecipe } from "../../../entities/Recipes";
import { MongoDatabase } from "../../../../../shared/MongoDatabase";
import env from '../../../../../config/env.config'

const connectionString = env.CONNECTION_STRING;

export class RecipeRepository implements IRecipeRepository {
  private database: MongoDatabase;

  constructor() {
    this.database = new MongoDatabase("RecipeAPI", connectionString);
  }

  async updateRecipe(id: ObjectId, recipe: TRecipe): Promise<Recipe> {
    throw new Error("Method not implemented.");
  }

  async insertRecipe(recipe: TRecipe): Promise<void> {
    this.database.InsertRecord("Recipes", recipe);
  }

  async insertManyRecipes(recipes: TRecipe[]): Promise<void> {
    for await (let recipe of recipes) {
      this.database.InsertRecord("Recipes", recipe);
    }
    console.log("All inserted");
  }

  async getRecipeByPagination(currPage: number, qtPage: number): Promise<Recipe[] | []> {
    return this.database.LoadAllRecordsWithPagination("Recipes", currPage, qtPage);
  }
  
  async getRecipeById(id: ObjectId): Promise<Recipe | null> {
    return this.database.LoadRecordById("Recipes", id);
  }
}
