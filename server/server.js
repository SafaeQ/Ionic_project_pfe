const express = require('express')

const bodyParser = require('body-parser');

require("dotenv").config();

const db = require('./connection/db')

const cors = require('cors')


const app = express()

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.use(express.static('images'));


// routes
const router = require('./routes/routes')

const userAuth_router = require('./routes/userAuth.routes')

const projectRouter = require('./routes/project.routes')

const articleRouter = require('./routes/article.routes')

const categoryRouter = require('./routes/categories.routes')


app.use('/', router)

app.use('/api', projectRouter, articleRouter, categoryRouter)

// app.use('/api', articleRouter)

app.use('/', userAuth_router)


// running my server
db().catch((err)=>{ throw err }).then(()=>{ app.listen(9900,()=>{ console.log(` 🐱The server is runnig`); }) })