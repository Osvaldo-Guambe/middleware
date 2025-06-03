import { Express } from "express";
import fliRouter from "../routers/flight-router";

export default (app: Express): void => {
  app.use("/api/", fliRouter);
};
