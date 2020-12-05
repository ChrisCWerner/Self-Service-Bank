export const Users = [
  {
    id: "78",
    nickname: "Chris",
    fullName: "Christian Werner",
    avatar: "chris.jpg",
    email: "ccwerner96@gmail.com",
    birthdate: "1996-11-08",
    account: {
      id: "0001",
      balance: 104.24,
      currency: "BRL",
      created_at: new Date(2020, 11, 8),
      updated_at: new Date(2020, 11, 2),
    },
    created_at: new Date(2020, 10, 8),
    updated_at: new Date(2020, 11, 2),
  },
];


export const Transactions = [
  {
    id: "1",
    user: "78",
    type: "deposit",
    value: 233,
    currency: "BRL",
    timestamp: new Date(2020, 10, 22),
  },
  {
    id: "2",
    user: "78",
    type: "redemption",
    value: 12.9,
    currency: "BRL",
    timestamp: new Date(2020, 10, 22),
  },
  {
    id: "3",
    user: "78",
    type: "payment",
    value: 57.64,
    currency: "BRL",
    timestamp: new Date(2020, 10, 25),
  },
  {
    id: "4",
    user: "78",
    type: "payment",
    value: 58.22,
    currency: "BRL",
    timestamp: new Date(2020, 10, 25),
  },
];

