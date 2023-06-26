import { uuid } from "uuidv4";

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

  constructor() {
    this.id = uuid();
  }
}