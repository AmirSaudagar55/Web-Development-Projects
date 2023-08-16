//NOTE: Paste API key from openweathermap.org website

let mainColor = document.getElementsByClassName("main")[0];
let weatherPanel = document.getElementsByClassName("weather")[0]

let weatherImage = document.getElementsByClassName("weather-icon")[0]
let weatherIconDesc = document.getElementsByClassName("weather-icon-desc")[0]

let tempDisplay = document.getElementsByClassName("temp")[0]
let humidityDisplay = document.getElementsByClassName("humidity")[0]
let windSpeedDisplay = document.getElementsByClassName("wind-speed")[0]
let cityDisplay = document.getElementsByClassName("city")[0]

let searchBtn = document.getElementsByClassName("search-btn")[0]
let searchCity = document.getElementsByClassName("search-input")[0]

let errorDisplay = document.getElementsByClassName("error")[0]

const weatherConditions = [
    { name: "Clear", img: "images/clear.png", gradient : "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"},
    { name: "Rain", img: "images/rain.png", gradient : "linear-gradient(to right, #004e92, #000428)" },
    { name: "Drizzle", img: "images/rain.png", gradient : "linear-gradient(to right, #004e92, #000428)" },
    { name: "Clouds", img: "images/clouds.png", gradient : "linear-gradient(135deg, #00feba, #5b448a)" },
    { name: "Thunderstorm", img: "images/thunderstorm.png", gradient : "linear-gradient(to right, #243B55, #141E30)" },
    { name: "Mist", img: "images/mist.png" , gradient : "linear-gradient(to right, #001510, #00bf8f)"},
    { name: "Snow", img: "images/snow.png" , gradient : "linear-gradient(to right, #001510, #00bf8f)"},
    { name: "Smoke", img: "images/mist.png" , gradient : "linear-gradient(to right, #001510, #00bf8f)"},
    { name: "Haze", img: "images/mist.png", gradient : "linear-gradient(to right, #001510, #00bf8f)" },
    { name: "Dust", img: "images/mist.png", gradient : "linear-gradient(to right, #001510, #00bf8f)" },
    { name: "Fog", img: "images/mist.png", gradient : "linear-gradient(to right, #001510, #00bf8f)" },
    { name: "Sand", img: "images/mist.png", gradient : "linear-gradient(to right, #001510, #00bf8f)" },
    { name: "Ash", img: "images/mist.png", gradient : "linear-gradient(to right, #001510, #00bf8f)" },
    { name: "Squall", img: "images/mist.png", gradient : "linear-gradient(to right, #001510, #00bf8f)" },
    { name: "Tornado", img: "images/mist.png", gradient : "linear-gradient(to right, #001510, #00bf8f)" }
];

function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }


let data = "";
let cityName = "";

let url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

//------------------------------------------------------API KEY--------------------------------------------------------------------------------------
let apiKey = "" //Paste API key by creating account on openweathermap.org (Note: API key will be activated after 10-15 min upon creating a account).

async function checkWeather(location)
{
    cityName = location
    const response = await fetch(url + cityName + `&appid=${apiKey}`)

    if(response.status == 404)
    {
        errorDisplay.style.display = "block";
        return;
    }

    if(response.status == 401)
    {
        alert("Invalid API key")
        return;
    }


    data = await response.json();
    errorDisplay.style.display = "none";
    weatherPanel.style.display = "block"
    updateDashboard();
}

function updateDashboard()
{
    console.log(data);
    tempDisplay.innerHTML = data.main.temp + "°C";
    cityDisplay.innerHTML = capitalizeFirstLetter(cityName);
    humidityDisplay.innerHTML = data.main.humidity + " %";
    windSpeedDisplay.innerHTML = data.wind.speed + " m/sec ";

    for(let i = 0; i < weatherConditions.length; i++)
    {
        if(weatherConditions[i].name == data.weather[0].main)
        {
            weatherImage.src = weatherConditions[i].img
            weatherIconDesc.innerHTML = weatherConditions[i].name + " ( " + data.weather[0].description + " ) "
            mainColor.style.background = weatherConditions[i].gradient;
        }
    }
    
}

searchBtn.addEventListener("click", ()=>{
    console.log(searchCity.value)
    checkWeather(searchCity.value)
})
