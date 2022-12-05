var apiKey = "46e193ff5a178d02cba4c8f7f600438b";
var today = new Date();
console.log(today);
var city = document.getElementById("searchCity");
var queryUrl =
  "https://api.openweathermap.org/data/2.5/weather?q={city}&units=imperial&appid={apiKey}";
//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

document.getElementById("searchBtn").addEventListener("click", function () {
    fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&units=metric&appid=46e193ff5a178d02cba4c8f7f600438b`
      )
        .then(function(data) {
          console.log(data);
          return data.json();
        })
        .then(function(weatherData) {
          console.log(weatherData.list[0].main.temp);
        });
        $("#weather").css("display", "block");
        $(#)
});

var iconCode = weatherData.weather[0].icon;
var iconURL = `https://openweathermap.org/img/w/${iconCode}.png`;
http://openweathermap.org/img/wn/10d@2x.png

var currentCity = $(`
<h2 id="currentCity">
    ${weatherData.name} ${today} <img src="${iconURL}" alt="${weatherData.weather[0].description}" />
</h2>
`)