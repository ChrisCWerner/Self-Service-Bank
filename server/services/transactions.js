import { Transactions } from "../mocks.js";
import Err from "../utils/error.js";
import transactionTypes from "../utils/transactionTypes.js";

class TransactionController {
  async findTransaction({ id }) {
    if (!id) return Err({ status: 400, message: "Invalid id" });
    // simulando query pro bd...
    let transaction = await Transactions.find(
      (transaction) => transaction.id === id
    );
    if (!transaction)
      throw new Err({ status: 404, message: "Transaction not fount" });
    return transaction;
  }

  async findUserTransactions({ user }) {
    if (!user) return Err({ status: 400, message: "Invalid user id" });
    // simulando query pro bd...
    let transaction = await Transactions.filter(
      (transaction) => transaction.user === user
    );
    if (!transaction.length)
      throw new Err({ status: 404, message: "Transaction not fount" });
    return transaction;
  }

  async createTransaction(payload) {
    const { user, type, value, currency } = payload;
    if (!user || !transactionTypes.includes(type) || !value || !currency)
      return Err({ status: 400, message: "Invalid transaction" });
    const id = (Transactions.length + 1).toString();
    const data = { user, type, value, currency, id, timestamp: Date.now() };
    await Transactions.push(data);
    return data;
  }
}

const transactionController = new TransactionController();
export default transactionController;
