import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    imageTitle: {
      type: String,
    },
    imageSmall: {
      type: String,
    },
    trailer: {
      type: String,
    },
    video: {
      type: String,
    },
    year: {
      type: String,
    },
    genre: {
      type: String,
    },
    limit: {
      type: Number,
    },
    isSeries: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie
