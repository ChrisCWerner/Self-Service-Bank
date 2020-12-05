import { Users } from "../mocks.js";
import transactionServices from "./transactions.js";
import Err from "../utils/error.js";
import transactionTypes from "../utils/transactionTypes.js";

class UserServices {
  async find({ id }) {
    if (!id) return Err({ status: 400, message: "Invalid id" });
    // simulando query pro bd...
    let user = await Users.find((user) => user.id === id);
    if (!user) throw Err({ status: 404, message: "User not found" });
    return user;
  }

  async balance({ id }) {
    if (!id) return Err({ status: 400, message: "Invalid id" });
    let user = await this.find({ id });
    if (!user.account) throw Err({ status: 404, message: "Account not found" });
    return user.account;
  }

  async createTransaction(payload) {
    const { user, type, value, currency } = payload;
    console.log(payload);
    if (!user || !transactionTypes.includes(type) || isNaN(value) || !currency)
      throw Err({ status: 400, message: "Invalid transaction" });

    const userData = await this.find({ id: user });

    if (!userData.id) throw userData;
    if (userData.account.currency !== currency)
      throw Err({
        status: 400,
        message: "Invalid currency, expected " + userData.account.currency,
      });

    if (type === "deposit") {
      userData.account.balance += Number(value);
    } else if (userData.account.balance < Number(value)) {
      throw Err({ status: 400, message: "Not enough funds" });
    } else {
      userData.account.balance -= Number(value);
    }

    await transactionServices.create({
      user,
      type,
      value,
      currency,
    });
    return userData;
  }
}

const userServices = new UserServices();
export default userServices;
