const UserModel = require('../models/UserModel');
const userModel = require('../models/UserModel');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require('dotenv').config();


const userRegister = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

        // basic validation
        if (!name || !username || !email || !password) {
            return res.status(401).json({
                msg: "All fields are required.",
                success: false
            });
        }
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(401).json({
                msg: "User already exist.",
                success: false,
            })
        }
        // salt value decides how much the password is to be strong
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({
            name,
            username,
            email,
            password: hashedPassword
        });
        return res.status(201).json({
            msg: "Account created successfully.", success: true, user: newUser
        })
    }
    catch (error) {
        console.log(error);
    }
}


const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                msg: "Invalid Credentials.",
                success: false
            })
        };

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);  // reqbody item = model item
        if (!isMatch) {
            return res.status(401).json({
                msg: "Incorred email or bcrypt_password",
                success: false,
            }); 
        }
        const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, { expiresIn: "1d" });

        return res.status(201).cookie("token", token, { expiresIn: "1d", httpOnly: true }).json({
            msg: `Welcome back ${user.name}`,
            success: true
        })
    }
    catch (error) {
        console.log(error);
    }
}

const userLogout = (req, res) => {
    return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
        msg: "User logged out successfully.",
        success: true
    });
}

const userBookmark = async (req, res) => {
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;

        const user = await userModel.findById(loggedInUserId);

        if (user.bookmarks.includes(tweetId)) {
            //remove 
            await userModel.findByIdAndUpdate(loggedInUserId, { $pull: { bookmarks: tweetId } });
            return res.status(200).json({
                msg: "Removed from bookmarks",
            })
        }
        else {
            // bookmark. 
            await userModel.findByIdAndUpdate(loggedInUserId, { $push: { bookmarks: tweetId } });
            return res.status(200).json({
                msg: "Saved in bookmarks",
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const userProfile = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findById(id).select("-password");

        return res.status(200).json({ user, msg: "got user profile" });
    }
    catch (error) {
        console.log(error);
    }
}

const otherUser = async (req, res) => {
    try {
        const { id } = req.params;
        const otherUsers = await userModel.find({ _id: { $ne: id } }).select("-password");
        if (!otherUsers) {
            return res.status(401).json({ msg: "currently do not have any users." })
        }
        return res.status(200).json({ otherUsers })
    }
    catch (error) {
        console.log(error)
    }
}

const Follow = async (req, res) => {
    try {
        const loggedInUserId = req.body.id;
        const userId = req.params.id;

        const loggedInUser = await UserModel.findById(loggedInUserId);  // patel
        const user = await UserModel.findById(userId);  // keshav 

        if (!user.followers.includes(loggedInUserId)) {
            await user.updateOne({ $push: { followers: loggedInUserId } });
            await loggedInUser.updateOne({ $push: { following: userId } });
        }
        else {
            return res.status(400).json({ msg: `User already followed to ${user.name}` });
        }

        return res.status(200).json({ msg: `${loggedInUser.name} just followed ${user.name}` })
    }
    catch (error) {
        console.log(error);
    }
}

const Unfollow = async (req, res) => {
    try {
        const loggedInUserId = req.body.id;
        const userId = req.params.id;

        const loggedInUser = await UserModel.findById(loggedInUserId);  // patel
        const user = await UserModel.findById(userId);  // keshav 

        if (loggedInUser.following.includes(userId)) {
            await user.updateOne({ $pull: { followers: loggedInUserId } });
            await loggedInUser.updateOne({ $pull: { following: userId } });
        }
        else {
            return res.status(400).json({ msg: `User has not followed yet.` });
        }

        return res.status(200).json({ msg: `${loggedInUser.name} just unfollow to ${user.name}` })
    }
    catch (error) {
        console.log(error);
    }
}




module.exports = {
    userRegister,
    userLogin,
    userLogout,
    userBookmark,
    userProfile,
    otherUser,
    Follow,
    Unfollow,

}