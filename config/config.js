require('dotenv').config();
const {DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_DIALECT} = process.env;

module.exports = {
  development: {
    username: "postgres",
    password: "Purwaningsih1*",
    database: "binar_challenge_4",
    host: "localhost",
    dialect: "postgres"
  }
}
