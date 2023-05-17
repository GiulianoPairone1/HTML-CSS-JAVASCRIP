var cantidad = document.getElementById("cantidad");
var capacidad = document.getElementById("capacidad");
var producto = document.getElementById("producto");
var result = document.getElementById("result");
var foto = document.getElementById("foto");
var Descrip = document.getElementById("strDescrip-Prod");




function changeProductImage() {
    switch (producto.value) {
        case "graphite":
            foto.src = "img/iphone_13_graphite.png"
            Descrip.innerHTML = "CARACTERISTICAS:<br><br><li>Marca: Apple <br><li> Modelo: iPhone 13 Pro <br><li> Color: Graphite <br><li> Memoria interna: 128 GB <br><li> Memoria RAM: 4 GB <br><li> Dual SIM: No <br><li> Compañía telefónica: Liberado <br><li> Sistema operativo: iOS 15 <br><li> Tamaño de la pantalla: 6.1<br><li> Resolución de la cámara: 12 MP <br><li> Red: 5G <br><li> Con pantalla táctil: Si <br><li> Cámara digital: Si <br><li> Capacidad de tarjeta de memoria: 128 GB <br><li> USB: USB-C <br><li> Teclado QWERTY: No <br><li> Wi-Fi: Si <br><li> Con GPS: Si<br><li> Radio: Si <br><li> Reproductor de música: Si <br><li> Grabador de voz: Si <br><li> Sintonizador de TV: No <br><li> Tamaño de SIM: Nano-SIM <br><li> Resolución de la pantalla: 2532 x 1170 pixeles a 460 ppi <br><li> Tipo de batería: De litio recargable integrada <br><li> Batería removible: No <br><li> Sensor de movimiento: Si <br><li> Brillo: Máximo de 1000 nits (normal); brillo máximo de 1,200 nits (HDR) <br><li> Flash en cámara frontal: Si <br><li> Cámara lenta: Si <br><li> Con Bluetooth: Si <br><li> Mini HDMI: No <br><li> Zoom óptico: Si <br><li> Zoom digital: Si <br><li> Tipo de pantalla: OLED <br><li> Modelo del Procesador: Chip A15 Bionic <br><li> Es a prueba de agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6metros) según la norma IEC 60529 <br><li> Lector de huella digital: No <br><li> Sensor de proximidad: Si <br><li> Origen: China"
            break;
        case "gold":
            foto.src = "img/iphone_13_gold.png"
            Descrip.innerHTML = "CARACTERISTICAS:<br><br><li>Marca: Apple <br><li> Modelo: iPhone 13 Pro <br><li> Color: Gold <br><li> Memoria interna: 128 GB <br><li> Memoria RAM: 4 GB <br><li> Dual SIM: No <br><li> Compañía telefónica: Liberado <br><li> Sistema operativo: iOS 15 <br><li> Tamaño de la pantalla: 6.1<br><li> Resolución de la cámara: 12 MP <br><li> Red: 5G <br><li> Con pantalla táctil: Si <br><li> Cámara digital: Si <br><li> Capacidad de tarjeta de memoria: 128 GB <br><li> USB: USB-C <br><li> Teclado QWERTY: No <br><li> Wi-Fi: Si <br><li> Con GPS: Si<br><li> Radio: Si <br><li> Reproductor de música: Si <br><li> Grabador de voz: Si <br><li> Sintonizador de TV: No <br><li> Tamaño de SIM: Nano-SIM <br><li> Resolución de la pantalla: 2532 x 1170 pixeles a 460 ppi <br><li> Tipo de batería: De litio recargable integrada <br><li> Batería removible: No <br><li> Sensor de movimiento: Si <br><li> Brillo: Máximo de 1000 nits (normal); brillo máximo de 1,200 nits (HDR) <br><li> Flash en cámara frontal: Si <br><li> Cámara lenta: Si <br><li> Con Bluetooth: Si <br><li> Mini HDMI: No <br><li> Zoom óptico: Si <br><li> Zoom digital: Si <br><li> Tipo de pantalla: OLED <br><li> Modelo del Procesador: Chip A15 Bionic <br><li> Es a prueba de agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6metros) según la norma IEC 60529 <br><li> Lector de huella digital: No <br><li> Sensor de proximidad: Si <br><li> Origen: China"
            break;
        case "silver":
            foto.src = "img/iphone_13_silver.png"
            Descrip.innerHTML = "CARACTERISTICAS:<br><br><li>Marca: Apple <br><li> Modelo: iPhone 13 Pro <br><li> Color: Silver <br><li> Memoria interna: 128 GB <br><li> Memoria RAM: 4 GB <br><li> Dual SIM: No <br><li> Compañía telefónica: Liberado <br><li> Sistema operativo: iOS 15 <br><li> Tamaño de la pantalla: 6.1<br><li> Resolución de la cámara: 12 MP <br><li> Red: 5G <br><li> Con pantalla táctil: Si <br><li> Cámara digital: Si <br><li> Capacidad de tarjeta de memoria: 128 GB <br><li> USB: USB-C <br><li> Teclado QWERTY: No <br><li> Wi-Fi: Si <br><li> Con GPS: Si<br><li> Radio: Si <br><li> Reproductor de música: Si <br><li> Grabador de voz: Si <br><li> Sintonizador de TV: No <br><li> Tamaño de SIM: Nano-SIM <br><li> Resolución de la pantalla: 2532 x 1170 pixeles a 460 ppi <br><li> Tipo de batería: De litio recargable integrada <br><li> Batería removible: No <br><li> Sensor de movimiento: Si <br><li> Brillo: Máximo de 1000 nits (normal); brillo máximo de 1,200 nits (HDR) <br><li> Flash en cámara frontal: Si <br><li> Cámara lenta: Si <br><li> Con Bluetooth: Si <br><li> Mini HDMI: No <br><li> Zoom óptico: Si <br><li> Zoom digital: Si <br><li> Tipo de pantalla: OLED <br><li> Modelo del Procesador: Chip A15 Bionic <br><li> Es a prueba de agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6metros) según la norma IEC 60529 <br><li> Lector de huella digital: No <br><li> Sensor de proximidad: Si <br><li> Origen: China"
            break;
        case "sierra":
            foto.src = "img/iphone_13_sierra.png"
            Descrip.innerHTML = "CARACTERISTICAS:<br><br><li>Marca: Apple <br><li> Modelo: iPhone 13 Pro <br><li> Color: Sierra <br><li> Memoria interna: 128 GB <br><li> Memoria RAM: 4 GB <br><li> Dual SIM: No <br><li> Compañía telefónica: Liberado <br><li> Sistema operativo: iOS 15 <br><li> Tamaño de la pantalla: 6.1<br><li> Resolución de la cámara: 12 MP <br><li> Red: 5G <br><li> Con pantalla táctil: Si <br><li> Cámara digital: Si <br><li> Capacidad de tarjeta de memoria: 128 GB <br><li> USB: USB-C <br><li> Teclado QWERTY: No <br><li> Wi-Fi: Si <br><li> Con GPS: Si<br><li> Radio: Si <br><li> Reproductor de música: Si <br><li> Grabador de voz: Si <br><li> Sintonizador de TV: No <br><li> Tamaño de SIM: Nano-SIM <br><li> Resolución de la pantalla: 2532 x 1170 pixeles a 460 ppi <br><li> Tipo de batería: De litio recargable integrada <br><li> Batería removible: No <br><li> Sensor de movimiento: Si <br><li> Brillo: Máximo de 1000 nits (normal); brillo máximo de 1,200 nits (HDR) <br><li> Flash en cámara frontal: Si <br><li> Cámara lenta: Si <br><li> Con Bluetooth: Si <br><li> Mini HDMI: No <br><li> Zoom óptico: Si <br><li> Zoom digital: Si <br><li> Tipo de pantalla: OLED <br><li> Modelo del Procesador: Chip A15 Bionic <br><li> Es a prueba de agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6metros) según la norma IEC 60529 <br><li> Lector de huella digital: No <br><li> Sensor de proximidad: Si <br><li> Origen: China"
            break;

        default:
            break;
    }
}


function calculatePrice() {
    result.innerHTML = ""
    result.classList.remove("correcto")
    result.classList.remove("incorrecto")
    result.classList.remove("display")

    if (producto.value == 0) {
        result.innerHTML = "Debe ingresar un color";
        result.classList.add("incorrecto");
        return console.log("incorrecto");
    }
    if (capacidad.value == 0) {
        result.innerHTML = "Debe ingresar la capacidad";
        result.classList.add("incorrecto");
        return console.log("incorrecto");
    }
    if (cantidad.value < 0 || cantidad.value > 10) {

        result.innerHTML = ("Debe ingresar una cantidad correcta");
        result.classList.add("incorrecto");
        return console.log("incorrecto");
    }

    else if (capacidad.value == 128) {
        prec = 48500;
    }
    else if (capacidad.value == 256) {
        prec = 61700
    }
    else if (capacidad.value == 512) {
        prec = 100068
    }

    var total = cantidad.value * prec;
    result.innerHTML = "Cotizacion : $" + total;
    result.classList.add("correcto")
}



