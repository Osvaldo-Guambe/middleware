import "dotenv/config";
import { type Dialect, Sequelize } from "sequelize";

const dbName = process.env.DB_NAME || "clicapps_middleware";
const dbUser = process.env.DB_USER || "root";
const dbHost = (process.env.DB_HOST as string) || "54.242.92.115";
const dbDriver = (process.env.DB_DRIVER as Dialect) || "mysql";
const dbPassword = process.env.DB_PASSWORD || " v2a8l0d5o1f";

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "mysql",
});

// sequelizeConnection.sync({ alter: true });
sequelizeConnection.sync(); // This will create new table if does not existed

export default sequelizeConnection;
