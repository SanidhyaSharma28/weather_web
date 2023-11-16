const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '174b3a2414msh346276a6078db8cp1e94c4jsnffa471fc24d2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			cloud_pct2.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			wind_degrees.innerHTML = response.wind_degrees
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})



// calling by deafult for delhi
getWeather("Delhi")

const cities = ['Hawaii', 'Sydney', 'Hong Kong', 'London', 'San Francisco', 'Singapore']
const HawaiigetWeather = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hawaii', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			Hawaii_cloud_pct.innerHTML = response.cloud_pct
			Hawaii_feels_like.innerHTML = response.feels_like
			Hawaii_humidity.innerHTML = response.humidity
			Hawaii_max_temp.innerHTML = response.max_temp
			Hawaii_min_temp.innerHTML = response.min_temp
			Hawaii_sunrise.innerHTML = response.sunrise
			Hawaii_sunset.innerHTML = response.sunset
			Hawaii_temp.innerHTML = response.temp
			Hawaii_wind_degrees.innerHTML = response.wind_degrees
			Hawaii_wind_speed.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}
HawaiigetWeather()

const SydneygetWeather = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			Sydney_cloud_pct.innerHTML = response.cloud_pct
			Sydney_feels_like.innerHTML = response.feels_like
			Sydney_humidity.innerHTML = response.humidity
			Sydney_max_temp.innerHTML = response.max_temp
			Sydney_min_temp.innerHTML = response.min_temp
			Sydney_sunrise.innerHTML = response.sunrise
			Sydney_sunset.innerHTML = response.sunset
			Sydney_temp.innerHTML = response.temp
			Sydney_wind_degrees.innerHTML = response.wind_degrees
			Sydney_wind_speed.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}
SydneygetWeather()

const Hong_Kong_getWeather = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hong Kong', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			Hong_Kong_cloud_pct.innerHTML = response.cloud_pct
			Hong_Kong_feels_like.innerHTML = response.feels_like
			Hong_Kong_humidity.innerHTML = response.humidity
			Hong_Kong_max_temp.innerHTML = response.max_temp
			Hong_Kong_min_temp.innerHTML = response.min_temp
			Hong_Kong_sunrise.innerHTML = response.sunrise
			Hong_Kong_sunset.innerHTML = response.sunset
			Hong_Kong_temp.innerHTML = response.temp
			Hong_Kong_wind_degrees.innerHTML = response.wind_degrees
			Hong_Kong_wind_speed.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}
Hong_Kong_getWeather()

const LondongetWeather = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			London_cloud_pct.innerHTML = response.cloud_pct
			London_feels_like.innerHTML = response.feels_like
			London_humidity.innerHTML = response.humidity
			London_max_temp.innerHTML = response.max_temp
			London_min_temp.innerHTML = response.min_temp
			London_sunrise.innerHTML = response.sunrise
			London_sunset.innerHTML = response.sunset
			London_temp.innerHTML = response.temp
			London_wind_degrees.innerHTML = response.wind_degrees
			London_wind_speed.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}
LondongetWeather()

const SingaporegetWeather = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Singapore', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			Singapore_cloud_pct.innerHTML = response.cloud_pct
			Singapore_feels_like.innerHTML = response.feels_like
			Singapore_humidity.innerHTML = response.humidity
			Singapore_max_temp.innerHTML = response.max_temp
			Singapore_min_temp.innerHTML = response.min_temp
			Singapore_sunrise.innerHTML = response.sunrise
			Singapore_sunset.innerHTML = response.sunset
			Singapore_temp.innerHTML = response.temp
			Singapore_wind_degrees.innerHTML = response.wind_degrees
			Singapore_wind_speed.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}
SingaporegetWeather()

const San_Francisco_getWeather = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=San Francisco', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			San_Francisco_cloud_pct.innerHTML = response.cloud_pct
			San_Francisco_feels_like.innerHTML = response.feels_like
			San_Francisco_humidity.innerHTML = response.humidity
			San_Francisco_max_temp.innerHTML = response.max_temp
			San_Francisco_min_temp.innerHTML = response.min_temp
			San_Francisco_sunrise.innerHTML = response.sunrise
			San_Francisco_sunset.innerHTML = response.sunset
			San_Francisco_temp.innerHTML = response.temp
			San_Francisco_wind_degrees.innerHTML = response.wind_degrees
			San_Francisco_wind_speed.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}
San_Francisco_getWeather()

const homeBtn = document.getElementById('home-btn');
  
// Add an event listener to the button
homeBtn.addEventListener('click', (event) => {
  // Prevent the default behavior of the button
  event.preventDefault();
  
  // Update the value of the "city" input to Chandigarh
  const cityInput = document.getElementById('city');
  cityInput.value = 'Chandigarh ';
  
  // Submit the search form
  const searchBtn = document.getElementById('submit');
  searchBtn.click();
});


// const drop_ele = document.getElementById('drop1');

// drop_ele.addEventListener('click', (event) => {
// 	event.preventDefault();

// 	const citydrop1 = document.getElementById('city');
// 	citydrop1.value
// })

document.querySelectorAll('.dropdown-menu a').forEach(link =>{
	link.addEventListener('click', e=>{
		e.preventDefault();
		const city = link.textContent.trim();
		getWeather(city);
	})
})