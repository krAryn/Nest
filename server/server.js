import express from "express";
import cors from "cors"

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json({message: "From api"})
})

app.listen(4000, () => {
    console.log("API is running!")
})