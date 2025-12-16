const UserModel = require('../models/UserModel');
const userModel = require('../models/UserModel');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userRegister = async (req,
    res) => {

    try {
        console.log(req.body);
        const { name, username, email, password } = req.body;

        // basic validation
        if (!name || !username || !email || !password) {
            return res.status(401).json({
                msg: "All fields are required.",
                success: false
            })
        }

        const user = await userModel.findOne(email);
        if (!user) {
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
        })
        return res.status(201).json({
            msg: "Account created successfully.",
            success: true
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
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            })
        }
        const isMatch = await bcrypt.compare(user.password, password);
        if (!isMatch) {
            return res.status(401).json({
                msg: "Incorred email or bcrypt_password",
                success: false,
            })
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
        const user = await userModel.findById(id); 

        return res.status(200).json({
            user,
        })
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
    


}