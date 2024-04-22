import "dotenv/config";
import express from "express";
import indexRouter from "./index.router";

const app = express()
const port = parseInt(process.env.PORT || "3000")

app.use(express.json())

app.use("/",indexRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))