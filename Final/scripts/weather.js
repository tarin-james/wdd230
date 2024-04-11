const currentHigh = document.querySelector("#current-high-text");
const currentTemp = document.querySelector("#current-temp-text");
const currentHumidity = document.querySelector("#current-humidity");
const forecastTemp = document.querySelector("#forecast-temp");
const forecastHumidity = document.querySelector("#forecast-humidity");
// const captionDesc = document.querySelector('figcaption');
const forcastContainer = document.querySelector("#forecast");
const currentWeatherContainer = document.querySelector('#current-weather-section');
const weatherurl =
  "https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.96&units=imperial&appid=285efc0f634ad6cd8b48ebf5c49e75c9";
const forecast =
  "https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.96&units=imperial&appid=285efc0f634ad6cd8b48ebf5c49e75c9";

async function getCurrentWeather() {
  try {
    const response = await fetch(weatherurl);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function getForecast() {
  try {
    const response = await fetch(forecast);
    if (response.ok) {
      const data = await response.json();
      const filteredForcast = data.list
        .filter((report) => {
          return report.dt_txt.includes("15:00:00");
        })
        .splice(0, 1);
      displayForecast(filteredForcast);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getCurrentWeather();
getForecast();

function displayForecast(filteredForcast) {
  filteredForcast.forEach((day) => {
    const data = day;
    console.log(data);
    forecastTemp.innerHTML += `${data.main.temp}&deg;F`;
    forecastHumidity.innerHTML += `${data.main.humidity}%`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const forecastIcon = document.createElement('img');
    forecastIcon.src = iconsrc;
    forecastIcon.alt = 'Forecast Icon';
    forcastContainer.appendChild(forecastIcon);
  });
  console.log(filteredForcast);
}

function displayResults(data) {
  currentHigh.innerHTML += `${data.main.temp_max}&deg;F`;
  currentTemp.innerHTML += `${data.main.temp}&deg;F`;
  currentHumidity.innerHTML += `${data.main.humidity}%`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const currentIcon = document.createElement('img');
  currentIcon.src = iconsrc;
  currentIcon.alt = 'Current Weather Icon';
  currentWeatherContainer.appendChild(currentIcon);
  console.log(data);
}
