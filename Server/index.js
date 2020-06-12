require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./controller.js')

const app = express()

const  {SERVER_PORT, CONNECTION_STRING} = process.env

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
        .then(dbInstance => {
            app.set("db", dbInstance)
            console.log("connnected to db")
        })
        .catch(err => console.log(err))

app.use(express.json())

app.get("/api/inventory", controller.view)
app.post("/api/product", controller.create)
app.delete("/api/product/:id", controller.delete)
app.get("/api/product/:id", controller.retrieve)
app.put("/api/product/:id", controller.update)

app.listen(SERVER_PORT, () => {
    console.log(`Running on ${SERVER_PORT}`)
})