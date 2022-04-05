const breakThruTable = `
  CREATE TABLE IF NOT EXISTS breakthru (
    id UUID PRIMARY KEY NOT NULL,
    title VARCHAR(50) NOT NULL,
    date TIMESTAMP NOT NULL,
    content TEXT NOT NULL,
    mind_blown_rating SMALLINT
  )
`;

module.exports = breakThruTable;
