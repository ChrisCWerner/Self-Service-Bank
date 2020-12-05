import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(routes);

const PORT = process.env.PORT || 3072;

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
