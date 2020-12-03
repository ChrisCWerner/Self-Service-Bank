import express from "express";
const router = express.Router();
import httpHandler from "../utils/httpHandler.js";
import userController from "../controllers/userController.js";

router.get("/:id", httpHandler(userController.find));
router.get("/:id/balance", httpHandler(userController.balance));
router.post("/:user/:type", httpHandler(userController.createTransaction));

export default router;
