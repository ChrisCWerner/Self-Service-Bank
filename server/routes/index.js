import express from "express";
const router = express.Router();
import usersRouter from "./users.js";
import transactionRoutes from "./transactions.js";

router.use("/users", usersRouter);
router.use("/transactions", transactionRoutes);

export default router;
