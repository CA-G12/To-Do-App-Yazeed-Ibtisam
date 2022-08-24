const { Pool } = require("pg");
require("dotenv").config();

const { DB_URL } = process.env;

if (!DB_URL) {
  throw new Error("The database is not found");
}

const connection = new Pool({
  connectionString: DB_URL,
  ssl: new URL(DB_URL).hostname == "localhost" ? false : true,
});

module.exports = { connection };
