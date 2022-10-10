const key = "32fbbd3e4014481fe555bbcc5505abcc";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${key}`;



function fetchWeather(query){
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

fetchWeather();

