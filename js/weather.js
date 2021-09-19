const API_KEY = "93207645dbe507862f8001c422f00f31";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const temperature = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temperature.innerText = `${data.main.temp} F`;
    })
  );
}

function onGeoError() {
  alert("Can't find tou. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
