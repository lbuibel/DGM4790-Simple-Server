const path = require('path')

const express = require('express')
const app = express()

const home = require('./routes/home')
const api = require('./routes/api')

// hooking up stylesheet
app.use(express.static(path.join(__dirname, 'public',)))

app.use(api)
app.use(home)

// 404 Page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(5000)