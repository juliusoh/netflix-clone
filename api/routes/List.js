import express from "express";
const router = express.Router();
import List from "../models/List.js";
import verify from "../verifyToken.js";

//Create New List
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);

    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (error) {
      res.status(500).json.log(error);
    }
  } else {
    res.status(403).json("You are not admin");
  }
});

//delete New List
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    await List.findByIdAndDelete(req.params.id);
    res.json(200).json("List has been deleted");
    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (error) {
      res.status(500).json.log(error);
    }
  } else {
    res.status(403).json("You are not admin");
  }
});

// get all lists

router.get("/", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];

  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          {
            $sample: { size: 10 },
          },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          {
            $sample: { size: 10 },
          },
          { $match: { type: typeQuery } },
        ])
      }
    } else {
      list = await List.aggregate([
        {
          $sample: { size: 10 },
        },
      ]);
    }
    res.status(200).json(list)
  } catch (error) {
    res.status(500).json.log(error);
  }
});

export default router;
