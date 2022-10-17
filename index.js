
document.getElementById('searchBtn').addEventListener('click', event => {
    let cityName = document.getElementById('cityName').value
    let key = "32fbbd3e4014481fe555bbcc5505abcc"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&apikey=${key}`
   
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => console.log(data));

    console.log(cityName)

//     let lat = res.data.city.coord.lat
//     let lon = res.data.city.coord.lon

//     let uviUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${key}`

// fetch(uviUrl)
// .then((resp) => resp.json())
// .then(() => console.log(resp.data));

})

 


 




