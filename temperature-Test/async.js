// api.openweathermap.org/data/2.5/weather?q={City Name}&units=metric&appid={API Key}
const api = {
    key: 'b6cc4392568a3586e950307c86a22bbd',
    base: 'https://api.openweathermap.org/data/2.5/weather'
}

const updateUI = data => {
    document.getElementById('show_city').innerText = data.name || "Unknown Location!";
    document.getElementById('show_temperature').innerText = data.main.temp;
    document.getElementById('weather_status').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value = ""
}

const getWeatherData = async city => {
    const data = await fetch(`${api.base}?q=${city}&units=metric&appid=${api.key}`)
    updateUI(data)
}

const searchBtn = document.getElementById('search_button');

searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('city').value;
    getWeatherData(inputCity)
})

// By Default Location
getWeatherData("Dhaka")