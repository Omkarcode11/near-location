const Student = require("../models/Student")



exports.createStudent = async (req, res) => {
    try {
        let user = await Student.create(req.body)
        if (user) {
            res.status(200).send("student created successfully")
        } else {
            res.status(203).send("student no created")
        }
    } catch (err) {
        res.status(500).send(err)
    }
}