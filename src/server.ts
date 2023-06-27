import { ExpressRepository } from "./infra/http/express/expressRepository"
import http from 'http'

const APP_PORT = Number(process.env.APP_PORT) || 5000

const expressRepository = new ExpressRepository()

const server = http.createServer(expressRepository.app)
server.listen(APP_PORT, () => console.log(`${new Date(Date.now()).toLocaleString()} - HTTP Server is running on port ${APP_PORT} `));
