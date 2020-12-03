import transactionController from "../services/transactions.js";

const find = async (req) => {
  return await transactionController.find(req.params);
};

const userTransactions = async (req) => {
  return transactionController.userTransactions(req.params);
};

// const createTransaction = async (req) => {
//   return await transactionController.createTransaction(req.body);
// };

export default {
  find,
  userTransactions,
  // createTransaction,
};
