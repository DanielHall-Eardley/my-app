const blog = `
  CREATE TABLE IF NOT EXISTS breakthru (
    title VARCHAR(50) NOT NULL,
    date TIMESTAMP NOT NULL,
    readtime SMALLINT
  )
`

module.exports = blog;