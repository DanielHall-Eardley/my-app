/* 
  pageName is used to retrieve the bundled js and css.
  title is the document title displayed it the page tab
*/
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
