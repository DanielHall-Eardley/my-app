const breakThruTable = `
  CREATE TABLE IF NOT EXISTS breakthru (
    title VARCHAR(50) NOT NULL,
    date TIMESTAMP NOT NULL,
    content TEXT NOT NULL,
    mind_blown_rating SMALLINT
  )
`

module.exports = breakThruTable;