import { Router, Request, Response } from "express";
import { IHttpRecipeRepository } from "../repositories/IHttpRecipeRepository";
import { RecipeRepository } from "../../mongodb/entities/RecipeRepository";
import { ObjectId } from "mongodb";

export class ExpressRecipeRepository implements IHttpRecipeRepository {
  public recipeRouter: Router;
  private recipeRepository: RecipeRepository;

  constructor() {
    this.recipeRouter = Router();
    this.recipeRepository = new RecipeRepository();
  }

  async GetRecipeById(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const objId = new ObjectId(id);
        
    const recipe = await this.recipeRepository.getRecipeById(objId);
    
    return res.status(200).json(recipe); 
  }
  
  async GetRecipeByPagination(req: Request, res: Response): Promise<Response> {
    const { qtPages, currPage } = req.params;

    const recipes = await this.recipeRepository.getRecipeByPagination(Number(currPage), Number(qtPages));
    
    return res.status(200).json(recipes);
  }
  async PostRecipe(req: Request, res: Response): Promise<Response> {
    const recipeobj = req.body;

    await this.recipeRepository.insertRecipe(recipeobj);
    
    return res.status(201);
  }
  async PutRecipe(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  async DeleteRecipe(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
}