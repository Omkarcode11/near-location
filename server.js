let mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://127.0.0.1:27017/Find_Location');
const db = mongoose.connection;
db.on("error", () => {
    console.log("Error while connecting to DB");
});
db.once("open", () => {
    console.log("Connected to mongo DB");

});

require('./routes/location.routes')(app)
require('./routes/student.routes')(app)




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))