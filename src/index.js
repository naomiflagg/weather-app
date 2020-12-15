import '../../flaggrid/flaggrid.css';
import './style.scss';
import keys from './keys';

const tempMin = document.querySelector('.temp-min');
const tempMax = document.querySelector('.temp-max');
const description = document.querySelector('.description');
const main = document.querySelector('.main');
loadWeather('Oakland');

const submit = document.querySelector('.submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  let place = document.querySelector('form').elements[0].value;
  loadWeather(place);
});

async function loadWeather(place) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${keys.weatherKey}&units=imperial`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    main.textContent = weatherData.weather[0].main;
    tempMin.textContent = weatherData.main.temp_min;
    tempMax.textContent = weatherData.main.temp_max;
    description.textContent = weatherData.weather[0].description;
  } catch (error) {
    console.log(error);
  }
}
