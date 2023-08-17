import { Request, Response } from "express"

export interface IHttpRecipeRepository {
  GetRecipeById(req: Request, res: Response): Promise<Response>;
  GetRecipeByPagination(req: Request, res: Response): Promise<Response>;
  PostRecipe(req: Request, res: Response): Promise<Response>;
}