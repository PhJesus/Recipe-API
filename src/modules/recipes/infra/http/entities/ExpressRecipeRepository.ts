import { Router, Request, Response } from "express";
import { IExpressRecipeRepository } from "../repositories/IExpressRecipeRepository";
import { RecipeRepository } from "../../mongodb/entities/RecipeRepository";
import { ObjectId } from "mongodb";
import { GetRecipeByIdService } from "../../../repositories/services/GetRecipeByIdService";

export class ExpressRecipeRepository implements IExpressRecipeRepository {
  public recipeRouter: Router;

  constructor() {
    this.recipeRouter = Router();
  }

  async GetRecipeById(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const objId = new ObjectId(id);
    
    const recipeRepository = new RecipeRepository();
    const getRecipeById = new GetRecipeByIdService(recipeRepository);
    const recipe = await getRecipeById.execute(objId);
    
    return res.status(200).json(recipe);
    
  }
  
  GetRecipeByPagination(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  PostRecipe(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  PutRecipe(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  DeleteRecipe(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
}