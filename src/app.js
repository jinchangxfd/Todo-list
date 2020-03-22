const express = require('express')
const app = express()
const port = 3000

const {
    getAccount,
    getAllAccounts,
    createAccount,
    deleteAccount
} = require('./controller')

app.locals.dataFilePath = "./data.json"

app.use(express.json())

app.get("/api/tasks/:id", getAccount)

app.get("/api/tasks/", getAllAccounts)

app.post("/api/tasks/", createAccount)

app.delete("/api/tasks/:id", deleteAccount)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

exports.app = app