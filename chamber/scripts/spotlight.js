const baseURL = "https://tarin-james.github.io/wdd230/";
const linksURL = "https://tarin-james.github.io/wdd230/chamber/data/members.json";
const spotlight = document.querySelector('.spotlight-memberships')

async function getMembers() {
  const response = await fetch(linksURL);
  const data = await response.json();
  const filteredCompanies = data.companies.filter((company) => {
    return company.membership === "Gold" || company.membership === "Silver";
  });
  // Get two random members
  const displayedMembers = [];
  for (let index = 0; index < 2; index++) {
    const randomIndex = Math.floor(Math.random() * filteredCompanies.length);
    displayedMembers.push(filteredCompanies[randomIndex]);
    filteredCompanies.splice(randomIndex, 1);
  }
  displayMembers(displayedMembers);
}

getMembers();

async function displayMembers(displayedMembers) {
    displayedMembers.forEach(member => {
        const companyCard = document.createElement('div');
        companyCard.classList.add('spotlight-card');
        addField('h3', member.name, companyCard);
        addField('p', `<strong>Membership Level</strong>: ${member.membership}`, companyCard);
        const companyIcon = document.createElement('img');
        companyIcon.src = member.icon;
        companyIcon.setAttribute('alt', `Logo for ${member.name}`); 
        companyIcon.setAttribute('width', '340');
        companyIcon.setAttribute('height', '440');
        companyCard.appendChild(companyIcon);

        spotlight.appendChild(companyCard);
        
    });
}

function addField(elementToCreate, value, parent) {
    const createdElement = document.createElement(elementToCreate);
    createdElement.innerHTML = value
    parent.appendChild(createdElement)
}
