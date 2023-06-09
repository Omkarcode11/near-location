const { createStudent } = require("../controller/student.controller")



module.exports = function(app){
    app.post('/user/create',createStudent)
}