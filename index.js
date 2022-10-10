var searchBox = document.getElementById("search");
var serchBtn = document.getElementById("btn") ;
var cityLat = currentData.coord.lat
var cityLon = currentData.coord.lon

var currenticon= document.getElementById("icon")
var currentTemp= document.getElementById("temp")
var currentHumidity= document.getElementById("humidity")
var currentUvi= document.getElementById("uvi")

var key = "32fbbd3e4014481fe555bbcc5505abcc";
var city = "tunis";

const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&appid=${Key}&units=imperial`;






function fetchWeather(data) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

fetchWeather();