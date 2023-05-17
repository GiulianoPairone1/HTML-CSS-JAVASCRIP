function mayor(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value; 
    var numero3 = document.getElementById("numero3").value;
    
    if(numero1>numero2 && numero1>numero3){
        alert("El numero "+numero1+ " es el mayor.") ; 
    }
    if(numero2>numero1 && numero2>numero3){
        alert("El numero "+numero2+" es el mayor.");
    }
    if(numero3>numero1 && numero3>numero2){
        alert("Elnumero "+numero3+" es el mayor");
    }
    alert("Los 3 numeros son iguales");
}
