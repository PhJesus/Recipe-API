import { Router, Request, Response } from "express";
import { ObjectId } from "mongodb";

import { GetAllRecipes } from "../../../../application/useCases/recipe/getAllRecipesUseCase";
import { GetRecipeById } from '../../../../application/useCases/recipe/getRecipeUseCase';
import { CreateRecipe } from '../../../../application/useCases/recipe/createRecipeUseCase';
import { MongoDBRecipeRepository } from "../../../databases/mongodb/mongodbRecipeRepository";

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json({ status: 'Working' });
});

router.get('/recipes', async (req: Request, res: Response) => {

  const currPage = req.query.currPage;
  const qtdPage = req.query.qtdPage;

  const mongoDBRecipeRepository = new MongoDBRecipeRepository();

  const getAllRecipesUseCase = new GetAllRecipes(
    mongoDBRecipeRepository
  );

  const recipes = await getAllRecipesUseCase.execute(Number(qtdPage), Number(currPage));

  return res.status(200).send(recipes);
});

router.get('/recipe/:id', async (req: Request, res: Response) => {

  const id = req.params.id;
  const objId = new ObjectId(id);

  const mongoDBRecipeRepository = new MongoDBRecipeRepository();

  const getRecipeById = new GetRecipeById(
    mongoDBRecipeRepository
  );

  const recipe = await getRecipeById.execute(objId);

  return res.status(200).json(recipe);
});

router.post('/recipes', async (req: Request, res: Response) => {
  const requestBody = req.body;

  console.log(requestBody);

  const mongoDBRecipeRepository = new MongoDBRecipeRepository();
  const createRecipeUseCase = new CreateRecipe(
    mongoDBRecipeRepository
  );

  const recipes = await createRecipeUseCase.execute(requestBody);

  return res.status(200).send(recipes);
});

export default router