require('dotenv').config();
const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://loan-db:loan-db@localhost:5432/loan-db';
const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});
  
module.exports = { pgconn }