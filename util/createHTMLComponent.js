/* 
  Use this structure for creating html components
  [
    {
      name: "html element",
      attributes: [
        { att: "attribute name", value: "attribute value"}
      ],
      content: "inner text"
      children: [
        repeat Object
      ]
    }
  ]
*/

exports.createHTMLContent = function (compStructure) {
  const parent = new DocumentFragment()
}