
let date = new Date();
let currentYear = date.getFullYear();

document.querySelector('#year').innerHTML += currentYear;

const lastModified = document.lastModified;

document.querySelector('#lastModified').innerHTML += lastModified;