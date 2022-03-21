const Database = require('better-sqlite3');
const db = new Database('./data.db', { verbose: console.log });

const databaseMethods = {
  initTables(tables) {
    tables.forEach(table => {
      const createTables = db.prepare(table);
      createTables.run()
    })
  },
  initDB() {
    return db;
  }
}

module.exports = databaseMethods;