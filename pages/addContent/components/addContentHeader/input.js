const ahaMomentStructure = require('./ahaMomentStructure');  const dadHackStructure = require('./dadHackStructure');  const { changeFormInputs } = require('./changeFormInputs');  const mainProjectStructure = require('./mainProjectStructure'); const sideProjectStructure = require('./sideProjectStructure');

module.exports = {
  '3138ae19-d03e-4692-8246-905d6b51f4c8': {
    interactionType: 'input',
    eventType: 'click',
    name: 'ahaMoment',
    elementId: '3138ae19-d03e-4692-8246-905d6b51f4c8',
    fn: function anonymous(event
) {
  const contentName = 'ahamoment'
  changeFormInputs(ahaMomentStructure, contentName);

  // const buttonId = event.target.id;
  // const button = document.getElementById(buttonId);
  // const existingClassName = button.className;
  // const appendHighlightClass = `${existingClassName} highlight_noScoped`;
  // button.className = appendHighlightClass;
}
  },
  '68971064-8235-4d7f-aea1-92eb40661a8f': {
    interactionType: 'input',
    eventType: 'click',
    name: 'dadHack',
    elementId: '68971064-8235-4d7f-aea1-92eb40661a8f',
    fn: function anonymous(event
) {
  const contentName = 'dadhack'
  changeFormInputs(dadHackStructure, contentName);
}
  },
  '3083f3d6-fce9-4c9f-ba1e-ec944fd22324': {
    interactionType: 'input',
    eventType: 'click',
    name: 'mainProject',
    elementId: '3083f3d6-fce9-4c9f-ba1e-ec944fd22324',
    fn: function anonymous(event
) {
  const contentName = 'mainproject';
  changeFormInputs(mainProjectStructure, contentName);
}
  },
  'c832007e-196d-4e8b-84cc-134a1bf25cbb': {
    interactionType: 'input',
    eventType: 'click',
    name: 'SideProject',
    elementId: 'c832007e-196d-4e8b-84cc-134a1bf25cbb',
    fn: function anonymous(event
) {
  const contentName = 'sideproject'
  changeFormInputs(sideProjectStructure, contentName);
}
  }
};