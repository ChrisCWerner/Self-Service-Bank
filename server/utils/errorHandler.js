const Catcher = async (fn, handler) => {
  try {
    await fn();
  } catch (err) {
    console.error(err);
    handler(err);
  }
};

export default Catcher;
