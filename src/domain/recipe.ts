import { uuid } from "uuidv4";

export type TRecipe = {
  title: string,
  desc: string,
  ingredients: string[],
  categories: string[],
  directions: string[],
  fat: Number,
  calories: Number,
  protein: Number,
  sodium: Number,
  rating: Number,
  date: Date
}

export class Recipe {
  public id: string;
  public title: string;
  public desc: string;
  public ingredients: string[];
  public categories: string[];
  public directions: string[];
  public fat: Number;
  public calories: Number;
  public protein: Number;
  public sodium: Number;
  public rating: Number;

  constructor(obj: TRecipe) {
    this.id = uuid();
    this.title = obj.title;
    this.desc = obj.desc;
    this.ingredients = obj.ingredients;
    this.categories = obj.categories;
    this.directions = obj.directions;
    this.fat = obj.fat;
    this.calories = obj.calories;
    this.protein = obj.protein;
    this.sodium = obj.sodium;
    this.rating = obj.rating;
  }
}