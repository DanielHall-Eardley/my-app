const { Pool } = require("pg");
const password = process.env.DB_PASSWORD;
const connectionString = `postgresql://postgres:${password}@db.dihrbzcrqzorpnqtimae.supabase.co:5432/postgres`;
const pool = new Pool({ connectionString });

/* 
  Create an object with the following structure
  {
    [tableName]: [array of rows]
  }
*/
function createDataObject(rawDbResult, tables) {
  const data = {};

  for (let i = 0; i < tables.length; i += 1) {
    const tableName = tables[i];
    const dbRows = rawDbResult[i];
    data[tableName] = dbRows;
  }

  return data;
}

const databaseMethods = {
  async initTables(tables, database = pool) {
    tables.forEach((table) => {
      database.query(table);
    });
  },
  async insert(sql, params, database = pool) {
    const result = await database.query(sql, params);
    return result;
  },
  async query(sql, params, database = pool) {
    const result = await database.query(sql, params);
    return result.rows;
  },
  async queryOne(sql, params, database = pool) {
    const result = await database.query(sql, params);
    return result.rows[0];
  },
  async getOneTable(table) {
    const query = `
      SELECT * from ${table}
      `;

    return this.query(query);
  },
  async getAllData(tables) {
    const promises = tables.map((table) => {
      return this.getOneTable(table);
    });

    const result = await Promise.all(promises);
    const data = createDataObject(result, tables);
    return data;
  },
};

module.exports = databaseMethods;
