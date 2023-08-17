import { Router, Request, Response } from "express";
import { IHttpRecipeRepository } from "../repositories/IHttpRecipeRepository";
import { RecipeRepository } from "../../mongodb/entities/RecipeRepository";
import { ObjectId } from "mongodb";

export class ExpressRecipeRepository implements IHttpRecipeRepository {
  public router: Router = Router();
  private recipeRepository: RecipeRepository;

  constructor() {
    this.recipeRepository = new RecipeRepository();

    this.router.get('/', this.GetRecipeByPagination);
    this.router.get('/:id', this.GetRecipeById);
    this.router.post('/', this.PostRecipe);
  }

  async GetRecipeById(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const objId = new ObjectId(id);
        
    const recipe = await this.recipeRepository.getRecipeById(objId);
    
    return res.status(200).json(recipe); 
  }
  
  async GetRecipeByPagination(req: Request, res: Response): Promise<Response> {
    const { qtPages, currPage } = req.query;
    if (qtPages === undefined || currPage === undefined) return res.status(400).json();

    const a = new RecipeRepository()
    const recipes = await a.getRecipeByPagination(Number(currPage), Number(qtPages));
    //const recipes = await this.recipeRepository.getRecipeByPagination(Number(currPage), Number(qtPages));
    
    return res.status(200).json(recipes);
  }
  async PostRecipe(req: Request, res: Response): Promise<Response> {
    const recipeobj = req.body;

    await this.recipeRepository.insertRecipe(recipeobj);
    
    return res.status(201);
  }
}