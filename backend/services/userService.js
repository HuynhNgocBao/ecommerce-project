const User = require("../models/User");

async function getUserService(id){
    const user = await User.findById(id).select("name email");
    if (user){
        return user;
    }
    else return null;
}

module.exports = {getUserService};