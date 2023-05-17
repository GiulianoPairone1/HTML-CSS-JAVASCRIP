const tipoUsuario = document.getElementById("tipo_usuario")
const zonaDomicilio = document.getElementById("zona_domicilio")
const cantidadKwh = document.getElementById("cantidad_kwh")
const btnCalcular = document.querySelector("#btnCalcular")
const formulario = document.querySelector("#formulario")

let iva;
let kwh;


//console.log(tipoUsuario.options[tipoUsuario.selectedIndex].value)
// function calcularIva() {
//     if (tipoUsuario.options[tipoUsuario.selectedIndex].value == 'Industrial') {
//         iva=0.27
//         alert(iva)
//     } else if (tipoUsuario.options[tipoUsuario.selectedIndex].value == 'Residencial') {
//         iva=0.21
//         alert(iva)
//     }
//     else {
//         alert("error")
//     }
// }

// function calcularKwh() {
//     if (zonaDomicilio.options[zonaDomicilio.selectedIndex].value == "centro") {
//         kwh=5.80
//     } else if (zonaDomicilio.options[zonaDomicilio.selectedIndex].value == "sur") {
//         kwh=5.40
//     } else if (zonaDomicilio.options[zonaDomicilio.selectedIndex].value == "oeste") {
//         kwh=5.35
//     } else if (zonaDomicilio.options[zonaDomicilio.selectedIndex].value == "norte") {
//         kwh=5.60
//     }
// }

zonaDomicilio.addEventListener('change', function(e) {
    const valor=e.target.value
    console.log(valor)
    switch (valor) {
        case "centro":
            kwh=5.80;
            break;
        case "sur":
            kwh=5.4;
            break;
        case "oeste":
            kwh=5.35;
            break;
        case "norte":
            kwh=5.6;
            break;
        default:
            alert("Unknown value");  
            break;            
    }
})

tipoUsuario.addEventListener('change', function(e) {
    const valor=e.target.value
    switch (valor){
        case 'Industrial':
            iva=0.27
            
            break;
        case 'Residencial':
            iva=0.21
             
            break;
        default:
            break;       
    }
})


let num;

cantidadKwh.addEventListener('input', function(e) {
    num=e.target.value
    if (num <= 0) {
        alert("el numero debe ser mayor a 0")
        e.target.value=""
    }
})

datos = {
    tipo_usuario: '',
    zona_domicilio: '',
    cantidad_kwh: ''
}

formulario.addEventListener('submit', function(e) {

    e.preventDefault()

    const { tipo_usuario, zona_domicilio, cantidad_kwh } = datos

    if (tipo_usuario === '' || zona_domicilio === '' || cantidad_kwh === '') {
        mostrarError("Todos los campos deben estar completos")
        return
    }
    else {
        result=calculoFinal(iva, kwh, cantidad_kwh)
        mostrarResultado(`La cantidad a pagar es de $${result}`)
    }
})

function calculoFinal(iva, kwh, cantidad_kwh) {
    // console.log(iva)
    // console.log(kwh)
    // console.log(cantidad_kwh)
    const costoServicio=102
    const resultado= Math.round((costoServicio + parseFloat(cantidad_kwh) * kwh * (1 + iva))*100)/100
    // console.log(resultado)
    return resultado
}

function mostrarError(mensaje) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje
    alerta.classList.add('error')
    formulario.appendChild(alerta)

    setTimeout( () => {
        alerta.remove()
    }, 3000)

    console.log(alerta)

}


function mostrarResultado(mensaje) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje
    alerta.classList.add('resultado')
    formulario.appendChild(alerta)

    setTimeout( () => {
        alerta.remove()
    }, 3000)

    console.log(alerta)

}

const tipo_usuario = document.querySelector('#tipo_usuario')
const zona_domicilio = document.querySelector('#zona_domicilio')
const cantidad_kwh = document.querySelector('#cantidad_kwh')

tipo_usuario.addEventListener('input', leerTexto)
zona_domicilio.addEventListener('input', leerTexto)
cantidad_kwh.addEventListener('input', leerTexto)

function leerTexto(e) {
    // console.log(e)
    datos[e.target.id]=e.target.value
    console.log(datos)
}

