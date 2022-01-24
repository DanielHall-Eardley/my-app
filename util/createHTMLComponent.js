/* 
  Use this structure for creating html components
  [
    {
      name: "html element",
      attributes: [
        { attName: "attribute name", attValue: "attribute value"}
      ],
      content: "inner text"
      children: [
        repeat Object
      ]
    }
  ]
*/

function addAttributesToElement (htmlELement, attributes) {
  const newHtmlElement = htmlELement;

  if (attributes && attributes.length > 0) {
    attributes.forEach(obj => {
      const { attName, attValue} = obj;
      newHtmlElement.setAttribute(attName, attValue);
    })
  }

  return newHtmlElement;
}

function addTextToElement (htmlELement, text) {
  const escapedText = document.createTextNode(text);
  htmlELement.innerText = escapedText
  return htmlELement;
}

exports.createHTMLComponent = function (compStructure) {
  const component = new DocumentFragment();

  function recursive (elementStructure) {
    elementStructure.forEach(obj => {
      const { name, attributes, content, children } = obj;
      const htmlElement = document.createElement(name);
      const htmlElementAtt = addAttributesToElement(htmlElement, attributes);
      const htmlElementText = addTextToElement(htmlElementAtt, content);
      component.append(htmlElementText);
  
      if (children && children.length > 0) {
        recurse(children)
      }
    })
  }
  
  recursive(compStructure);
  return component;
}