import express from "express";
// import cors from cors
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routers/user.route.js";
import authRoutes from "./routers/auth.route.js";
import postRoutes from "./routers/post.route.js";
import commentRoutes from "./routers/comment.route.js";
import cookieParser from "cookie-parser";
import path from "path";

const PORT = 4000;
// middelware
dotenv.config();
const app = express();
app.use(express.json());

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MONGODB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });
const __dirname = path.resolve();
// routers
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

//  listering port
app.listen(PORT, () => {
  console.log(`Server Connected by the port number ${PORT}`);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
// middleware error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
