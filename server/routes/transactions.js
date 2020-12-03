import express from "express";
const router = express.Router();
import httpHandler from "../utils/httpHandler.js";
import transactionController from "../controllers/transactionController.js";

router.get("/user/:user", httpHandler(transactionController.userTransactions));
router.get("/:id", httpHandler(transactionController.find));

export default router;
