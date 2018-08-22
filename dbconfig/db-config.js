let mongoose = require('mongoose')
const connectionString = 'mongodb://student:student1@ds018508.mlab.com:18508/pizzashack'
let connection = mongoose.connection


mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.log("DATABASE ERROR: ", err)
})


connection.once('open', () => {
  console.log("Connected to Database")
})