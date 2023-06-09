const { findLocation } = require("../controller/location.controller")



module.exports = function (app) {
    app.get('/find/location', findLocation)
}