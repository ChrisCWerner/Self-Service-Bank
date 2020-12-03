import Catcher from "./errorHandler.js";

const httpHandler = (controller) => (req, res) => {
  Catcher(() => {
    const ret = controller(req.body);
    res.status(200).send(ret);
  }, (err) => {
    res.status(err.status || 503).send(err);
  });
};

export default httpHandler;
