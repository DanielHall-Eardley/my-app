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
          for: 'sideProjectTitle'
        },
        content: 'Enter a title'
      },
      {
        name: 'input',
        attributes: {
          id: 'sideProjectTitle',
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
          for: 'sideProjectExplanation'
        },
        content: 'Describe the project'
      },
      {
        name: 'textarea',
        attributes: {
          id: 'sideProjectExplanation',
          name: 'explanation'          
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
          for: 'sideProjectTech'
        },
        content: 'Enter comma seperated list of tech'
      },
      {
        name: 'input',
        attributes: {
          id: 'sideProjectTech',
          name: 'tech_stack',
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
          for: 'sideProjectUrl'
        },
        content: 'Enter app url'
      },
      {
        name: 'input',
        attributes: {
          id: 'sideProjectUrl',
          name: 'url',
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
          for: 'sideProjectGithub'
        },
        content: 'Enter app github url'
      },
      {
        name: 'input',
        attributes: {
          id: 'sideProjectGithub',
          name: 'github',
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