const sideProjects = `
  CREATE TABLE IF NOT EXISTS side_project (
    id UUID NOT NULL,
    title VARCHAR(50) NOT NULL,
    explanation TEXT NOT NULL,
    tech_stack TEXT[],
    url VARCHAR(150),
    github VARCHAR(150),
    picture VARCHAR(150)
  )
`;

module.exports = sideProjects;
