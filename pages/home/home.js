//<!>
import input_aboutMe from './components/aboutMe/input.js' 
import submit_aboutMe from './components/aboutMe/submit.js' 
import input_ahaMoment from './components/ahaMoment/input.js' 
import submit_ahaMoment from './components/ahaMoment/submit.js' 
import input_blog from './components/blog/input.js' 
import submit_blog from './components/blog/submit.js' 
import input_dadHack from './components/dadHack/input.js' 
import submit_dadHack from './components/dadHack/submit.js' 
import input_header from './components/header/input.js' 
import submit_header from './components/header/submit.js' 
import input_projectSummary from './components/projectSummary/input.js' 
import submit_projectSummary from './components/projectSummary/submit.js' 
import input_projects from './components/projects/input.js' 
import submit_projects from './components/projects/submit.js' 
import input_sideProject from './components/sideProject/input.js' 
import submit_sideProject from './components/sideProject/submit.js' 
import input_viewSideProject from './components/viewSideProject/input.js' 
import submit_viewSideProject from './components/viewSideProject/submit.js' 

const interactions = [
    input_aboutMe,submit_aboutMe,input_ahaMoment,submit_ahaMoment,input_blog,submit_blog,input_dadHack,submit_dadHack,input_header,submit_header,input_projectSummary,submit_projectSummary,input_projects,submit_projects,input_sideProject,submit_sideProject,input_viewSideProject,submit_viewSideProject
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
