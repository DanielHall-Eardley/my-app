//<!>
import input_aboutMe from './components/aboutMe/input.js' 
import submit_aboutMe from './components/aboutMe/submit.js' 
import input_contact from './components/contact/input.js' 
import submit_contact from './components/contact/submit.js' 
import input_experience from './components/experience/input.js' 
import submit_experience from './components/experience/submit.js' 
import input_footer from './components/footer/input.js' 
import submit_footer from './components/footer/submit.js' 
import input_hobbies from './components/hobbies/input.js' 
import submit_hobbies from './components/hobbies/submit.js' 
import input_sideProject from './components/sideProject/input.js' 
import submit_sideProject from './components/sideProject/submit.js' 

const interactions = [
    input_aboutMe,submit_aboutMe,input_contact,submit_contact,input_experience,submit_experience,input_footer,submit_footer,input_hobbies,submit_hobbies,input_sideProject,submit_sideProject
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
