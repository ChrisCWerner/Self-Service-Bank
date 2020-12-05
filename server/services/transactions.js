import { Transactions } from "../mocks.js";
import Err from "../utils/error.js";
import transactionTypes from "../utils/transactionTypes.js";

class TransactionServices {
  async find({ id }) {
    if (!id) return Err({ status: 400, message: "Invalid id" });
    // simulando query pro bd...
    let transaction = await Transactions.find(
      (transaction) => transaction.id === id
    );
    if (!transaction)
      throw Err({ status: 404, message: "Transaction not found" });
    return transaction;
  }

  async userTransactions({ user }) {
    if (!user) return Err({ status: 400, message: "Invalid user id" });
    // simulando query pro bd...
    let transaction = await Transactions.filter(
      (transaction) => transaction.user === user
    ).reverse();
    return transaction;
  }

  async create(payload) {
    const { user, type, value, currency } = payload;
    if (!user || !transactionTypes.includes(type) || !value || !currency)
      return Err({ status: 400, message: "Invalid transaction" });
    const id = (Transactions.length + 1).toString();
    const data = { user, type, value, currency, id, timestamp: new Date() };
    await Transactions.push(data);
    return data;
  }
}

const transactionServices = new TransactionServices();
export default transactionServices;
