import { Sequelize } from "sequelize";

const db = new Sequelize("safetytraffic", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default db;

