var btn = document.getElementById('btn');
var inputx = document.getElementById('ex1');
var inputy = document.getElementById('ex2');
var x = Array();
var y = Array();
let miCanvas = document.getElementById('Migrafica').getContext("2d");
function llenarArrays(){
 var valorx= inputx.value;
 if(x.length >=5){
     alert('Array completamente lleno'+ x);
     inputx.value = '';
 }
 else{
     x.push(String(valorx));
    // alert('Se agrego un numero al array de la X  '+ x);
    inputx.value = '';
 }
 var valory= inputy.value;
 if(y.length >=5){
     alert('Array completamente lleno'+ y);
     inputy.value = '';
 }
 else{
     y.push(Number(valory));
     inputy.value = '';
    // alert('Se agrego un numero al array de la Y  '+ y);
 }

}



function creargrafica(){
    var chart = new Chart(miCanvas,{
        type:"bar",
        data:{
            labels: x,
            datasets:[
                {
                    label: "Mi grafica",
                    backgroundColor: 'rgb(19, 126, 169)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: y
                }
            ]
    
        }
    }
    )
}