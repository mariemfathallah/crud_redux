const mongoose = require("mongoose")
const URLMONGODB = "mongodb://localhost:27017/usersDetails"

mongoose.connect(URLMONGODB).then(()=>console.log('DataBase Successfully Connected '))
.catch(err=>console.log('failed to connect',err))