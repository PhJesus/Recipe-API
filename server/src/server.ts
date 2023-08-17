import http from 'http'
import express from "express";
import env from './config/env.config';
import { ExpressRecipeRepository } from './modules/recipes/infra/http/entities/ExpressRecipeRepository';

class App {
  private port: string = env.APP_PORT;
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use('/recipes', new ExpressRecipeRepository().router)
  }

  public listen() {
    const server = http.createServer(this.app)
    server.listen(this.port, () => console.log(`${new Date(Date.now()).toLocaleString()} - HTTP Server is running on port ${this.port} `));
  }
}

const app = new App().listen();