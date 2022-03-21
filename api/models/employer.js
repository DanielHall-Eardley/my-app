const employer = `
  CREATE TABLE IF NOT EXISTS employer (
    id UUID PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    address TEXT,
    phone_number SMALLINT
  )
`;

module.exports = employer;
