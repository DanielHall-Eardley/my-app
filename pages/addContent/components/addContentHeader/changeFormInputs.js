const { createHTMLComponent } = require('../../../../util/createHTMLComponent'); 

function changeFormUrl (form, contentType) {
  const newFormUrl = `/content/create/${contentType}`;
  form.action = newFormUrl;
  form.removeAttribute('enctype');
  return form;
}

exports.changeFormInputs = function (newInputs, contentType) {
  const form = document.querySelector('form');
  const newForm = changeFormUrl(form, contentType)
  const newFormInputs = createHTMLComponent(newInputs);
  newForm.innerText = '';
  newForm.append(newFormInputs);
}