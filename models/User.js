const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, minlength: 5, maxlength: 100 },
    lastname: { type: String, required: true, minlength: 5, maxlength: 100 },
    username: { type: String, require: true, min: 3, max: 20, unique: true },
    email: { type: String, require: true, max: 50, unique: true },
    password: { type: String, require: true, min: 6 },
    profilePicture: { type: String, default: "" },
    followers: { type: Array, default: [] },
    following: { type: Array, default: [] },
    isAdmin: { type: Boolean, default: false },
    description: { type: String, max: 100 },
    city: { type: String, max: 50 },
    from: { type: String, max: 50 },
    relationship: { type: Number, enum: [1, 2, 3] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
