import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";

export const signUp = async (req, res) => {

    const { username, email, password, roles } = req.body;
    
    const newUser = new User ({
        username,
        email,
        password: await User.encryptPassword(password),
    })

    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } });
        newUser.roles = foundRoles.map(role => role._id);
    } else {
        const defaultRole = await Role.findOne({ name: "user" });
        newUser.roles = [defaultRole._id];
    }

    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, { expiresIn: 86400 });

    res.status(200).json({token});
}

export const signIn = async (req, res) => {
    // sign in user
}