function validaNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;        
}

var arreglo;
arreglo = [];
var bandera=0;
var mayor,contador=0;
var menor
var l;
function ingresar(){
    contador++;
    dato = document.getElementById("dato").value;
    if(contador >= 6){
        alert("LLEGASTE AL LIMITE DE INGRESO DE NÚMEROS");
        console.log("Llegaste al limite");
    }else{
        arreglo.push(dato);
        console.log(arreglo);
    }
    dato = document.getElementById("dato").value = "";
}

function mostrar(){
    document.getElementById("n1").innerHTML = arreglo[0];
    document.getElementById("n2").innerHTML = arreglo[1];
    document.getElementById("n3").innerHTML = arreglo[2];
    document.getElementById("n4").innerHTML = arreglo[3];
    document.getElementById("n5").innerHTML = arreglo[4];
    document.getElementById("mayor").innerHTML = Math.max.apply(null,arreglo);
    document.getElementById("menor").innerHTML = Math.min.apply(null,arreglo);
}

function limpiar(){
    location.reload();
}