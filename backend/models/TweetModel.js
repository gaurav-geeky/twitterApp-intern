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
    }, 
    userDetails: {
        type: Array, 
        default: []
    }
}, {timestamps: true}); 

module.exports = mongoose.model("Tweet", TweetSchema); 
