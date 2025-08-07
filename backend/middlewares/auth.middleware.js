const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const blacklistTokenModel = require('../models/blacklistToken.model')
const captainModel = require('../models/captain.model')


// to check user authenticate or not
module.exports.authUser = async (req, res, next) => {
    // get token from header or from cookies

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    // if no token found, return response without user
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await userModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // decode token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // return id of user
        const user = await userModel.findById(decoded._id);      // find user by id

        req.user = user;  // set user in req object

        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

// to check captain authenticate or not
module.exports.authCaptain = async (req, res, next) => {
    // get token from header or from cookies
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    // if no token found, return response without user
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // decode token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);     // return id of user
        const captain = await captainModel.findById(decoded._id);      // find user by id

        if (!captain) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.captain = captain;
        return next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}
