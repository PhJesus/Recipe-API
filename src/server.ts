import app from "./infra/http/app"

const APP_PORT = Number(process.env.APP_PORT) || 5000

app.listen(APP_PORT, () => {
  console.log("Server listening on port " + APP_PORT)
})