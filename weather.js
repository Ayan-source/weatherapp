const apikey = CONFIG.API_KEY;

const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let city = document.querySelector("#form1 input");
let btn = document.querySelector(".container1 button");
let pic = document.querySelector(".weatherimg");

async function getweather(city) {
  let response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".container2").style.display = "none";
  } else {
    console.log(response);
    let data = await response.json();
    document.querySelector(".error").style.display = "none";
    document.querySelector(".container2").style.display = "block";
    if (data.weather[0].main == "Clouds") {
      pic.src = "images/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      pic.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Clear") {
      pic.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      pic.src = "images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      pic.src = "images/mist.png";
    }
    document.querySelector(".container2 h2").innerHTML = data.name;

    document.querySelector(".container2 h1").innerHTML =
      Math.round(data.main.temp) + `°C`;

    document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;

    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
  }
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  getweather(city.value);
});
