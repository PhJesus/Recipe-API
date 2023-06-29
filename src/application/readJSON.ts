import * as fs from 'fs'
import * as path from 'path'
import { Recipe, TRecipe } from '../domain/recipe';

let obj = JSON.parse(fs.readFileSync(path.join(__dirname, '../../tmp/full_format_recipes.json'), 'utf8'))

console.log(obj[1]);

const recipeObj: TRecipe = {
  title: obj[1].title,
  desc: obj[1].desc,
  ingredients: obj[1].ingredients,
  categories: obj[1].categories,
  directions: obj[1].directions,
  fat: obj[1].fat,
  calories: obj[1].calories,
  protein: obj[1].protein,
  sodium: obj[1].sodium,
  rating: obj[1].rating
}

const recipe = new Recipe(recipeObj);

