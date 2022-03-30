//<!>
import input_addContentHeader from './components/addContentHeader/input.js' 
import submit_addContentHeader from './components/addContentHeader/submit.js' 
import input_form from './components/form/input.js' 
import submit_form from './components/form/submit.js' 

const interactions = [
    input_addContentHeader,submit_addContentHeader,input_form,submit_form
  ]
//<!>


import { createClient } from "@supabase/supabase-js";
import { v4 as uuid } from "uuid";

const supabase = createClient(
  "https://dihrbzcrqzorpnqtimae.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaHJiemNycXpvcnBucXRpbWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgwNDMwMjYsImV4cCI6MTk2MzYxOTAyNn0.fM_sQdJdrQKbJzvZMDIjZ6UdU3i_AMSAucSHsxRNaL4"
);

const uploadBlog = {
  uploadBlog: {
    interactionType: "input",
    eventType: "input",
    name: "blog",
    elementId: "uploadBlog",
    fn: function anonymous(event) {
      const blogFile = event.target.files[0];
      const blogName = `${uuid()}_${blogFile.name}`;
      supabase.storage
        .from("blogs")
        .upload(`/${blogName}`, blogFile)
        .then((response) => {
          console.log(response);
        });
    },
  },
};

interactions.push(uploadBlog);

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
