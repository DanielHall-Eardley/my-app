const sideProjects = `
  CREATE TABLE IF NOT EXISTS side_project (
    title VARCHAR(50) NOT NULL,
    explanation TEXT NOT NULL,
    tech_stack VARCHAR(30)[],
    links VARCHAR(80)[],
  )
`

module.exports = sideProjects;