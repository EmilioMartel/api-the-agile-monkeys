import { Schema, model } from "mongoose";

export const ROLES = ["user", "admin"];

const rolesSchema = new Schema({
    name: String
}, {
    versionKey:false
});

export default model("Role", rolesSchema);