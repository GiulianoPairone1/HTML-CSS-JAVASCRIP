const seleccionable = document.querySelector('#Seleccionable')
const formcitylist = document.querySelector('#form-city-list')
const sectionweatherresult = document.querySelector('#section-weather-result')

let ciudad = ""

seleccionable.addEventListener('input', (e) => {
    ciudad = e.target.value
})


formcitylist.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(ciudad)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=1f589a21f54dce76b0c9e3e3af28eb21&units=metric&lang=es`
    fetch(url)
        .then(res => { return res.json() })
        .then(data => {
            console.log(data);
            sectionweatherresult.innerHTML = `<div class="card"><h3>${data.name}</h3> <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"><p>Temperatura: ${data.main.temp}º</p><p>Sensación Térmica: ${data.main.feels_like}º</p><p>Humedad: ${data.main.humidity}%</p><p>Velocidad de viento: ${data.main.pressure}km/h</p><p>Presión: ${data.wind.speed} P</p></div>`
        })
})


function getCitiesFromLocalStorage() {

    let cities = localStorage.getItem("CITIES"); //Valores Key
    if (cities) {
        console.log(cities)
        cities = JSON.parse(cities);
        console.log(cities)
        cities.forEach(element => {
            const opcion = document.createElement('option')
            opcion.textContent = `${element}`
            opcion.value = `${element}`
            seleccionable.appendChild(opcion)
        });
    } else {
        cities = [];
    }
    return cities;
}


document.addEventListener('DOMContentLoaded', getCitiesFromLocalStorage)