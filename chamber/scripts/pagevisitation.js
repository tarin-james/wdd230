const visitsDisplay = document.querySelector("#uservisit");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let lastVisit = Number(window.localStorage.getItem('lastVisitDate-ls')) || 0;
const msToDays = 84600000;
const lastUserVisit = Date.now() - lastVisit;
// Not First Visit
if (numVisits !== 0) {
    // Gap of greater than 1 day
    if (lastUserVisit > msToDays) {
        visitsDisplay.textContent = `You last visited ${Math.round(lastUserVisit / msToDays)} days ago`
    } else {
        visitsDisplay.textContent = `Back so soon! Awesome!`
    }
// First Visit
} else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} 
numVisits++;
console.log(lastUserVisit)
localStorage.setItem("lastVisitDate-ls", Date.now());
localStorage.setItem("numVisits-ls", numVisits);




