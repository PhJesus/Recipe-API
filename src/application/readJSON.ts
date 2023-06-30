import * as fs from 'fs'
import * as path from 'path'
import { Recipe, TRecipe } from '../domain/recipe';
import { MongoDBRecipeRepository } from '../infra/databases/mongodb/mongodbRecipeRepository'


const mongodb = new MongoDBRecipeRepository();

async function insertIntoArr() {
  let obj = await JSON.parse(fs.readFileSync(path.join(__dirname, '../../tmp/full_format_recipes.json'), 'utf8'))
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
      rating: obj[i].rating
    }
    
    recipeArr.push(recipe)
  }

  console.log(recipeArr)

  //await mongodb.insertManyRecipes(recipeArr)
}

insertIntoArr()