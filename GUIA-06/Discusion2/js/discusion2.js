function guardar(){
   
    var producto = document.getElementById("pro").value;
    var precio = document.getElementById("pre").value;

    var fila="<tr><td>"+producto+"</td><td>"+"1"+"</td><td>"+precio +"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("registro").appendChild(btn);
}