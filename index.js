
document.getElementById('searchBtn').addEventListener('click', event => {
    let cityName = document.getElementById('cityName').value
    console.log(cityName)
})


const key = "32fbbd3e4014481fe555bbcc5505abcc";
const cityName = "haffouz"

 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&apikey=${key}`;



 function fetchWeather(data){
     fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => console.log(data));
 }

 fetchWeather()

 




