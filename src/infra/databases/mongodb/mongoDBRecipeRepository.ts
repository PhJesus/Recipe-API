import { Collection, Db, MongoClient, MongoClientOptions, ServerApiVersion } from "mongodb";
import { IRecipeRepository } from "../../../application/repositories/recipeRepository";
import { Recipe, TRecipe } from "../../../domain/recipe";

const uri = "mongodb+srv://mongo:vhyOpdNivWASKrXX@cluster0.roluhax.mongodb.net/?retryWrites=true&w=majority";

export class MongoDBRecipeRepository implements IRecipeRepository {
  public client: MongoClient
  public database: Db
  public collection: Collection;

  constructor(options?: MongoClientOptions) {
    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
      //TODO - Trocar pra options aqui ^
    });

    this.database = this.client.db('RecipeAPI');
    this.collection = this.database.collection('Recipes')
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

  async insertManyRecipes(recipe: TRecipe[]): Promise<void> {
    try {
      await this.client.connect();

      const insertManyResult = await this.collection.insertMany(recipe);
      console.log(`${insertManyResult.insertedCount} inserted`);

    }
    catch (err) {
      console.error(err)
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
