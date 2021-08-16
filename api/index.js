import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/Auth.js";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongodb is connected"))
  .catch((error) => console.log(error));

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("back end is running");
});
