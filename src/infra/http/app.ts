import 'dotenv/config'
import express, { Request, Response } from "express"
import routes from './routes/index'

const app = express()

app.use(express.json())
app.use(routes)

app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'Working' })
})

export default app