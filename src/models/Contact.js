import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    isNigerian: {
      type: Boolean,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.Contact ||
  mongoose.model("Contact", ContactSchema);
