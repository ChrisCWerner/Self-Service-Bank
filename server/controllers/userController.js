import userServices from "../services/users.js";

const find = async (req) => {
  return await userServices.find(req.params);
};

const balance = async (req) => {
  return userServices.balance(req.params);
};

const createTransaction = async (req) => {
  const { user, type } = req.params;
  const { value, currency } = req.body;
  return await userServices.createTransaction({ user, type, value, currency });
};

export default {
  find,
  balance,
  createTransaction,
};
