const containerEl = document.querySelector(".container");

const carrers = ["Youtuber", "Dentist", "Lawyer", "Information Security Analyst", "Psychiatrist", "Web Developer"];

let carrerIndex = 0;
let carrercharIndex = 0;

updateText();
function updateText() {
    carrercharIndex++;
    containerEl.innerHTML = `
    <h1>I am ${carrers[carrerIndex].slice(0,1) === "I" ? "an" : "a"} ${carrers[carrerIndex].slice(0, carrercharIndex)}</h1>
    
    `
   
    if(carrercharIndex === carrers[carrerIndex].length){
        carrerIndex++;
        carrercharIndex = 0;
    }
    if(carrerIndex === carrers.length){
        carrerIndex = 0;
    }
    setTimeout(updateText, 500);
}

