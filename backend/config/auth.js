const jwt = require("jsonwebtoken");
require('dotenv').config();

const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies.token;
        console.log(token);
        if (!token) {
            return res.status(401).json({
                msg: "User no authenticated.",
                success: false
            })
        }
        const decode = await jwt.verify(token, process.env.TOKEN_SECRET); 
        console.log(decode);
        req.user = decode.userId; 
        next(); 
    }
    catch (error) {

    }
}

module.exports = {
    isAuthenticated
}