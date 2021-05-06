const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    releaseDate: {
      type: Date,
    },
    rating: {
      type: Number,
    },
    imageUrl: {
      type: String,
    },
    studio: {
      type: String,
      enum: ["marvel", "dc"],
    },
    tag: {
      type: String,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("Movie", movieSchema);
