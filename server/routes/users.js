import express from "express";
const router = express.Router();
import httpHandler from "../utils/httpHandler.js";
import userController from "../services/users.js";

/* GET users listing. */
router.get("/users/:id", httpHandler(userController.findUser));


export default router;
