const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// pool.on("connect", () => {
//   console.log("connected to the db");
// });

const createReflectionTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      reflections(
        id UUID PRIMARY KEY,
        success TEXT NOT NULL,
        low_point TEXT NOT NULL,
        take_away TEXT NOT NULL,
        owner_id UUID NOT NULL,
        created_date TIMESTAMP,
        modified_date TIMESTAMP,
        FOREIGN KEY (owner_id) REFERENCES users (id) ON DELETE CASCADE
      )`;

  try {
    await pool.query(queryText);
  } catch (error) {
    console.log(err);
    pool.end();
  }
};

const createUserTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      users(
        id UUID PRIMARY KEY,
        email VARCHAR(128) UNIQUE NOT NULL,
        password VARCHAR(128) NOT NULL,
        created_date TIMESTAMP,
        modified_date TIMESTAMP
      )`;

  try {
    await pool.query(queryText);
  } catch (error) {
    console.log(error);
    pool.end();
  }
};

const createAllTables = () => {
  createUserTable();
  createReflectionTable();
};

// pool.on("remove", () => {
//   console.log("client removed");
//   process.exit(0);
// });

const startDatabase = async () => {
  try {
    await pool.connect();
    createAllTables();
    console.log("from the database every thing is ok");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { startDatabase, pool };

/**
 * Drop Reflection Table
 */
// const dropReflectionTable = () => {
//   const queryText = "DROP TABLE IF EXISTS reflections returning *";
//   pool
//     .query(queryText)
//     .then((res) => {
//       console.log(res);
//       pool.end();
//     })
//     .catch((err) => {
//       console.log(err);
//       pool.end();
//     });
// };
/**
 * Drop User Table
 */
// const dropUserTable = () => {
//   const queryText = "DROP TABLE IF EXISTS users returning *";
//   pool
//     .query(queryText)
//     .then((res) => {
//       console.log(res);
//       pool.end();
//     })
//     .catch((err) => {
//       console.log(err);
//       pool.end();
//     });
// };
/**
 * Create All Tables
 */
/**
 * Drop All Tables
 */
// const dropAllTables = () => {
//   dropUserTable();
//   dropReflectionTable();
// };
