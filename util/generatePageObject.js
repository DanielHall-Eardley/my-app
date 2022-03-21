exports.generatePageObject = function (pageName, title, content = {}) {
  const data = {
    pageInfo: {
      title,
      pageName,
    },
    content,
  };

  return data;
};
