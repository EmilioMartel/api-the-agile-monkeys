import { Schema, model } from "mongoose";

const customerSchema = new Schema(
  {
    name: String,
    surname: String,
    imgURL: String,
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Customer", customerSchema);