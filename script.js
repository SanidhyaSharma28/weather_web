const options = {
    method: 'GET',
    headers: {
        'key': '1f7e2329481547b48c3103507242312'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(`https://api.weatherapi.com/v1/current.json?key=1f7e2329481547b48c3103507242312&q=${city}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            // Update UI with fetched weather data
            cloud_pct2.innerHTML = response.current.cloud; // Current cloud percentage
            max_temp.innerHTML = response.current.condition.text; // Current cloud percentage
            min_temp.innerHTML = response.current.temp_f; // Current cloud percentage
            feels_like.innerHTML = response.current.precip_mm; // Feels like temperature in Celsius
            humidity.innerHTML = response.current.humidity; // Humidity percentage
            temp2.innerHTML = response.current.temp_c; // Temperature in Celsius
            wind_degrees.innerHTML = response.current.wind_degree; // Wind direction in degrees
            wind_speed2.innerHTML = response.current.wind_kph; // Wind speed in km/h

            sunset.innerHTML = response.current.pressure_mb; // Placeholder for demo
        })
        .catch(err => console.error(err));
};

// Event listener for the submit button
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

// Fetch weather for default city (Delhi) on load
getWeather("New Delhi");

// Fetch weather data for multiple cities with a delay to avoid hitting limits
const cities = ['Hawaii', 'Sydney', 'Hong Kong', 'London', 'San Francisco', 'Singapore'];

let delay = 0;
cities.forEach((city) => {
    delay += 2000; // 2-second delay between each API call
    setTimeout(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=1f7e2329481547b48c3103507242312&q=${city}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(`${city} Weather:`, response);
                // Update specific city's data in the UI
                const prefix = city.replace(" ", "_"); // Replace spaces for DOM element IDs
                document.getElementById(`${prefix}_cloud_pct`).innerHTML = response.current.cloud;
                document.getElementById(`${prefix}_feels_like`).innerHTML = response.current.condition.text;
                document.getElementById(`${prefix}_max_temp`).innerHTML = response.current.precip_mm;
                document.getElementById(`${prefix}_min_temp`).innerHTML = response.current.pressure_mb;
                document.getElementById(`${prefix}_humidity`).innerHTML = response.current.humidity;
                document.getElementById(`${prefix}_sunset`).innerHTML = response.current.temp_f;
                document.getElementById(`${prefix}_temp`).innerHTML = response.current.temp_c;
                document.getElementById(`${prefix}_wind_degrees`).innerHTML = response.current.wind_degree;
                document.getElementById(`${prefix}_wind_speed`).innerHTML = response.current.wind_kph;
            })
            .catch(err => console.error(err));
    }, delay);
});

// Event listener for the home button
const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const cityInput = document.getElementById('city');
    cityInput.value = 'Chandigarh';
    submit.click();
});

// Dropdown menu for selecting cities
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const city = link.textContent.trim();
        getWeather(city);
    });
});
