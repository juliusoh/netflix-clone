import express from "express";
import mongoose from "mongoose";
const app = express();
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb is connected"))
  .catch((error) => console.log(error));

app.listen(8800, () => {
  console.log("back end is running");
});
