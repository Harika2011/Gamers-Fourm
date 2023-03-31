let mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0/GamersForum')
    .then(function() {
        console.log('Database Connected')
    })
    .catch(function(err) {
        console.log(err)
    })
let UserSchema = mongoose.Schema({
    gamename: String,
    review: String
})
module.exports = mongoose.model('user', UserSchema)