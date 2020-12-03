import userServices from "../services/users.js";

const find = async (req) => {
  return await userServices.find(req.params);
};

const balance = async (req) => {
  return userServices.balance(req.params);
};

const createTransaction = async (req) => {
  return await userServices.createTransaction(req.body);
};

export default {
  find,
  balance,
  createTransaction
};
