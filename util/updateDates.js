function createDateString(date, options) {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString("en-CA", options);
  return formattedDate;
}

function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
  };

  return createDateString(date, options);
}

function formatBlogDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return createDateString(date, options);
}

function updateBlogDate(blog) {
  const formattedDate = formatBlogDate(blog.date);

  return {
    ...blog,
    date: formattedDate,
  };
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

function updateMultipleDates(array, cb) {
  if (!array || array.length === 0) return [];

  const updatedProjects = array.map((object) => {
    //excute date formatting fn
    return cb(object);
  });

  return updatedProjects;
}

module.exports = {
  updateProjectObject,
  updateBlogDate,
  updateMultipleDates,
};
