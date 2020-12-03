const Catcher = (fn, handler) => {
  try {
    fn();
  } catch (err) {
    console.error(err);
    handler(err);
  }
};

export default Catcher;
