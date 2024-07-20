const apiKey = "ced6adac01054687f0ab071da576e010";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".inp");
const searchBtn = document.querySelector(".bttn");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
        // alert("City not found!");
    } 
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    
        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = 'images/clouds.png'
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = 'images/clear.png'
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = 'images/rain.png'
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = 'images/drizzle.png'
        }
        else if (data.weather[0].main == "Haze") {
            weatherIcon.src = 'images/mist.png'
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = 'images/snow.png'
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"

    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    searchBox.value = "";
})
