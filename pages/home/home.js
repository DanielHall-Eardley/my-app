import input_header from './components/header/input.js' 
import submit_header from './components/header/submit.js' 
 
 const interactions = [
    input_header,submit_header
  ] 
 
function attachEventListeners (interactions=[]) {
  let interactionArray = []
  
  for(let interactionObj of interactions) {
    const objValues = Object.values(interactionObj)
    console.log({objValues})
    if (objValues && objValues.length > 0) {
      interactionArray = [...interactionArray, ...objValues]
    }
  }
  console.log({interactionArray})
  interactionArray.forEach(interaction => {
    const element = document.getElementById(interaction.elementId);
    element.addEventListener(interaction.eventType, interaction.fn);
  })
}

onload = attachEventListeners(interactions)
