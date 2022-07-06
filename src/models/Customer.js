import { Schema, model } from "mongoose";

const customerSchema = new Schema(
  {
    name: String,
    surname: String,
    imgURL: String,
    createdBy: String,
    updatedBy: String,
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Customer", customerSchema);