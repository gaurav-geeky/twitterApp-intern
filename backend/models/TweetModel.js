const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    like: {
        type: Array,
        default: []
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true}); 

module.exports = mongoose.model("Tweet", TweetSchema); 
