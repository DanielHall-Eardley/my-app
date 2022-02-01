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
          for: 'dadHackTitle'
        },
        content: 'Enter a title'
      },
      {
        name: 'input',
        attributes: {
          id: 'dadHackTitle',
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
          for: 'dadHackContent'
        },
        content: 'Share your dad hack'
      },
      {
        name: 'textarea',
        attributes: {
          id: 'dadHackContent',
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
          for: 'dadHackDate'
        },
        content: 'Enter the date'
      },
      {
        name: 'input',
        attributes: {
          id: 'dadHackDate',
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
          for: 'dadHackCategory'
        },
        content: 'Enter a category'
      },
      {
        name: 'input',
        attributes: {
          id: 'dadHackCategory',
          name: 'category',
          type: 'text'
        }
      }
    ]
  },
  {
    name: 'button',
    content: 'Submit'
  }
]
