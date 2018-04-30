const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    gameNumber: {
        type: Number,
        required: true,
    },
    winner: {
        type: String
    },
    moves: [{
        row: {
            type: Number,
            required: true
        },
        column: {
            type: Number,
            required: true
        }
    }]
})

module.exports = mongoose.model('Game', gameSchema)
