const employer = `
  CREATE TABLE IF NOT EXISTS main_project (
    employer_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL,
    address TEXT,
    phone_number SMALLINT
  )
`

module.exports = employer;