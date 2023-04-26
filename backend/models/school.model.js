const mongoose = require('mongoose');
const SchoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: [true, "Please enter name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      minlength: 5,
      maxlength: 255
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      select: false,
      minlength: [6, "Your password must be longer than six characters"],
    },
    address: {
      type: String,
      required: [true, "Please enter address"],
    },
    city: {
      type: String,
      required: [true, "Please enter city"],
    },
    state: {
      type: String,
      required: [true, "Please enter state"],
    },
    country: {
      type: String,
      required: [true, "Please enter country"],
    },
    zip: {
      type: String,
      required: [true, "Please enter zip"],
    },
    website: {
      type: String,
      required: [true, "Please enter website url"],
    },
    logo: {
      type: String,
      required: [true, "Please enter logo url"],
    },
    total_trees: {
      type: Number,
    },
  },
  {
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    },
    timestamps: true
  }
);

const School = mongoose.model('School', SchoolSchema);

module.exports = School;
