import { MongoClient, MongoClientOptions, ServerApiVersion } from "mongodb";
import { IRecipeRepository } from "../../../application/repositories/recipeRepository";
import { Recipe } from "../../../domain/recipe";

const uri = "mongodb+srv://mongo:vhyOpdNivWASKrXX@cluster0.roluhax.mongodb.net/?retryWrites=true&w=majority";

export class MongoDBRecipeRepository implements IRecipeRepository {
  public client: MongoClient

  constructor(options: MongoClientOptions) {
    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
      //TODO - Trocar pra options aqui ^
    });
  }

  async insertRecipe(recipe: Recipe): Promise<void> {
    try {
      await this.client.connect();

    }
    catch {

    }
    finally {
      await this.client.close();
    }
    
  }

  async insertManyRecipes(recipe: Recipe): Promise<void> {
    try {
      await this.client.connect();

    }
    catch {

    }
    finally {
      await this.client.close();
    }
    
  }

  async getAllRecipes(): Promise<Recipe[] | []> {
    try {
      await this.client.connect();
      return
    }
    catch {

    }
    finally {
      await this.client.close();
    }
  }
  
  async getRecipeById(id: Number): Promise<Recipe | null> {
    try {
      await this.client.connect();
      return
    }
    catch {

    }
    finally {
      await this.client.close();
    }
  }
}
