const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputBox = document.querySelector('.search input');
const inputBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png';
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'images/rain-icon.png';
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear-icon.png';
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png';
    }
    else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = 'images/snow.png';
    }
    document.querySelector('.weather').style.display = 'block';

}

inputBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value); 
})

