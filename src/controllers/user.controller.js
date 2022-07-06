import User from "../models/User";
import Role from "../models/Role";
import jwt from "jsonwebtoken";
import config from "../config";

export const createUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // Sets who created the user
    let token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "No token provided" });
    const decoded = jwt.verify(token, config.SECRET);
    const userLogged = await User.findById(decoded.id, { password: 0 });
    user.createdBy = userLogged._id;
    user.updatedBy = userLogged._id;
    
    // saving the new user
    const savedUser = await user.save();  

    return res.status(200).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
  }
};



export const getUserById = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId);
  res.status(200).json(user);
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  return res.json(users);
};

export const updateUserById = async (req, res) => {

  // Sets who updated the user
  let token = req.headers["x-access-token"];
  if (!token) return res.status(403).json({ message: "No token provided" });
  const decoded = jwt.verify(token, config.SECRET);
  const userLogged = await User.findById(decoded.id, { password: 0 });
  req.body.updatedBy = userLogged._id;

  const updatedUser = await User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedUser);
};

export const deleteUserById = async (req, res) => {
  const { userId } = req.params;

  await User.findByIdAndDelete(userId);

  // code 200 is ok too
  res.status(204).json();
};