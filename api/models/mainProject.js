const mainProject = `
  CREATE TABLE IF NOT EXISTS main_project (
    title VARCHAR(50) NOT NULL,
    start TIMESTAMP NOT NULL,
    end TIMESTAMP NOT NULL,
    explanation TEXT NOT NULL,
    tech_stack TEXT[],
    url VARCHAR(150),
    github VARCHAR(150),
    employer_id UUID NOT NULL REFERENCES employer(employer_id),
    accomplishments TEXT
  )
`

module.exports = mainProject;