import { Users } from "../mocks.js";
import transactionController from "./transactions.js";
import Err from "../utils/error.js";
import transactionTypes from "../utils/transactionTypes.js";

class UserController {
  async findUser({ id }) {
    if (!id) return Err({ status: 400, message: "Invalid id" });
    // simulando query pro bd...
    let user = await Users.find((user) => user.id === id);
    if (!user) throw Err({ status: 404, message: "User not found" });
    return user;
  }

  async balance({ id }) {
    if (!id) return Err({ status: 400, message: "Invalid id" });
    let user = await this.findUser(id);
    if (!user.account) throw Err({ status: 404, message: "Account not found" });
    return user.account;
  }

  async createTransaction(payload) {
    const { user, type, value, currency } = payload;
    if (!user || !transactionTypes.includes(type) || !value || !currency)
      throw Err({ status: 400, message: "Invalid transaction" });

    const userData = await this.findUser(user);

    if (!userData) throw Err({ status: 404, message: "User not found" });
    if (userData.account.currency !== currency)
      throw Err({ status: 400, message: "Invalid currency" });

    if (type === "deposit") {
      userData.account.balance += value;
    } else if (userData.account.balance < value) {
      throw Err({ status: 400, message: "Not enough funds" });
    } else {
      userData.account.balance -= value;
    }

    await transactionController.createTransaction({
      user,
      type,
      value,
      currency,
    });
    return userData;
  }
}

const userController = new UserController();
export default userController;
