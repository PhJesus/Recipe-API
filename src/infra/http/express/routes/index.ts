import { Router, Request, Response } from "express";
import { GetAllRecipes } from "../../../../application/useCases/recipe/getAllRecipesUseCase";
import { MongoDBRecipeRepository } from "../../../databases/mongodb/mongodbRecipeRepository";

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json({ status: 'Working' });
})

router.get('/recipes', (req: Request, res: Response) => {
  const mongoDBRecipeRepository = new MongoDBRecipeRepository();

  const getAllRecipesUseCase = new GetAllRecipes(
    mongoDBRecipeRepository
  )

  const recipes = getAllRecipesUseCase.execute();

  return res.status(200).send(recipes);
})

export default router