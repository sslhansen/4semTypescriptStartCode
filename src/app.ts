import express from "express";
import dotenv from "dotenv";
import path from "path"
dotenv.config()
const app = express()
import friendRoutes from "./routes/FriendRoutes"
const debug = require("debug")("app")

app.use((req, res, next) => {
  debug(new Date().toLocaleDateString() + req.method + req.url + req.ip);
  next()
})

//app.use('/static', express.static('public'))
app.use(express.static(path.join(process.cwd(), "public")))


app.use("api/friends", friendRoutes)

app.get("/demo", (req, res) => {
  res.send("Server is up");
})

app.use((req, res, next)=>{
  res.status(404).json({errorCode: 404, msg: "not found"})
})



export default app;



