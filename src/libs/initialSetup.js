import Role from '../models/Role';
import User from "../models/User";
import bcrypt from "bcryptjs";

export const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount();
        if (count > 0) return;
    
        const values = await Promise.all([
            new Role({ name: 'admin' }).save(),
            new Role({ name: 'user' }).save()
        ])

        console.log(values);
    } catch (error) {
        console.error(error);
    }
};

export const createAdmin = async () => {
    // check for an existing admin user
    const user = await User.findOne({ email: "admin@theagilemonkeys.com" });
    // get roles _id
    const roles = await Role.find({ name: { $in: ["admin", "user"] } });
  
    if (!user) {
      // create a new admin user
      await User.create({
        username: "admin",
        email: "admin@theagilemonkeys.com",
        password: await bcrypt.hash("admin", 10),
        roles: roles.map((role) => role._id),
      });
      console.log('Admin User Created!')
      console.log(roles.map((role) => role._id));
    }
};