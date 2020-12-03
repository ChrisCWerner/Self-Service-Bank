const Err = (err) => {
  let error = new Error(err.message);
  error = {
    ...err,
    ...error
  };
  return error;
};

export default Err;
