import express from "express";
import setupMiddlewares from "./middleware";
import setupRouter from "./routes";

const app = express();
setupMiddlewares(app);
setupRouter(app);

export default app;
