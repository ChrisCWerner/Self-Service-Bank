import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";

import routes from "./routes/index.js";

const app = express();

app.use(bodyParser.json());

app.use(routes);

console.log(process.env.PORT);
const PORT = process.env.PORT || 3072;

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
