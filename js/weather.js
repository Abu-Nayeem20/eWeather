
const myApiKey = '7d3491041d963ac9cbfa62d18cdccb56';
const myCity = 'dhaka';

// loading spinner
const spinnerStyle = (spinner, content) => {
    document.getElementById('spinner').style.display = spinner;
    document.getElementById('weather-update').style.display = content;
}

// default load for Dhaka city

const loadDefaultCity = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metric&APPID=${myApiKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => disDefaultCity(data));
}

loadDefaultCity();

// display default city

const disDefaultCity = defaultCity => {
        // loading spinner
        spinnerStyle('block', 'none');
        // city update
        const cityName = document.getElementById('city-name');
        cityName.innerText = `${defaultCity.name}`;
        // degree
        const tempDegree = document.getElementById('temp-degree');
        tempDegree.innerText = Math.round(`${defaultCity.main.temp}`);
        // condition update
        const tempCondition = document.getElementById('current-con');
        tempCondition.innerText = `${defaultCity.weather[0].main}`;
        // feels like
        const feelsLike = document.getElementById('feels-like');
        feelsLike.innerText = 'Feels like ' + Math.round(`${defaultCity.main.feels_like}`);
    
        // display icon
        const iconImg = document.getElementById('weather-icon');
        iconImg.setAttribute('src', `https://openweathermap.org/img/wn/${defaultCity.weather[0].icon}@2x.png`);

        // loading spinner
        spinnerStyle('none', 'block');


}


// load by search

const loadWeatherData = () => {
    const cityField = document.getElementById('city-input');
    const cityText = cityField.value;

    // clear input field
    cityField.value = '';

    if(!cityText){
        return;
    }
    else{
    // loading spinner
    spinnerStyle('block', 'none');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityText}&units=metric&APPID=${myApiKey}`;


    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data, cityText));
}

}

const displayWeather = (weather, cityText) => {

    // convert lowerCase
    const lowerCityName = weather.name ? weather.name.toLowerCase(): '';
    const lowerCityText = cityText.toLowerCase();
    if(lowerCityName === lowerCityText){
    document.getElementById('not-found').style.display = 'none';    
    
    // city update
    const cityName = document.getElementById('city-name');
    cityName.innerText = `${weather.name}`;
    // degree
    const tempDegree = document.getElementById('temp-degree');
    tempDegree.innerText = Math.round(`${weather.main.temp}`);
    // feels like
    const feelsLike = document.getElementById('feels-like');
    feelsLike.innerText = 'Feels like ' + Math.round(`${weather.main.feels_like}`);
    // condition update
    const tempCondition = document.getElementById('current-con');
    tempCondition.innerText = `${weather.weather[0].main}`;

    // display icon
    const iconImg = document.getElementById('weather-icon');
    iconImg.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);

     // loading spinner
     spinnerStyle('none', 'block');
}
else{
    // loading spinner
    spinnerStyle('none', 'none');
    document.getElementById('not-found').style.display = 'block';
}
}

//Live clock By Javascript

function watch() {
	var time = new Date(),
	    hour = time.getHours(),
	    minit = time.getMinutes(),
	    sec   = time.getSeconds(),
	    daynight = ' PM';

	    // AM/PM
        if (hour < 12) {
        	daynight = ' AM';
        }
        // 0 = 12 
	    if( hour == 0) {
           hour =  12;
	    }
       // converting 12 hour
	    if(hour > 12) {
	       hour = hour - 12;	  
	    }
	   // adding 0
	   if (hour < 10 ) {
	   	hour = '0' + hour;
	   }
	   if (minit < 10 ) {
	   	minit = '0' + minit;
	   }
	   if (sec < 10 ) {
	   	sec = '0' + sec;
	   }

document.getElementById("live-time").innerHTML = hour + ':' + minit + ':' + sec + daynight ;	    
};

setInterval(watch, 1000);

