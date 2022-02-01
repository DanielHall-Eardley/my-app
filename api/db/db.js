const sqlite3 = require('sqlite3');
sqlite3.verbose();
const db = new sqlite3.Database('./data.db');

const databaseMethods = {
  initTables(tables) {
    tables.forEach(table => {
      db.run(table, [], err => {
        if (err) {
          console.error(err);
        }
      });
    })
  },
  initDB() {
    return db;
  }
}

module.exports = databaseMethods;