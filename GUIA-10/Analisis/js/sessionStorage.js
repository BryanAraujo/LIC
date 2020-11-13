function init(){
    var name = document.getElementById('nombre').value;
            var select = document.getElementById('pais').value;
           var text = document.getElementById('comment').value;
    
        setInterval(() => {
            
            sessionStorage.setItem("nombre", name);
            sessionStorage.setItem("pais", select);
            sessionStorage.setItem("Biografia", text);
        }, 10000);
    
    
    
}
function registrar() {
    var name = document.getElementById('nombre').value;
    var select = document.getElementById('pais').value;
    var text = document.getElementById('comment').value;
    sessionStorage.setItem("nombre", name);
    sessionStorage.setItem("pais", select);
    sessionStorage.setItem("Biografia", text);
    var name = document.getElementById('nombre').value = "";
    var text = document.getElementById('comment').value = "";
    alert('Guardado');
}
function borrar() {
    sessionStorage.clear();
    alert("sessionStorage Limpio")
}
if (window.addEventListener) {
    window.addEventListener("load", init, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", init);
}