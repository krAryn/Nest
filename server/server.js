import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import {join, dirname} from "path"
import { fileURLToPath } from "url";

dotenv.config({path: join(dirname(fileURLToPath(import.meta.url)), "envDir", ".env")})
const PORT = process.env.PORT || 4000

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log("Server is Running on Port: ", PORT)
})