const mainProject = `
  CREATE TABLE IF NOT EXISTS main_project (
    id UUID PRIMARY KEY NOT NULL,
    title VARCHAR(50) NOT NULL,
    start TIMESTAMP NOT NULL,
    end_project TIMESTAMP NOT NULL,
    explanation TEXT NOT NULL,
    tech_stack TEXT,
    url VARCHAR(150),
    picture VARCHAR(150),
    github VARCHAR(150),
    employer_id UUID NOT NULL REFERENCES employer(id),
    accomplishments TEXT[]
  )
`;

module.exports = mainProject;
