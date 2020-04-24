require('dotenv').config();
const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://loan:loan@loandb:5432/loandb';
const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});
  
module.exports = { pgconn }