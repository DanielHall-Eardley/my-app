//<!>
import input_accomplishments from './components/accomplishments/input.js' 
import submit_accomplishments from './components/accomplishments/submit.js' 
import input_body from './components/body/input.js' 
import submit_body from './components/body/submit.js' 
import input_checkArray from './components/checkArray/input.js' 
import submit_checkArray from './components/checkArray/submit.js' 
import input_employer from './components/employer/input.js' 
import submit_employer from './components/employer/submit.js' 
import input_footer from './components/footer/input.js' 
import submit_footer from './components/footer/submit.js' 
import input_header from './components/header/input.js' 
import submit_header from './components/header/submit.js' 

const interactions = [
    input_accomplishments,submit_accomplishments,input_body,submit_body,input_checkArray,submit_checkArray,input_employer,submit_employer,input_footer,submit_footer,input_header,submit_header
  ]
//<!>


















/* Convert multiple base objects containing objects
into one array of objects as long as the base object 
are not empty */
function convertObjectsToArray(arrayOfObjects) {
  let reducedArray = [];

  for (let interactionObj of arrayOfObjects) {
    const objValues = Object.values(interactionObj);
    if (objValues && objValues.length > 0) {
      reducedArray = [...reducedArray, ...objValues];
    }
  }

  return reducedArray;
}

/* Find a html element by id, add an event listener, 
event type and callback function */
function addInteractionToHTML(interactionArray) {
  interactionArray.forEach((interaction) => {
    const className = "." + interaction.elementId;
    const element = document.querySelector(className);
    element.addEventListener(interaction.eventType, interaction.fn);
  });
}

function attachEventListeners(interactions = []) {
  const interactionArray = convertObjectsToArray(interactions);
  addInteractionToHTML(interactionArray);
}

onload = attachEventListeners(interactions);
