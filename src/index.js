const express = require('express')
require('./db/mongoose')

const strengthRouter = require('./routers/strength')

const app = express()
const port = process.env.PORT || 9000

app.use(express.json())
app.use(strengthRouter)

app.listen(port, ()=>{
    console.log('server is up on port ' + port)
})