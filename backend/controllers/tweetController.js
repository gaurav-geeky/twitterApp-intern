
const TweetModel = require('../models/TweetModel');
const UserModel = require('../models/UserModel');

const createTweet = async (req, res) => {
    try {
        const { description, id } = req.body;
        if (!description || !id) {
            return res.status(401).json({
                msg: "fields are required.",
                success: false
            });
        }
        const tweet = await TweetModel.create({
            description,
            userId: id
        })
        return res.status(201).json({
            msg: "Tweet created successfully.",
            success: true,
            tweet
        })
    }
    catch (error) {
        console.log(error);
    }
}

const deleteTweet = async (req, res) => {
    try {
        const { id } = req.params;
        const deletetweet = await TweetModel.findByIdAndDelete(id);
        return res.status(200).json({
            msg: "Tweet deleted successfully.",
            success: true,
        })

    } catch (error) {
        console.log(error);
    }
}

const likeOrDislike = async (req, res) => {
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;
        const tweet = await TweetModel.findById(tweetId);

        if (tweet.like.includes(loggedInUserId)) {
            // dislike
            await TweetModel.findByIdAndUpdate(tweetId, { $pull: { like: loggedInUserId } });
            return res.status(200).json({
                msg: "User disliked you tweet.",
            });
        }
        else {
            //like
            await TweetModel.findByIdAndUpdate(tweetId, { $push: { like: loggedInUserId } })
            return res.status(200).json({
                msg: "User liked you tweet.",
            })
        }
    }
    catch (error) {
        console.log(error);
    }
}

const GetAllTweets = async (req, res) => {
    // loggedin user tweet + following user tweet. 

    try {
        const id = req.params.id;
        const loggedInUser = await UserModel.findById(id);
        const loggedInUserTweets = await TweetModel.find({ _id: id });

        const followingusertweets = await Promise.all(loggedInUser.following.map((otherUserId) => {
            return TweetModel.find({ userId: otherUserId }); 
        })); 
        return res.status(200).json({
            tweets: loggedInUserTweets.concat(...followingusertweets)
        })
    }
    catch (error) {
        console.log(error)
    }
}



module.exports = {
    createTweet,
    deleteTweet,
    likeOrDislike,
    GetAllTweets,


}