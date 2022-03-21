const ahaMomentStructure = require("./ahaMomentStructure");
const dadHackStructure = require("./dadHackStructure");
const { changeFormInputs } = require("./changeFormInputs");
const mainProjectStructure = require("./mainProjectStructure");
const sideProjectStructure = require("./sideProjectStructure");

module.exports = {
  addAhaMoment: {
    interactionType: 'input',
    eventType: 'click',
    name: 'ahaMoment',
    elementId: 'addAhaMoment',
    fn: function anonymous(event) {
      const primaryClass = event.target.classList[0];
      const contentName = "ahamoment";
      const obj = {
        newInputs: ahaMomentStructure,
        contentType: contentName,
        primaryClass,
      };

      changeFormInputs(obj);
    }
  },
  addDadHack: {
    interactionType: 'input',
    eventType: 'click',
    name: 'dadHack',
    elementId: 'addDadHack',
    fn: function anonymous(event) {
      const contentName = "dadhack";
      const primaryClass = event.target.classList[0];
      const obj = {
        newInputs: dadHackStructure,
        contentType: contentName,
        primaryClass,
      };

      changeFormInputs(obj);
    }
  },
  addMainProject: {
    interactionType: 'input',
    eventType: 'click',
    name: 'mainProject',
    elementId: 'addMainProject',
    fn: function anonymous(event) {
      const contentName = "mainproject";
      const primaryClass = event.target.classList[0];
      const obj = {
        newInputs: mainProjectStructure,
        contentType: contentName,
        primaryClass,
      };

      changeFormInputs(obj);
    }
  },
  addSideProject: {
    interactionType: 'input',
    eventType: 'click',
    name: 'SideProject',
    elementId: 'addSideProject',
    fn: function anonymous(event) {
      const contentName = "sideproject";
      const primaryClass = event.target.classList[0];
      const obj = {
        newInputs: sideProjectStructure,
        contentType: contentName,
        primaryClass,
      };

      changeFormInputs(obj);
    }
  }
};