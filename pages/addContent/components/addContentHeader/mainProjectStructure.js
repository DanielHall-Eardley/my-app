module.exports = [
  {
    name: "div",
    attributes: {
      class: "inputContainer_noScoped",
    },
    children: [
      {
        name: "label",
        attributes: {
          for: "mainProjectTitle",
        },
        content: "Enter a title",
      },
      {
        name: "input",
        attributes: {
          id: "mainProjectTitle",
          name: "title",
          type: "text",
        },
      },
    ],
  },
  {
    name: "div",
    attributes: {
      class: "inputContainer_noScoped",
    },
    children: [
      {
        name: "label",
        attributes: {
          for: "mainProjectExplanation",
        },
        content: "Describe the project",
      },
      {
        name: "textarea",
        attributes: {
          id: "mainProjectExplanation",
          name: "explanation",
        },
      },
    ],
  },
  {
    name: "div",
    attributes: {
      class: "inputContainer_noScoped",
    },
    children: [
      {
        name: "label",
        attributes: {
          for: "mainProjectStart",
        },
        content: "Enter the start date",
      },
      {
        name: "input",
        attributes: {
          id: "mainProjectStart",
          name: "start",
          type: "date",
        },
      },
    ],
  },
  {
    name: "div",
    attributes: {
      class: "inputContainer_noScoped",
    },
    children: [
      {
        name: "label",
        attributes: {
          for: "mainProjectEnd",
        },
        content: "Enter the end date",
      },
      {
        name: "input",
        attributes: {
          id: "mainProjectEnd",
          name: "end_project",
          type: "date",
        },
      },
    ],
  },
  {
    name: "div",
    attributes: {
      class: "inputContainer_noScoped",
    },
    children: [
      {
        name: "label",
        attributes: {
          for: "mainProjectTech",
        },
        content: "Enter comma seperated list of tech",
      },
      {
        name: "input",
        attributes: {
          id: "mainProjectTech",
          name: "tech_stack",
          type: "text",
        },
      },
    ],
  },
  {
    name: "div",
    attributes: {
      class: "inputContainer_noScoped",
    },
    children: [
      {
        name: "label",
        attributes: {
          for: "mainProjectUrl",
        },
        content: "Enter app url",
      },
      {
        name: "input",
        attributes: {
          id: "mainProjectUrl",
          name: "url",
          type: "text",
        },
      },
    ],
  },
  {
    name: "div",
    attributes: {
      class: "inputContainer_noScoped",
    },
    children: [
      {
        name: "label",
        attributes: {
          for: "mainProjectGithub",
        },
        content: "Enter app github url",
      },
      {
        name: "input",
        attributes: {
          id: "mainProjectGithub",
          name: "github",
          type: "text",
        },
      },
    ],
  },
  {
    name: "div",
    attributes: {
      class: "inputContainer_noScoped",
    },
    children: [
      {
        name: "label",
        attributes: {
          for: "mainProjectAccomplishments",
        },
        content: "Show your key accomplishments",
      },
      {
        name: "textarea",
        attributes: {
          id: "mainProjectAccomplishments",
          name: "accomplishments",
          type: "text",
        },
      },
    ],
  },
  {
    name: "div",
    attributes: {
      class: "inputContainer_noScoped",
    },
    children: [
      {
        name: "label",
        attributes: {
          for: "employerName",
        },
        content: "Enter your employer's name",
      },
      {
        name: "input",
        attributes: {
          id: "employerName",
          name: "employerName",
          type: "text",
        },
      },
    ],
  },
  {
    name: "div",
    attributes: {
      class: "inputContainer_noScoped",
    },
    children: [
      {
        name: "label",
        attributes: {
          for: "employerAddress",
        },
        content: "Enter your employer's address",
      },
      {
        name: "input",
        attributes: {
          id: "employerAddress",
          name: "employerAddress",
          type: "text",
        },
      },
    ],
  },
  {
    name: "div",
    attributes: {
      class: "inputContainer_noScoped",
    },
    children: [
      {
        name: "label",
        attributes: {
          for: "employerPhoneNo",
        },
        content: "Enter your employer's phone number",
      },
      {
        name: "input",
        attributes: {
          id: "employerPhoneNo",
          name: "employerPhoneNo",
          type: "number",
        },
      },
    ],
  },

  {
    name: "button",
    content: "Submit",
  },
];
