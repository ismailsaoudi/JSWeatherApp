document.getElementById("searchBtn").addEventListener("click", (event) => {
  var cityName = document.getElementById("cityName").value;
  var key = "32fbbd3e4014481fe555bbcc5505abcc";
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;

  console.log(cityName);
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);

      var cardTitle = data.name;
      var temp = data.main.temp;
      var wind = data.wind.speed;
      var currentDate = new Date();
      var cDay = currentDate.getDate();
      var cMonth = currentDate.getMonth() + 1;
      var cYear = currentDate.getFullYear();
      var time = currentDate.getHours() + ":" + currentDate.getMinutes();

      // var lat = data.coord.lat;
      // var lon = data.city.coord.lon;

      document.getElementById("currentWeather").innerHTML = `
    <div class="row">
      <div class="col s12 m6">
       <div class="card blue-grey darken-1">
         <div class="card-content white-text">
          <span class="card-title">${cardTitle}</span>
          <span class="card-title">${cDay}/${cMonth}/${cYear}  ${time}</span>
          
        <ul class="result"  >
          <li class="temp" >Temperature ${temp} C</li>
          <li class="wind">Wind ${wind} KM/H</li>
          <li class="humidity"></li>
        </ul>
      </div>
    </div>
    </div> `;
    });
});
