const baseURL = "https://tarin-james.github.io/wdd230/";
const linksURL = "https://tarin-james.github.io/wdd230/chamber/data/members.json";
const membersSection = document.querySelector('.company-info');
const switchView = document.querySelector('#switcher');


async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.companies);
  }
  
  getMembers();

async function displayLinks(companies) {
    companies.forEach(company => {
        const companyCard = document.createElement('div');
        companyCard.classList.add("card");
        addField('h2',company.name, companyCard);
        addField('p', `<strong>Membership Level</strong>: ${company.membership}`, companyCard);
        addField('p', `${company.address}`, companyCard);
        addField('p', `${company.number}`, companyCard);
        addField('p', `${company.url}`, companyCard);
        const companyIcon = document.createElement('img');
        companyIcon.src = company.icon;
        companyIcon.setAttribute('alt', `Logo for ${company.name}`); 
        companyIcon.setAttribute('width', '340');
        companyIcon.setAttribute('height', '440');
        companyCard.appendChild(companyIcon);
        

        membersSection.appendChild(companyCard);
    });
    console.log(companies);
    console.log(companies);
}

function addField(elementToCreate, value, parent) {
    const createdElement = document.createElement(elementToCreate);
    createdElement.innerHTML = value
    parent.appendChild(createdElement)
}

switchView.addEventListener("click", function (event) {
    membersSection.classList.toggle('column');
    membersSection.classList.toggle('grid');
    const currentValue = switchView.innerHTML 
    if (currentValue === 'Column View') {
        switchView.innerHTML = 'Grid View';
    }
    else {
        switchView.innerHTML = 'Column View';
    }
});