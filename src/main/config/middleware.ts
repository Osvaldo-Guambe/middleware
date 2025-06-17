import { type Express } from "express";
import { bodyParser, helmetApp, morganApp } from "../middlewares";
import { corsApp } from "../middlewares/cors";
import { v4 as uuidv4 } from "uuid";

export default (app: Express): void => {
  app.use(bodyParser);
  app.use(corsApp);
  app.use(helmetApp);
  app.use(morganApp);
  app.use((req, res, next) => {
    res.setHeader("X-Request-ID", uuidv4());
    next();
  });
};
