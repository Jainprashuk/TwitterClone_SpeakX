import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auths.js";
import tweetRoutes from "./routes/tweets.js";
import cors from "cors"

const app = express();
dotenv.config();

app.use(cors());
app.use(cookieParser());

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect("mongodb+srv://29jainprashuk:1234@cluster0.gdzbkyc.mongodb.net/")
    .then(() => {
      console.log("connected to mongodb database");
    })
    .catch((err) => {
      console.log("Error Connecting ...");
      throw err;
    });
};


app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);

app.listen(8000, () => {
  connect();
  console.log("Listening to port 8000");
});
