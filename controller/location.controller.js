const Student = require("../models/Student")


exports.findLocation = async (req, res) => {
    try {

        let directions = req.query
        const students = await Student.find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [directions.longitude, directions.latitude]
                    },
                    $maxDistance: directions.distance
                }
            }
        })

        if (students.length) {
            return res.status(200).send(students)
        } else {
            return res.status(404).send("Not Found Any Students")
        }
    } catch (err) {
        return res.status(500).send(err)
    }
}