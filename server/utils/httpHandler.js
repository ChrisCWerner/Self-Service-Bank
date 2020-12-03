import Catcher from "./errorHandler.js";

const httpHandler = (controller) => async (req, res) => {
  Catcher(async () => {
    const ret = await controller(req);
    res.status(200).send(ret);
  }, (err) => {
    res.status(err.status || 500).send(err);
  });
};

export default httpHandler;
