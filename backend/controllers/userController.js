const User = require('../models/User');

async function getUser(req,res){
    const user = await User.findById(req.auth).select("name email");
    if (user){
        res.status(200).json({
            name: user.name,
            email: user.email,
        })
    }
    else{
        res.status(400);
        throw new Error("User not found");
    }
}

module.exports = {getUser};