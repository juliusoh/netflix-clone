import express from "express";
const router = express.Router();
import Movie from "../models/Movie.js";
import verify from "../verifyToken.js";

//Create New Movie
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);

    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (error) {}
  } else {
    res.status(403).json("You are not admin");
  }
});

// Update new Movie
router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedMovie);
    } catch (error) {}
  } else {
    res.status(403).json("You are not admin");
  }
});

// Delete the new movie
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("Movie has been deleted");
    } catch (error) {}
  } else {
    res.status(403).json("You are not admin");
  }
});

// Get any movie
router.get("/find/:id", verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {}
});

// Get featured/popular movie
router.get("/random", verify, async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        {
          $sample: { size: 1 },
        },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        {
          $sample: { size: 1 },
        },
      ]);
    }
    res.status(200).json(movie);
  } catch (error) {}
});

//GET ALL

router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies.reverse());
    } catch (error) {}
  } else {
    res.status(403).json("You are not admin");
  }
});

export default router;
