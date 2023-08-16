import http from 'http'
import express from "express";
import env from './config/env.config';

class App {
  private port: string = env.APP_PORT;
  private app: express.Application;

  constructor() {
    this.app = express();
  }

  public listen() {
    const server = http.createServer(this.app)
    server.listen(this.port, () => console.log(`${new Date(Date.now()).toLocaleString()} - HTTP Server is running on port ${this.port} `));
  }
}

const app = new App().listen();