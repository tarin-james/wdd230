const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forcastContainer = document.querySelector('.forecast');
const windChill = document.querySelector('.windchill')
const weatherurl = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&units=imperial&appid=285efc0f634ad6cd8b48ebf5c49e75c9';
const forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.82&lon=-111.79&units=imperial&appid=285efc0f634ad6cd8b48ebf5c49e75c9'


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
        const filteredForcast = data.list.filter((report) => {
          return report.dt_txt.includes('12:00:00')
        }).splice(0, 3); 
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
  filteredForcast.forEach(day => {
    const futureForecast = day.main.temp;
    const futureForecastContainer = document.createElement('div');
    futureForecastContainer.innerHTML = futureForecast + '°F';
    forcastContainer.appendChild(futureForecastContainer);
  });
  console.log(filteredForcast);
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
  console.log(data);
  windChill.innerHTML = calculateWindChill(data.main.temp, data.wind.speed);
}

function calculateWindChill(temp, wind_speed){
  
  if (temp <= 50 && wind_speed > 3) {
    const wind_chill =
      35.74 +
      0.6215 * temp -
      35.75 * wind_speed ** 0.16 +
      0.4275 * temp * wind_speed ** 0.16;
    return `Wind Chill` + Math.round(wind_chill, 2);
  } else {
    return `No wind chill`;
  }
}
