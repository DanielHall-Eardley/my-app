function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
  };

  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString("en-CA", options);
  return formattedDate;
}

function updateProjectObject(project) {
  const formattedStartDate = formatDate(project.start);
  const formattedEndDate = formatDate(project.end_project);

  return {
    ...project,
    start: formattedStartDate,
    end: formattedEndDate,
  };
}

function updateMultipleProjectDates(projects) {
  if (!projects || projects.length === 0) return [];

  const updatedProjects = projects.map((project) => {
    return updateProjectObject(project);
  });

  return updatedProjects;
}

module.exports = {
  updateProjectObject,
  updateMultipleProjectDates,
};
