import express from "express";
const router = express.Router();
import usersRouter from "./users.js";
import transactionRoutes from "./transactions.js";

router.use("/users", usersRouter);
router.use("/transactions", transactionRoutes);
router.use("/*", (req, res) => {
  res.status(404).send();
});

export default router;
