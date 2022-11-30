var apiKey = "46e193ff5a178d02cba4c8f7f600438b"
var today = dayjs().format("l");
var city;
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q={city}&units=imperial&appid={apiKey}";
