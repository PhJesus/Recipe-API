import 'dotenv/config'
import express from "express"
import routes from './routes/index'

export class ExpressRepository {
  public app = express()

  constructor() {
    this.app.use(express.json())
    this.app.use(routes)
  }
}