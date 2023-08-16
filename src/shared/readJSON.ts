import * as fs from 'fs'
import * as path from 'path'
import { Recipe, TRecipe } from '../modules/recipes/entities/Recipes';
import { RecipeRepository } from '../modules/recipes/infra/mongodb/entities/RecipeRepository'

const recipeRepository = new RecipeRepository();

async function insertIntoArr() {
  let parsedJSON = await JSON.parse(fs.readFileSync(path.join(__dirname, '../tmp/full_format_recipes.json'), 'utf8'))
  let recipeArr: TRecipe[] = [];

  for await (let obj of parsedJSON) {
    let recipe = {
      title: obj.title,
      desc: obj.desc,
      ingredients: obj.ingredients,
      categories: obj.categories,
      directions: obj.directions,
      fat: obj.fat,
      calories: obj.calories,
      protein: obj.protein,
      sodium: obj.sodium,
      rating: obj.rating,
      date: new Date(obj.date)
    }
    
    recipeArr.push(recipe)
  }

  console.log(recipeArr)

  //await recipeRepository.insertManyRecipes(recipeArr);
}

insertIntoArr();