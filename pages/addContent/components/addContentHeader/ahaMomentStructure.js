module.exports = [
  {
    name: 'div',
    attributes: [
      {
        attName: 'class',
        attValue: 'inputContainer_noScoped'
      }
    ],
    children: [
      {
        name: 'label',
        attributes: [
          {
            attName: 'for',
            attValue: 'ahaMomentTitle'
          }
        ],
        content: 'Enter a title'
      },
      {
        name: 'input',
        attributes: [
          {
            attName: 'id',
            attValue: 'ahaMomentTitle'
          },
          {
            attName: 'name',
            attValue: 'title'
          },
          {
            attName: 'type',
            attValue: 'text'
          }
        ],
      }
    ]
  }
]
