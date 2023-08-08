import * as fs from 'fs'
import * as path from 'path'
import { Recipe, TRecipe } from './modules/recipes/entities/Recipes';
import { MongoDBRecipeRepository } from './modules/recipes/infra/mongodb/entities/RecipeRepository'

const mongodb = new MongoDBRecipeRepository();

async function insertIntoArr() {
  let obj = await JSON.parse(fs.readFileSync(path.join(__dirname, '../tmp/full_format_recipes.json'), 'utf8'))
  let recipeArr: TRecipe[] = [];

  for (let i = 0; i < obj.length; i++) {
    let recipe = {
      title: obj[i].title,
      desc: obj[i].desc,
      ingredients: obj[i].ingredients,
      categories: obj[i].categories,
      directions: obj[i].directions,
      fat: obj[i].fat,
      calories: obj[i].calories,
      protein: obj[i].protein,
      sodium: obj[i].sodium,
      rating: obj[i].rating,
      date: new Date(obj[i].date)
    }
    
    recipeArr.push(recipe)
  }

  //console.log(recipeArr)

  await mongodb.insertManyRecipes(recipeArr);
}

insertIntoArr()