const formulario = document.querySelector('#formulariociudad')
const resultado = document.querySelector('#resultados')
const textoAgregar = document.querySelector('#agree')
const formul = document.querySelector('#formul')


texto = {
    ciudad: ''
}


textoAgregar.addEventListener('input', (e) => {
    texto.ciudad = e.target.value
    console.log(texto)
})


formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    formul.reset()
    textoAgregar.focus()
    var { ciudad } = texto
    ciudad = ciudad.toUpperCase()//Pasa todo el texto a mayuscula ,para que no serepita la ciudad sin importar que sea en mayuscula o minuscula
    city = ciudad.trim()
    if (city.lenght === 0) {
        return
    }
    console.log(city.lenght)
    console.log(ciudad)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=1f589a21f54dce76b0c9e3e3af28eb21&units=metric&lang=es`
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            if (data.message === 'city not found') {
                resultado.innerHTML = `<p class="Error">Error: La ciudad ingresada no se encuentra en la API  o se produjo un error al consultarse</p>`
                setTimeout(() => {
                    resultado.innerHTML = ''
                }, 2500);
            }
            else {
                let bandera = 1
                const ciudades = getCitiesFromLocalStorage()
                ciudades.forEach(element => {
                    if (element === ciudad) {
                        resultado.innerHTML = `<p class="Warning">La ciudad ingresada ya se encuentra almacenada</p>`
                        setTimeout(() => {
                            resultado.innerHTML = ''
                        }, 2500);
                        bandera = 0
                    }
                }, 2500);
                if (bandera === 1) {
                    addNewCityToLocalStorage(ciudad)
                    resultado.innerHTML = `<p class="Success">Ciudad agregada con exito</p>`
                    setTimeout(() => {
                        resultado.innerHTML = ''
                    }, 2500);
                }
            }

        })
        .catch(err => console.log(err))
})




function addNewCityToLocalStorage(newCity) {
    let cities = getCitiesFromLocalStorage();
    cities.push(newCity);
    localStorage.setItem("CITIES", JSON.stringify(cities));
}


function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

document.addEventListener(`DOMContentLoaded`, getCitiesFromLocalStorage, textoAgregar.focus())
