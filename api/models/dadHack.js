const dadHacks = `
  CREATE TABLE IF NOT EXISTS dadhack (
    title VARCHAR(50) NOT NULL,
    category VARCHAR(50),
    date DATE NOT NULL,
    content TEXT NOT NULL
  )
`

module.exports = dadHacks;