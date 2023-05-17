function valor(){
    var numero = document.getElementById("numero").value;
    if(numero>0){
        alert("El numero es positivo");
    }
    if(numero<0){
        alert("El numero es negativo");
    }
    if(numero==0){
        alert("El numero es 0");
    }    
}