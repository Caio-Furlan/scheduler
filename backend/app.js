import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(express.json()) // Isso permite receber dados no formato JSON
app.use(express.urlencoded({ extended: true })) // Isso permite receber dados de formulários HTML

app.get('/', (req, res) => {
    res.send('Hello Word!')
})


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})