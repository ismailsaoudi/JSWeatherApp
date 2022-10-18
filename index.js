 document.getElementById("searchBtn").addEventListener("click", (event) => {
   var cityName = document.getElementById("cityName").value;
   var key = "32fbbd3e4014481fe555bbcc5505abcc";
   var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;

  
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);

      var cardTitle = data.name;
      var temp = data.main.temp;
      var wind = data.wind.speed;
      var humidity = data.main.humidity;
      var currentDate = new Date();
      var cDay = currentDate.getDate();
      var cMonth = currentDate.getMonth()+1;
      var cYear = currentDate.getFullYear();
      
      

      // var lat = data.coord.lat;
       // var lon = data.city.coord.lon;

      document.getElementById("currentWeather").innerHTML = `
     <div class="row d-flex justify-content-evenly">
       <div class="col s10 m5">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
           <span class="card-title">${cardTitle} ${cDay}/${cMonth}/${cYear}</span>     
        <ul class="result"  >
          <li class="temp" ><img src="./images/temperature.png" alt="Temperature" width="50" height="60"> ${temp} °C </li>
          <li class="wind"><img src="./images/wind.png" alt="wind" width="50" height="60"> ${wind} KM/H</li>
          <li class="humidity"> <img src="./images/humidity.png" alt="humidity" width="50" height="60"> ${humidity}  G.m-3</li>
        </ul>
      </div>     
      </div>
    </div> `;
    });
});


document.getElementById("searchBtn").addEventListener("click", (event) => {
    var cityName = document.getElementById("cityName").value;
    var key = "32fbbd3e4014481fe555bbcc5505abcc";
    var apiUrl5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}&units=metric`;
  
   
    fetch(apiUrl5Days)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data1) {
        console.log(data1);

        var temp1 = data1.list[2].main.temp;
        var wind1 = data1.list[2].wind.speed;
        var humidity1 = data1.list[2].main.humidity;

        var unixTimestamp = data1.list[9].dt
        var dateObject = new Date(unixTimestamp*1000)
        var date1 = dateObject.toLocaleString() 

        var temp2 = data1.list[3].main.temp;
        var wind2 = data1.list[3].wind.speed;
        var humidity2 = data1.list[3].main.humidity;
        var unixTimestamp2 = data1.list[19].dt
        var dateObject2 = new Date(unixTimestamp2*1000)
        var date2 =  dateObject2.toLocaleString()

        var temp3 = data1.list[4].main.temp;
        var wind3 = data1.list[4].wind.speed;
        var humidity3 = data1.list[4].main.humidity;

        var unixTimestamp3 = data1.list[29].dt
        var dateObject3 = new Date(unixTimestamp3*1000)
        var date3 =  dateObject3.toLocaleString()

        var temp4 = data1.list[5].main.temp;
        var wind4 = data1.list[5].wind.speed;
        var humidity4 = data1.list[5].main.humidity;

        var unixTimestamp4 = data1.list[39].dt
        var dateObject4 = new Date(unixTimestamp4*1000)
        var date4 =  dateObject4.toLocaleString()
    
        console.log(date1, date2,date3,date4)


        document.getElementById("5daysWeather").innerHTML = `
        <div class="cards d-flex justify-content-evenly ">
      <div class="row">
        <div class="col s4 m2">
          <div class="card blue-grey darken-1">
           <div class="card-content white-text">
            <span class="card-title">${date1}</span>
            <ul class="result"  >
          <li class="temp" ><img src="./images/temperature.png" alt="Temperature" width="50" height="60"> ${temp1} °C </li>
          <li class="wind"><img src="./images/wind.png" alt="wind" width="50" height="60"> ${wind1} KM/H</li>
          <li class="humidity"> <img src="./images/humidity.png" alt="humidity" width="50" height="60"> ${humidity1}  G.m-3</li>
        </ul>
           </div>
          </div>
        </div>
      </div> 
      <div class="row">
      <div class="col s4 m2">
        <div class="card blue-grey darken-1">
         <div class="card-content white-text">
          <span class="card-title">${date2}</span>
          <ul class="result"  >
        <li class="temp" ><img src="./images/temperature.png" alt="Temperature" width="50" height="60"> ${temp2} °C </li>
        <li class="wind"><img src="./images/wind.png" alt="wind" width="50" height="60"> ${wind2} KM/H</li>
        <li class="humidity"> <img src="./images/humidity.png" alt="humidity" width="50" height="60"> ${humidity2}  G.m-3</li>
      </ul>
         </div>
        </div>
      </div>
    </div>
    <div class="row">
    <div class="col s4 m2">
      <div class="card blue-grey darken-1">
       <div class="card-content white-text">
        <span class="card-title">${date3}</span>
        <ul class="result"  >
      <li class="temp" ><img src="./images/temperature.png" alt="Temperature" width="50" height="60"> ${temp3} °C </li>
      <li class="wind"><img src="./images/wind.png" alt="wind" width="50" height="60"> ${wind3} KM/H</li>
      <li class="humidity"> <img src="./images/humidity.png" alt="humidity" width="50" height="60"> ${humidity3}  G.m-3</li>
    </ul>
       </div>
      </div>
    </div>
  </div>
  <div class="row">
  <div class="col s4 m2">
    <div class="card blue-grey darken-1">
     <div class="card-content white-text">
      <span class="card-title"> ${date4}</span>
      <ul class="result"  >
    <li class="temp" ><img src="./images/temperature.png" alt="Temperature" width="50" height="60"> ${temp4} °C </li>
    <li class="wind"><img src="./images/wind.png" alt="wind" width="50" height="60"> ${wind4} KM/H</li>
    <li class="humidity"> <img src="./images/humidity.png" alt="humidity" width="50" height="60"> ${humidity4}  G.m-3</li>
  </ul>
     </div>
    </div>
  </div>
</div>

</div>
    `; 
   

      });
  });



  

 
