const employer = `
  CREATE TABLE IF NOT EXISTS employer (
    employer_id UUID PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    address TEXT,
    phone_number SMALLINT
  )
`

module.exports = employer;