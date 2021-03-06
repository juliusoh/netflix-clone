import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/Auth.js";
import userRoute from "./routes/Users.js";
import movieRoute from './routes/Movies.js';
import listRoute from './routes/List.js';
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
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute)
app.use("/api/lists", listRoute)

app.listen(8800, () => {
  console.log("back end is running");
});
