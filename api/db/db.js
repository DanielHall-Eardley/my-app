const { Pool } = require("pg");
const password = process.env.DB_PASSWORD;
const connectionString = `postgresql://postgres:${password}@db.dihrbzcrqzorpnqtimae.supabase.co:5432/postgres`;
const pool = new Pool({ connectionString });

const databaseMethods = {
  async initTables(tables) {
    tables.forEach((table) => {
      pool.query(table);
    });
  },
  async query(sql, params) {
    const result = await pool.query(sql, params);
    return result.rows;
  },
  async queryOne(sql, params) {
    const result = await pool.query(sql, params);
    return result.rows[0];
  },
};

module.exports = databaseMethods;
