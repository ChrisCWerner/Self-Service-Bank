import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";

import usersRouter from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use("/", indexRouter);
app.use("/users", usersRouter);

console.log(process.env.PORT);
const PORT = process.env.PORT || 3072;

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
