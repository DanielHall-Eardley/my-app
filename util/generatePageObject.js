/* 
  pageName is used to retrieve the bundled js and css.
  title is the document title displayed it the page tab
*/
exports.generatePageObject = function (
  pageName,
  title,
  dbToken = null,
  content = {}
) {
  const data = {
    pageInfo: {
      title,
      pageName,
    },
    content,
    dbToken,
  };

  return data;
};
