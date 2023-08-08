import { Collection, Db, MongoClient, MongoClientOptions, ObjectId, ServerApiVersion } from "mongodb";
import { IRecipeRepository } from "../../../../../application/repositories/recipeRepository";
import { Recipe, TRecipe } from "../../../entities/Recipes";

const uri = "mongodb+srv://mongo:vhyOpdNivWASKrXX@cluster0.roluhax.mongodb.net/?retryWrites=true&w=majority";

export class RecipeRepository implements IRecipeRepository {
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
    this.collection = this.database.collection('Recipes');
  }

  async updateRecipe(id: Number | ObjectId, recipe: TRecipe): Promise<Recipe> {
    throw new Error("Method not implemented.");
  }

  async insertRecipe(recipe: TRecipe): Promise<void> {
    try {
      await this.client.connect();
      
      const insertResult = await this.collection.insertOne(recipe);
      console.log(insertResult);
      
      return;
    }
    catch (err) {
      console.error(err);
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
      process.exit(); // TODO - Fixdis
    }
    catch (err) {
      console.error(err);
    }
    finally {
      await this.client.close();
    }
  }

  async getAllRecipes(qtdPage: number, currPage: number): Promise<Recipe[] | []> {
    try {
      await this.client.connect();
      const cursor = this.collection.find().sort({ date: -1 }).skip(qtdPage * currPage).limit(qtdPage);
      let recipeArr: Recipe[] = [];
      //TODO - Test pagination later.
      await cursor.forEach((recipe: Recipe) => {
        recipeArr.push(recipe);
      });
      return recipeArr;
    }
    catch (error) {
      console.error(error.message);
    }
    finally {
      await this.client.close();
    }
  }
  
  async getRecipeByParameter(id: ObjectId): Promise<Recipe | null> {
    try {
      await this.client.connect();

      const cursor = await this.collection.findOne({ _id: id });

      const recipe: Recipe = <Recipe>cursor;

      return recipe;
    }
    catch (error) {
      console.error(error.message);
    }
    finally {
      await this.client.close();
    }
  }
}
