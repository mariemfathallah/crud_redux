const express = require("express")
const ConfigDB = require('./ConfigDB/ConfigDB.js')
const RoutesUser = require('./routes/userRoutes.js')
const cors = require('cors')
app = express()

app.use(express.json())
app.use(cors())



app.use('/user',RoutesUser)









ConfigDB



app.use(RoutesUser)
port = 8000 || process.env.PORT
app.listen(port,()=>{
    console.log(`app is running on port http://localhost:${port}`)
})