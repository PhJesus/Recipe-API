import { Request, Response } from "express"

export interface IExpressRecipeRepository {
  GetRecipeById(req: Request, res: Response): Promise<Response>;
  GetRecipeByPagination(req: Request, res: Response): Promise<Response>;
  PostRecipe(req: Request, res: Response): Promise<Response>;
  PutRecipe(req: Request, res: Response): Promise<Response>;
  DeleteRecipe(req: Request, res: Response): Promise<Response>;
}