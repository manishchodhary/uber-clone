import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();

import connectDB from "./src/config/db.js";

const app = express();

app.use(cors({ origin: process.env.URL }));
app.use(express.json());

connectDB()
.then(() => {
  app.get("/", (req, res) => {
    res.send("hello world");
  });
});
export default app;
