module.exports = [
  {
    name: 'div',
    attributes: {
      class: 'inputContainer_noScoped'
    },
    children: [
      {
        name: 'label',
        attributes: {
          for: 'ahaMomentTitle'
        },
        content: 'Enter a title'
      },
      {
        name: 'input',
        attributes: {
          id: 'ahaMomentTitle',
          name: 'title',
          type: 'text'
        }            
      }
    ]
  },
  {
    name: 'div',
    attributes: {
      class: 'inputContainer_noScoped'
    },
    children: [
      {
        name: 'label',
        attributes: {
          for: 'ahaMomentContent'
        },
        content: 'Share your breakthru'
      },
      {
        name: 'textarea',
        attributes: {
          id: 'ahaMomentContent',
          name: 'content'          
        },
      }
    ]
  },
  {
    name: 'div',
    attributes: {
      class: 'inputContainer_noScoped'
    },
    children: [
      {
        name: 'label',
        attributes: {
          for: 'ahaomentDate'
        },
        content: 'Enter the date'
      },
      {
        name: 'input',
        attributes: {
          id: 'ahaMomentDate',
          name: 'date',
          type: 'date'
        }
      }
    ]
  },
  {
    name: 'div',
    attributes: {
        class: 'inputContainer_noScoped'
    },
    children: [
      {
        name: 'label',
        attributes: {
          for: 'ahaMomentRating'
        },
        content: 'How much did this affect your coding?'
      },
      {
        name: 'input',
        attributes: {
          id: 'ahaMomentRating',
          name: 'mind_blown_rating',
          type: 'number'
        }
      }
    ]
  },
  {
    name: 'button',
    content: 'Submit'
  }
]
