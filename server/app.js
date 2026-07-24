import express from "express";
import cors from "cors";

import { config } from "dotenv";

import userRoutes from "./src/routes/user.route.js";
import captainRoutes from "./src/routes/capatian.route.js";
import mapRoutes from "./src/routes/map.route.js";
import connectDb from "./src/config/db.js";

config();

const app = express();

app.use(
  cors({
    origin: process.env.URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/captains", captainRoutes);
app.use("/api/v1/maps", mapRoutes);

connectDb().then(() =>
  app.get("/", (req, res) => {
    res.send("hello world");
  }),
);

export default app;
