
let date = new Date();
let currentYear = date.getFullYear();
const lastModified = document.lastModified;

document.querySelector('#footer-text').innerHTML += `${currentYear} | Tarin James | Last Updated: `;
document.querySelector('#last-modified').innerHTML += lastModified


