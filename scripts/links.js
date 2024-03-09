const baseURL = "https://tarin-james.github.io/wdd230/";
const linksURL = "https://tarin-james.github.io/wdd230/data/links.json";
const linksList = document.querySelector('ul');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
  getLinks();

async function displayLinks(weeks) {
    const {lessons} = weeks;
    lessons.forEach(lesson => {
        const lessonLi = document.createElement('li');
        lessonLi.innerHTML = lesson.lesson  + ': ';
        lesson.links.forEach((lessonLink, i) => {
            const aLink = document.createElement('a');
            aLink.href = lessonLink.url;
            aLink.innerHTML = lessonLink.title;
            lessonLi.appendChild(aLink);
            if (i + 1 !== lesson.links.length) {
                lessonLi.innerHTML += ' | '
            }
        });

        linksList.appendChild(lessonLi);
    });
    console.log(weeks);
    console.log(lessons);
}
