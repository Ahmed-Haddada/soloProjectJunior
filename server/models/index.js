const dotenv = require("dotenv");
const { Sequelize, DataTypes } = require("sequelize");

dotenv.config({ path: "./config.env" });

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbNAME = process.env.DB_NAME;
const dbDIALECT = process.env.DIALECT;

const sequelize = new Sequelize(dbNAME, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDIALECT,
});

sequelize
  .authenticate()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Unable to connect to the database:", err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./user_model.js")(sequelize, DataTypes);
db.products = require("./products_model.js")(sequelize, DataTypes);
db.admin = require("./admin_model.js")(sequelize, DataTypes);
db.dotenv = dotenv;

// db.user.hasMany(db.products, { foreignKey: "userId" });
// db.products.belongsTo(db.user, { foreignKey: "userId" });
// db.sequelize.sync({ alter: true });

module.exports = db;
